"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const STEP_EVENT = "mbk-scroll-steps";

gsap.registerPlugin(ScrollToPlugin);

type StepPayload = {
  source: string;
  steps: number[];
};

type StepEvent = CustomEvent<StepPayload>;

const isDesktop = () => window.matchMedia("(min-width: 868px)").matches;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const isFormControl = (el: HTMLElement) => {
  const tag = el.tagName;
  return el.isContentEditable || tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
};

const canScrollWithin = (el: HTMLElement, deltaY: number) => {
  const style = window.getComputedStyle(el);
  const overflowY = style.overflowY;
  const boundaryEpsilon = 2;
  const isScrollable =
    (overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay") &&
    el.scrollHeight > el.clientHeight;

  if (!isScrollable) return false;

  // Use a small epsilon so near-edge fractional pixels don't falsely report
  // "still scrollable", which can block section snapping until pointer moves.
  const canScrollDown =
    el.scrollTop + el.clientHeight < el.scrollHeight - boundaryEpsilon;
  const canScrollUp = el.scrollTop > boundaryEpsilon;

  return (deltaY > 0 && canScrollDown) || (deltaY < 0 && canScrollUp);
};

const shouldAllowNativeScroll = (event: WheelEvent) => {
  if (event.ctrlKey || event.metaKey) return true;

  let node = event.target as HTMLElement | null;
  while (node && node !== document.body) {
    if (isFormControl(node)) return true;
    if (canScrollWithin(node, event.deltaY)) return true;
    node = node.parentElement;
  }

  return false;
};

const findTargetIndex = (steps: number[], current: number, direction: 1 | -1) => {
  const epsilon = 6;

  if (direction === 1) {
    for (let i = 0; i < steps.length; i += 1) {
      if (steps[i] > current + epsilon) return i;
    }
    return steps.length - 1;
  }

  for (let i = steps.length - 1; i >= 0; i -= 1) {
    if (steps[i] < current - epsilon) return i;
  }
  return 0;
};

export default function DesktopScrollController() {
  const stepsBySourceRef = useRef<Record<string, number[]>>({});
  const orderedStepsRef = useRef<number[]>([]);
  const isAnimatingRef = useRef(false);
  const inputLockUntilRef = useRef(0);
  const animationFailsafeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Start moving immediately on input (no slow ease-in feel).
  const SNAP_EASE = "power2.out";
  const SNAP_BASE_DURATION = 1;
  const SNAP_MAX_DURATION = 1.45;
  // Fixed post-snap cooldown to absorb inertia tails from hard Mac flicks.
  const POST_ANIM_LOCK_MS = 220;

  const TOUCH_THRESHOLD = 28;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const rebuildSteps = () => {
      const combined = Object.values(stepsBySourceRef.current).flat();
      const unique = Array.from(
        new Set(combined.map((n) => Math.round(n)))
      ).sort((a, b) => a - b);
      orderedStepsRef.current = unique;
    };

    const handleSteps = (event: Event) => {
      const customEvent = event as StepEvent;
      if (!customEvent.detail) return;
      const { source, steps } = customEvent.detail;
      stepsBySourceRef.current[source] = steps;
      rebuildSteps();
    };

    const clearAnimationFailsafe = () => {
      if (animationFailsafeRef.current !== null) {
        clearTimeout(animationFailsafeRef.current);
        animationFailsafeRef.current = null;
      }
    };

    const getSnapDuration = (distance: number) => {
      const viewport = Math.max(window.innerHeight, 1);
      const viewportsTraveled = distance / viewport;
      if (viewportsTraveled <= 1.05) return SNAP_BASE_DURATION;
      const extra = Math.min(0.45, (viewportsTraveled - 1.05) * 0.35);
      return Math.min(SNAP_MAX_DURATION, SNAP_BASE_DURATION + extra);
    };

    const animateTo = (target: number) => {
      isAnimatingRef.current = true;
      const current = window.scrollY;
      const distance = Math.abs(target - current);
      const duration = getSnapDuration(distance);
      clearAnimationFailsafe();
      animationFailsafeRef.current = setTimeout(() => {
        // Safety net: if tween callbacks are ever skipped, avoid a stuck state.
        isAnimatingRef.current = false;
        inputLockUntilRef.current = performance.now() + POST_ANIM_LOCK_MS;
        animationFailsafeRef.current = null;
      }, Math.ceil((duration + 0.2) * 1000));

      gsap.killTweensOf(window);
      gsap.to(window, {
        scrollTo: { y: target, autoKill: false },
        duration,
        ease: SNAP_EASE,
        onComplete: () => {
          clearAnimationFailsafe();
          isAnimatingRef.current = false;
          inputLockUntilRef.current = performance.now() + POST_ANIM_LOCK_MS;
        },
        onInterrupt: () => {
          clearAnimationFailsafe();
          isAnimatingRef.current = false;
          inputLockUntilRef.current = performance.now() + POST_ANIM_LOCK_MS;
        },
      });
    };

    const stepInDirection = (direction: 1 | -1) => {
      const steps = orderedStepsRef.current;
      if (!steps.length) return false;

      const current = window.scrollY;
      const targetIndex = findTargetIndex(steps, current, direction);
      const target = steps[targetIndex];

      if (target === undefined) return false;
      if (Math.abs(target - current) < 4) return false;

      animateTo(target);
      return true;
    };

    // ===== Wheel =====
    const onWheel = (event: WheelEvent) => {
      if (!isDesktop()) return;
      if (prefersReducedMotion()) return;
      if (shouldAllowNativeScroll(event)) return;

      const steps = orderedStepsRef.current;
      if (!steps.length) return;

      const direction: 1 | -1 | 0 =
        event.deltaY > 0 ? 1 : event.deltaY < 0 ? -1 : 0;
      if (!direction) return;

      const current = window.scrollY;
      const epsilon = 6;
      const lastStep = steps[steps.length - 1];
      const firstStep = steps[0];
      if (direction === 1 && current >= lastStep - epsilon) return;
      if (direction === -1 && current <= firstStep + epsilon) return;

      event.preventDefault();

      if (isAnimatingRef.current) return;
      if (performance.now() < inputLockUntilRef.current) return;

      stepInDirection(direction);
    };

    // ===== Keyboard =====
    const onKeydown = (event: KeyboardEvent) => {
      if (!isDesktop()) return;
      if (prefersReducedMotion()) return;

      const target = event.target as HTMLElement | null;
      if (target && isFormControl(target)) return;

      const steps = orderedStepsRef.current;
      if (!steps.length) return;

      let direction: 1 | -1 | 0 = 0;
      let jumpTarget: number | null = null;

      switch (event.key) {
        case "ArrowDown":
        case "PageDown":
        case " ":
          direction = 1;
          break;
        case "ArrowUp":
        case "PageUp":
          direction = -1;
          break;
        case "Home":
          jumpTarget = steps[0];
          break;
        case "End":
          jumpTarget = steps[steps.length - 1];
          break;
        default:
          return;
      }

      if (isAnimatingRef.current || performance.now() < inputLockUntilRef.current) {
        event.preventDefault();
        return;
      }

      event.preventDefault();

      if (jumpTarget !== null) {
        if (Math.abs(jumpTarget - window.scrollY) >= 4) {
          animateTo(jumpTarget);
        }
        return;
      }

      if (direction !== 0) stepInDirection(direction);
    };

    // ===== Touch (single step per swipe) =====
    let touchStartY = 0;
    let touchActive = false;

    const onTouchStart = (event: TouchEvent) => {
      if (!isDesktop()) return;
      if (event.touches.length !== 1) return;
      touchStartY = event.touches[0].clientY;
      touchActive = true;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!isDesktop()) return;
      if (!touchActive || !orderedStepsRef.current.length) return;

      const target = event.target as HTMLElement | null;
      if (target) {
        if (isFormControl(target)) return;
        let node: HTMLElement | null = target;
        const deltaY = touchStartY - event.touches[0].clientY;
        while (node && node !== document.body) {
          if (canScrollWithin(node, deltaY)) return;
          node = node.parentElement;
        }
      }

      const dy = touchStartY - event.touches[0].clientY;
      if (Math.abs(dy) < TOUCH_THRESHOLD) {
        if (event.cancelable) event.preventDefault();
        return;
      }

      if (event.cancelable) event.preventDefault();

      if (isAnimatingRef.current || performance.now() < inputLockUntilRef.current) return;

      const direction: 1 | -1 = dy > 0 ? 1 : -1;
      if (stepInDirection(direction)) {
        touchActive = false;
      }
    };

    const onTouchEnd = () => {
      touchActive = false;
    };

    window.addEventListener(STEP_EVENT, handleSteps);
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeydown);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener(STEP_EVENT, handleSteps);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeydown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
      gsap.killTweensOf(window);
      clearAnimationFailsafe();
    };
  }, []);

  return null;
}
