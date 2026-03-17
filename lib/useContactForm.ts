"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export type ContactRole = "Operator" | "Partner";

type ContactFormData = {
    name: string;
    company: string;
    jobRole: string;
    email: string;
    phone: string;
    challenge: string;
};

const initialFormData: ContactFormData = {
    name: "",
    company: "",
    jobRole: "",
    email: "",
    phone: "",
    challenge: "",
};

const normalizeRole = (value: unknown): ContactRole | null => {
    if (typeof value !== "string") return null;
    const lowered = value.toLowerCase();
    if (lowered === "operator") return "Operator";
    if (lowered === "partner") return "Partner";
    return null;
};

export function useContactForm(defaultRole: ContactRole = "Operator") {
    const [role, setRole] = useState<ContactRole>(defaultRole);
    const [formData, setFormData] = useState<ContactFormData>(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    useEffect(() => {
        const handleSetRole = (event: Event) => {
            const customEvent = event as CustomEvent<{ role?: string }>;
            const nextRole = normalizeRole(customEvent.detail?.role);
            if (nextRole) {
                setRole(nextRole);
            }
        };

        window.addEventListener("set-contact-role", handleSetRole as EventListener);

        return () => {
            window.removeEventListener("set-contact-role", handleSetRole as EventListener);
        };
    }, []);

    const handleFieldChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setFormData((previous) => ({ ...previous, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!formData.name || !formData.email || !formData.challenge) {
            setSubmitMessage("Please fill Name, Email, and Challenge before submitting.");
            return;
        }

        setIsSubmitting(true);
        setSubmitMessage("");

        try {
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                setSubmitMessage("Email service is not configured yet.");
                return;
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    to_email: "hello@mbk.global",
                    name: formData.name,
                    company: formData.company || "-",
                    role: formData.jobRole || "-",
                    email: formData.email,
                    phone: formData.phone || "-",
                    user_type: role,
                    time: new Date().toLocaleString(),
                    challenge: formData.challenge,
                    reply_to: formData.email,
                },
                {
                    publicKey,
                }
            );

            setSubmitMessage("Thanks! Your message has been sent.");
            setFormData(initialFormData);
        } catch (error: any) {
            setSubmitMessage(
                error?.text || "Unable to send right now. Please check EmailJS settings and try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        role,
        setRole,
        formData,
        isSubmitting,
        submitMessage,
        handleFieldChange,
        handleSubmit,
    };
}
