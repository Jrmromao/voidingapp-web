import Link from "next/link";
import Image from "next/image";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: '#f8f7f6' }}>
            {/* Header */}
            <header className="py-16 px-6" style={{ backgroundColor: '#eebd2b' }}>
                <div className="container mx-auto max-w-4xl flex flex-col items-center text-center">
                    <div className="mb-6">
                        <Image
                            src="/splash-logo.png"
                            alt="Voiding App Logo"
                            width={100}
                            height={100}
                            className="w-auto h-auto object-contain"
                        />
                    </div>
                    <h1 className="text-5xl font-normal text-white mb-4 font-['Georgia'] tracking-wide">Privacy Policy</h1>
                    <p className="text-white text-lg opacity-95 font-sans">
                        Effective Date: February 7, 2026
                    </p>
                </div>
            </header>

            {/* Content */}
            <div className="container mx-auto max-w-4xl px-6 py-12">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                    {/* Key Point Highlight */}
                    <div className="bg-yellow-50 border-l-4 border-[#eebd2b] p-6 rounded-r-xl mb-10">
                        <p className="text-lg font-medium text-gray-900 leading-relaxed">
                            <strong className="text-black">Key Point:</strong> Voiding operates on a "Local First" basis. Your health data is stored primarily on your device. We do not sell your personal data to third parties.
                        </p>
                    </div>

                    {/* Section 1 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-yellow-100 text-[#eebd2b] flex items-center justify-center text-sm font-bold">1</span>
                            Overview
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Voiding App ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how our application handles your personal and health data.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-yellow-100 text-[#eebd2b] flex items-center justify-center text-sm font-bold">2</span>
                            Data We Collect & How We Use It
                        </h2>

                        <div className="pl-11">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                A. Health Connect & Apple Health Data
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Our app integrates with Google Health Connect (Android) and Apple HealthKit (iOS) to provide you with a comprehensive view of your hydration.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="bg-gray-50 p-4 rounded-xl">
                                    <strong className="block text-gray-900 mb-1">Data Accessed</strong>
                                    <span className="text-gray-600">We read your hydration records to display your daily intake totals. We write data to these services when you log water intake within our app.</span>
                                </li>
                                <li className="bg-gray-50 p-4 rounded-xl">
                                    <strong className="block text-gray-900 mb-1">Purpose</strong>
                                    <span className="text-gray-600">To sync your hydration logs across your device ecosystem and provide accurate daily balance tracking.</span>
                                </li>
                                <li className="bg-gray-50 p-4 rounded-xl">
                                    <strong className="block text-gray-900 mb-1">Storage</strong>
                                    <span className="text-gray-600">This data is processed locally on your device and displayed within the app. It is not transmitted to our external servers.</span>
                                </li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                B. User Provided Data
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
                                <li><strong>Clinical Logs:</strong> Voiding logs, bowel movements, and symptom tags are stored locally on your device using secure local storage.</li>
                                <li><strong>Profile Information:</strong> Name and preferences (e.g., units, goals) are stored locally.</li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                C. Backups
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                <li><strong>Method:</strong> You may choose to export a backup of your data to your personal cloud storage (e.g., iCloud Drive, Google Drive).</li>
                                <li><strong>Control:</strong> These backups are files under your control. We do not have access to them.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-yellow-100 text-[#eebd2b] flex items-center justify-center text-sm font-bold">3</span>
                            Data Sharing
                        </h2>
                        <div className="pl-11">
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We do <strong>NOT</strong> share your Health Connect or Apple Health data with:
                            </p>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {['Advertising platforms', 'Data brokers', 'Information resellers', 'Third-party analytics services'].map((item) => (
                                    <div key={item} className="flex items-center gap-2 text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
                                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-yellow-100 text-[#eebd2b] flex items-center justify-center text-sm font-bold">4</span>
                            Your Rights
                        </h2>
                        <div className="pl-11 space-y-3">
                            <p className="text-gray-600">You have the right to:</p>
                            <ul className="space-y-2 text-gray-600">
                                <li>• <strong>Access:</strong> View all data stored within the app.</li>
                                <li>• <strong>Delete:</strong> Clear all app data via the "Danger Zone" in Settings.</li>
                                <li>• <strong>Revoke Permissions:</strong> You can revoke Health Connect/HealthKit permissions at any time via your device settings.</li>
                                <li>• <strong>Export:</strong> Export your data at any time in PDF format.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-yellow-100 text-[#eebd2b] flex items-center justify-center text-sm font-bold">5</span>
                            Data Security
                        </h2>
                        <div className="pl-11">
                            <p className="text-gray-600 mb-4">We implement industry-standard security measures:</p>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    All data is stored locally on your device using encrypted storage
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    No cloud servers or external databases
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    Health data access requires device authentication
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-yellow-100 text-[#eebd2b] flex items-center justify-center text-sm font-bold">6</span>
                            Children's Privacy
                        </h2>
                        <div className="pl-11">
                            <p className="text-gray-600 leading-relaxed">
                                Our app is not intended for children under 13. We do not knowingly collect data from children.
                            </p>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-yellow-100 text-[#eebd2b] flex items-center justify-center text-sm font-bold">7</span>
                            Changes to This Policy
                        </h2>
                        <div className="pl-11">
                            <p className="text-gray-600 leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Effective Date" at the top of this policy.
                            </p>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-yellow-100 text-[#eebd2b] flex items-center justify-center text-sm font-bold">8</span>
                            Contact Us
                        </h2>
                        <div className="pl-11">
                            <p className="text-gray-600 leading-relaxed mb-6">
                                If you have questions about this Privacy Policy, please contact us at:
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <a href="mailto:privacy@voiding.app" className="block p-6 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-colors group">
                                    <div className="text-sm font-bold text-gray-400 uppercase mb-1">Email</div>
                                    <div className="text-lg font-bold text-gray-900 group-hover:text-[#eebd2b]">privacy@voiding.app</div>
                                </a>
                                <a href="https://voiding.app" className="block p-6 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-colors group">
                                    <div className="text-sm font-bold text-gray-400 uppercase mb-1">Website</div>
                                    <div className="text-lg font-bold text-gray-900 group-hover:text-[#eebd2b]">voiding.app</div>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Back to Home */}
                <div className="text-center mt-12 pb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all transform hover:scale-105 shadow-lg"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-[#181611] text-white py-12 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <p className="text-gray-400">&copy; 2026 Voiding App. All rights reserved.</p>
                </div>
            </footer>
        </main>
    );
}
