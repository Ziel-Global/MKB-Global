import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsAndConditionsPage() {
    return (
        <div className="flex min-h-[100dvh] flex-col w-full bg-white relative font-sans text-gray-900 selection:bg-[#8B3DFF] selection:text-white">
            <div className="w-full max-w-[1440px] mx-auto flex flex-col relative items-center">
                <Header />
            </div>

            <main className="w-full flex-1 mt-32 mb-24 px-6 md:px-16 lg:px-24">
                <div className="max-w-[800px] mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#2E0E68] mb-8">Terms & Conditions</h1>
                    <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
                        <p><strong>Effective Date:</strong> March 2026</p>

                        <h2 className="text-2xl font-bold text-[#3D1E85] mt-8 mb-4">1. Acceptance of Terms</h2>
                        <p>By accessing or using the website of MBK Global Holding (&quot;MBK Global,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), located at mbk.global, you agree to comply with and be bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, you must not use our website or services.</p>

                        <h2 className="text-2xl font-bold text-[#3D1E85] mt-8 mb-4">2. Use of the Website</h2>
                        <p>You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of the website. Prohibited behavior includes harassing or causing distress to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.</p>

                        <h2 className="text-2xl font-bold text-[#3D1E85] mt-8 mb-4">3. Intellectual Property Rights</h2>
                        <p>All content, trademarks, logos, design, text, graphics, and other intellectual property displayed on this website belong to MBK Global or its licensors. You may view and print content from the website for personal and non-commercial use only. You may not reproduce, modify, distribute, or otherwise use any of our intellectual property without prior written consent from MBK Global.</p>

                        <h2 className="text-2xl font-bold text-[#3D1E85] mt-8 mb-4">4. Disclaimers</h2>
                        <p>The information on this website is provided &quot;as is&quot; without any representations or warranties, express or implied. MBK Global makes no representations or warranties in relation to this website or the information and materials provided on this website. While we endeavor to keep the information up to date and correct, we make no guarantees about the completeness, accuracy, reliability, or suitability of the content.</p>

                        <h2 className="text-2xl font-bold text-[#3D1E85] mt-8 mb-4">5. Limitation of Liability</h2>
                        <p>To the maximum extent permitted by applicable law, MBK Global shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, use of, or inability to use the website, or any errors or omissions in the content thereof. This includes damages to your computer equipment or other property resulting from your access to the website.</p>

                        <h2 className="text-2xl font-bold text-[#3D1E85] mt-8 mb-4">6. Third-Party Links</h2>
                        <p>Our website may contain links to third-party websites or services that are not owned or controlled by MBK Global. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. Accessing any third-party websites linked to this website is at your own risk.</p>

                        <h2 className="text-2xl font-bold text-[#3D1E85] mt-8 mb-4">7. Governing Law and Jurisdiction</h2>
                        <p>These Terms &amp; Conditions are governed by and construed in accordance with the laws of the State of Qatar. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Qatar.</p>

                        <h2 className="text-2xl font-bold text-[#3D1E85] mt-8 mb-4">8. Modifications to Terms</h2>
                        <p>MBK Global reserves the right to revise these Terms &amp; Conditions at any time. By using this website, you are expected to review these Terms &amp; Conditions on a regular basis to ensure you understand all terms and conditions governing use of this website.</p>

                        <h2 className="text-2xl font-bold text-[#3D1E85] mt-8 mb-4">9. Contact Information</h2>
                        <p>For any questions regarding these Terms &amp; Conditions, please contact us at:</p>
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
