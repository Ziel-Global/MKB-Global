import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
    return (
        <div className="flex min-h-[100dvh] flex-col w-full bg-white relative font-sans text-gray-900 selection:bg-[#8B3DFF] selection:text-white">
            <div className="w-full max-w-[1440px] mx-auto flex flex-col relative items-center">
                <Header />
            </div>

            <main className="w-full flex-1 mt-32 mb-24 px-6 md:px-16 lg:px-24">
                <div className="max-w-[800px] mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#2E0E68] mb-8">Privacy Policy</h1>
                    <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
                        <p><strong>Effective Date:</strong> March 2026</p>

                        <h2 className="text-2xl font-bold text-[#3D1E85] mt-8 mb-4">1. Introduction</h2>
                        <p>Welcome to MBK Global. We are committed to protecting the privacy and security of your personal data. This Privacy Policy explains how MBK Global Holding (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, shares, and protects information when you visit our website (mbk.global) or interact with our services, including our Operator and Partner capabilities.</p>

                        <h2 className="text-2xl font-bold text-[#3D1E85] mt-8 mb-4">2. Information We Collect</h2>
                        <p>We may collect information you provide directly to us when you use our website, contact us, or participate in our initiatives. This includes:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Contact Information:</strong> Name, email address, phone number, and physical address.</li>
                            <li><strong>Professional Details:</strong> Company name, job role, and the challenges your organization is facing.</li>
                            <li><strong>Automatically Collected Information:</strong> IP address, browser type, operating system, and data concerning your interaction with our website using cookies and similar tracking technologies.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[#3D1E85] mt-8 mb-4">3. How We Use Your Information</h2>
                        <p>We use the collected information to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide, maintain, and improve our services and website operations.</li>
                            <li>Communicate with you regarding partnership prospects, operator inquiries, and support.</li>
                            <li>Analyze usage trends and measure the effectiveness of our digital properties.</li>
                            <li>Comply with legal and regulatory requirements.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[#3D1E85] mt-8 mb-4">4. Sharing of Information</h2>
                        <p>We do not sell your personal data. We may share information with trusted third-party service providers who help us operate our business, provided they agree to keep the information confidential. We may also disclose information if required by law or to protect the rights, property, or safety of MBK Global, our partners, clients, or others.</p>

                        <h2 className="text-2xl font-bold text-[#3D1E85] mt-8 mb-4">5. Data Security</h2>
                        <p>We implement appropriate technical and organizational security measures designed to protect your data against unauthorized access, destruction, or alteration. However, no internet-based platform is completely secure, and we cannot guarantee the absolute security of your information.</p>

                        <h2 className="text-2xl font-bold text-[#3D1E85] mt-8 mb-4">6. Your Rights</h2>
                        <p>Depending on your location and applicable data protection laws, you may have the right to access, correct, delete, or restrict the processing of your personal data. To exercise these rights, please contact us at the email provided below.</p>

                        <h2 className="text-2xl font-bold text-[#3D1E85] mt-8 mb-4">7. Contact Us</h2>
                        <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
                        <ul className="space-y-1 mt-2">
                            <li><strong>Email:</strong> <a href="mailto:hello@mbk.global" className="text-[#8B3DFF] hover:underline">hello@mbk.global</a></li>
                            <li><strong>Phone:</strong> +974 4467 9005</li>
                            <li><strong>Registered Address:</strong> Office 1204, Floor 12, Manarat Lusail Tower, Lusail Marina, Doha, Qatar</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}
