export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-primary py-16 px-6">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p className="text-white text-lg opacity-95">
                        Effective Date: February 7, 2026
                    </p>
                </div>
            </header>

            {/* Content */}
            <div className="container mx-auto max-w-4xl px-6 py-12">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    {/* Key Point Highlight */}
                    <div className="bg-yellow-50 border-l-4 border-primary p-6 rounded-lg mb-8">
                        <p className="text-lg font-semibold text-gray-900">
                            <strong>Key Point:</strong> Voiding operates on a "Local First" basis. Your health data is stored primarily on your device. We do not sell your personal data to third parties.
                        </p>
                    </div>

                    {/* Section 1 */}
                    <section className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-primary">
                            1. Overview
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Voiding App ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how our application handles your personal and health data.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-primary">
                            2. Data We Collect & How We Use It
                        </h2>

                        <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                            A. Health Connect & Apple Health Data
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our app integrates with Google Health Connect (Android) and Apple HealthKit (iOS) to provide you with a comprehensive view of your hydration.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>
                                <strong>Data Accessed:</strong>
                                <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                                    <li><strong>Hydration (Read/Write):</strong> We read your hydration records to display your daily intake totals. We write data to these services when you log water intake within our app.</li>
                                </ul>
                            </li>
                            <li><strong>Purpose:</strong> To sync your hydration logs across your device ecosystem and provide accurate daily balance tracking.</li>
                            <li><strong>Storage:</strong> This data is processed locally on your device and displayed within the app. It is not transmitted to our external servers.</li>
                        </ul>

                        <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                            B. User Provided Data
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li><strong>Clinical Logs:</strong> Voiding logs, bowel movements, and symptom tags are stored locally on your device using secure local storage.</li>
                            <li><strong>Profile Information:</strong> Name and preferences (e.g., units, goals) are stored locally.</li>
                        </ul>

                        <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                            C. Backups
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li><strong>Method:</strong> You may choose to export a backup of your data to your personal cloud storage (e.g., iCloud Drive, Google Drive).</li>
                            <li><strong>Control:</strong> These backups are files under your control. We do not have access to them.</li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-primary">
                            3. Data Sharing
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We do <strong>NOT</strong> share your Health Connect or Apple Health data with:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>Advertising platforms</li>
                            <li>Data brokers</li>
                            <li>Information resellers</li>
                            <li>Third-party analytics services</li>
                        </ul>
                    </section>

                    {/* Section 4 */}
                    <section className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-primary">
                            4. Your Rights
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li><strong>Access:</strong> View all data stored within the app.</li>
                            <li><strong>Delete:</strong> Clear all app data via the "Danger Zone" in Settings.</li>
                            <li><strong>Revoke Permissions:</strong> You can revoke Health Connect/HealthKit permissions at any time via your device settings.</li>
                            <li><strong>Export:</strong> Export your data at any time in PDF format.</li>
                        </ul>
                    </section>

                    {/* Section 5 */}
                    <section className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-primary">
                            5. Data Security
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We implement industry-standard security measures:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>All data is stored locally on your device using encrypted storage</li>
                            <li>No cloud servers or external databases</li>
                            <li>Health data access requires device authentication</li>
                        </ul>
                    </section>

                    {/* Section 6 */}
                    <section className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-primary">
                            6. Children's Privacy
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our app is not intended for children under 13. We do not knowingly collect data from children.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-primary">
                            7. Changes to This Policy
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Effective Date" at the top of this policy.
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-primary">
                            8. Contact Us
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you have questions about this Privacy Policy, please contact us at:
                        </p>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <p className="text-gray-900 mb-2">
                                <strong>Email:</strong>{" "}
                                <a href="mailto:privacy@voiding.app" className="text-primary hover:underline">
                                    privacy@voiding.app
                                </a>
                            </p>
                            <p className="text-gray-900">
                                <strong>Website:</strong>{" "}
                                <a href="https://voiding.app" className="text-primary hover:underline">
                                    voiding.app
                                </a>
                            </p>
                        </div>
                    </section>
                </div>

                {/* Back to Home */}
                <div className="text-center mt-12">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </a>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 px-6 mt-20">
                <div className="container mx-auto max-w-4xl text-center">
                    <p className="text-gray-400">&copy; 2026 Voiding App. All rights reserved.</p>
                </div>
            </footer>
        </main>
    );
}
