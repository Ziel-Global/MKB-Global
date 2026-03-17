import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyHero from "@/components/caseStudyDetails/CaseStudyHero";
import CaseStudySection from "@/components/caseStudyDetails/CaseStudySection";
import { caseStudiesData } from "@/data/caseStudiesData";

// Generate static params for all case studies
export function generateStaticParams() {
    return caseStudiesData.map((study) => ({
        id: String(study.id),
    }));
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const study = caseStudiesData.find((s) => String(s.id) === id);

    if (!study) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col pt-0 bg-white font-sans text-gray-900 selection:bg-[#8B3DFF] selection:text-white">
            <Header />

            <main className="w-full flex-1 pt-24 md:pt-32 pb-20">
                {/* ── Hero section — uses the image from the clicked case study ── */}
                <CaseStudyHero
                    title={study.title}
                    imageSrc={study.image}
                />

                {/* ── Problem section ── */}
                <CaseStudySection
                    title="Problem"
                    imageSrc="/caseStudiesdetails/one.jpg"
                >
                    <p>
                        A global oil and gas company manages thousands of kilometers of pipelines across remote and challenging terrains. It recognized that its longstanding surveillance methods were no longer adequate and cost-effective.
                    </p>
                    <p>Traditional monitoring methods were:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Costly and time-consuming</li>
                        <li>Prone to missing critical issues</li>
                        <li>Inefficient for detecting both security threats (unauthorized people or vehicles) and structural anomalies (corrosion, insulation defects, leaks)</li>
                    </ul>
                    <p>
                        The client needed a solution to monitor pipelines faster, more accurately, and cost-effectively, ensuring safety, security, and environmental protection.
                    </p>
                </CaseStudySection>

                {/* ── Solution section ── */}
                <CaseStudySection
                    title="Solution"
                    imageSrc="/caseStudiesdetails/two.jpg"
                >
                    <p>
                        Innowise implemented an AI-powered, ML-based pipeline monitoring system using high-resolution drone imagery.
                    </p>
                    <p>Key features and processes included:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Comprehensive image acquisition performed using high-resolution drone footage captured across diverse pipeline environments with varying lighting, weather conditions, altitudes, viewing angles, and seasonal changes, ensuring a dataset that accurately reflected real operating scenarios.</li>
                        <li>Advanced normalization and filtering applied through geometric and lighting adjustments, precise color correction, and noise reduction techniques, producing consistent, high-quality imagery suitable for stable analytical processing.</li>
                        <li>Detailed annotation and preprocessing enabled accurate tagging of people, vehicles, and construction equipment, along with filtering of irrelevant data, enhancement of image clarity, and post-processing adjustments for improved interpretability.</li>
                        <li>High-accuracy detection models trained using convolutional neural networks, allowing reliable recognition and differentiation of entities appearing near pipelines under a wide range of conditions.</li>
                        <li>Integrated anomaly-detection algorithms developed to identify corrosion, insulation defects, structural damage, and potential leaks, rigorously tested and fine-tuned to deliver high operational reliability.</li>
                        <li>Scalable cloud-based infrastructure provided secure, flexible storage, supporting continuous and efficient monitoring across thousands of kilometers of pipeline.</li>
                    </ul>
                </CaseStudySection>

                {/* ── Results section ── */}
                <CaseStudySection
                    title="Results"
                    imageSrc="/caseStudiesdetails/three.jpg"
                >
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Effective remote monitoring of pipelines in hard-to-access areas</li>
                        <li>Reduced false positives by up to 30%, improving detection of unauthorized personnel, vehicles, and equipment</li>
                        <li>Detected corrosion, insulation defects, and leaks early, enhancing safety and environmental protection</li>
                        <li>Strengthened security and reduced risk of vandalism and theft, safeguarding critical infrastructure</li>
                    </ul>
                    <p className="mt-4">
                        Overall, the solution delivered substantial operational value by increasing visibility, improving decision-making, and reducing manual surveillance costs. The client gained a more reliable, data-driven monitoring system that boosted both safety and efficiency. As a result, the Client expressed strong satisfaction with the improved control and protection of their pipeline network.
                    </p>
                </CaseStudySection>
            </main>

        </div>
    );
}
