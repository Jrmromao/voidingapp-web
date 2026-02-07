import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#f8f7f6' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6" style={{ backgroundColor: '#eebd2b' }}>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="flex-1 text-white">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-24 h-24 flex items-center justify-center">
                  <Image
                    src="/splash-logo.png"
                    alt="Voiding App Logo"
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h1 className="text-5xl md:text-6xl font-normal leading-tight font-['Georgia'] tracking-wider">
                  Voiding
                </h1>
              </div>
              <p className="text-lg md:text-xl mb-4 opacity-90 font-light tracking-[0.2em] font-['Georgia'] uppercase">
                Clinical Bladder Diary
              </p>
              <p className="text-lg mb-8 opacity-90 max-w-xl font-sans">
                Professional bladder diary app for tracking voiding patterns, hydration, and bowel movements.
                Designed for patients and healthcare providers.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-3.5 bg-black text-white px-7 py-3.5 rounded-xl hover:bg-gray-900 transition-all transform hover:scale-105 shadow-xl border border-gray-800"
                  style={{ minWidth: '200px' }}
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <path d="M4.5 4.35C4.5 3.99 4.63 3.71 4.9 3.52L13.1 11.9L4.9 20.48C4.63 20.29 4.5 20.01 4.5 19.65V4.35Z" fill="#2196F3" />
                    <path d="M16.9 15.7L13.1 11.9L18.45 8.7L16.9 15.7ZM19.55 14.1L16.9 15.7L18.45 8.7L19.55 9.9C19.8 10.3 19.9 10.8 19.9 11.3V12.7C19.9 13.2 19.8 13.7 19.55 14.1Z" fill="#FFC107" />
                    <path d="M13.1 11.9L4.9 3.52L16.3 9.9L13.1 11.9Z" fill="#4CAF50" />
                    <path d="M13.1 11.9L16.3 14.1L4.9 20.48L13.1 11.9Z" fill="#F44336" />
                  </svg>
                  <div className="text-left leading-none">
                    <div className="text-[11px] font-medium opacity-70 mb-1 uppercase tracking-widest font-sans">GET IT ON</div>
                    <div className="text-xl font-bold tracking-tight font-sans">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right - App Preview */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-72 h-[600px] bg-white rounded-[3rem] shadow-2xl p-3 border-8 border-gray-800 relative z-10">
                  <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative bg-black">
                    <Image
                      src="/app_screenshot.png"
                      alt="Voiding App Screenshot"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Clinical-Grade Tracking
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
            Designed for patients and healthcare providers following urology best practices
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#eebd2b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Volume Estimates</h3>
              <p className="text-gray-600 leading-relaxed">
                Clinical volume ranges (50-500ml) based on urology standards for accurate tracking.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#eebd2b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Trends & Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Daily, weekly, and monthly charts to visualize patterns and share with your doctor.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#eebd2b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Privacy First</h3>
              <p className="text-gray-600 leading-relaxed">
                All data stored locally on your device. Optional Health Connect/HealthKit sync.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Start Tracking Today
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join patients and healthcare providers using Voiding for clinical bladder diary tracking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3.5 bg-black text-white px-7 py-3.5 rounded-xl hover:bg-gray-900 transition-all transform hover:scale-105 shadow-xl border border-gray-800"
              style={{ minWidth: '200px' }}
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M4.5 4.35C4.5 3.99 4.63 3.71 4.9 3.52L13.1 11.9L4.9 20.48C4.63 20.29 4.5 20.01 4.5 19.65V4.35Z" fill="#2196F3" />
                <path d="M16.9 15.7L13.1 11.9L18.45 8.7L16.9 15.7ZM19.55 14.1L16.9 15.7L18.45 8.7L19.55 9.9C19.8 10.3 19.9 10.8 19.9 11.3V12.7C19.9 13.2 19.8 13.7 19.55 14.1Z" fill="#FFC107" />
                <path d="M13.1 11.9L4.9 3.52L16.3 9.9L13.1 11.9Z" fill="#4CAF50" />
                <path d="M13.1 11.9L16.3 14.1L4.9 20.48L13.1 11.9Z" fill="#F44336" />
              </svg>
              <div className="text-left leading-none">
                <div className="text-[11px] font-medium opacity-70 mb-1 uppercase tracking-widest font-sans">GET IT ON</div>
                <div className="text-xl font-bold tracking-tight font-sans">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Voiding</h3>
              <p className="text-gray-400">Clinical Bladder Diary</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:support@voiding.app" className="hover:text-white transition-colors">support@voiding.app</a></li>
                <li><a href="mailto:privacy@voiding.app" className="hover:text-white transition-colors">privacy@voiding.app</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Voiding App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main >
  );
}
