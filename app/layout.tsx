import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Air Crash Museum",
  description: "Explore the history and lessons of the world's most famous air disasters. Learn about AF447, JAL123, MH370, and other significant aviation accidents to understand their causes, investigations, and impact on flight safety.",
  keywords: [
    "air crash",
    "aviation accident",
    "plane crash",
    "air disaster",
    "flight safety",
    "airline accident",
    "aviation history",
    "air crash museum",
    "famous air crashes",
    "flight investigation",
    "AF447",
    "JAL123",
    "MH370",
    "TK981",
    "TWA800",
    "Pan Am 103",
    "UA232",
    "aviation safety",
    "aircraft accident"
  ],
  openGraph: {
    title: "Air Crash Museum",
    description: "Explore the history and lessons of the world's most famous air disasters. Learn about causes, investigations, and safety improvements.",
    type: "website",
    url: "https://your-domain.com/",
    siteName: "Air Crash Museum",
  },
  twitter: {
    card: "summary_large_image",
    title: "Air Crash Museum",
    description: "Explore aviation history and safety lessons from famous air disasters.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  alternates: {
    canonical: "https://your-domain.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 fixed top-0 left-0 z-50 shadow-lg shadow-gray-200/20 dark:shadow-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="flex items-center justify-between h-16 lg:h-18">
              {/* Logo and Brand */}
              <div className="flex items-center">
                <a 
                  href="/" 
                  className="group flex items-center gap-3 text-xl lg:text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                >
                  <div className="relative">
                    <span className="text-2xl lg:text-3xl group-hover:scale-110 transition-transform duration-300">✈️</span>
                    <div className="absolute -inset-1 bg-blue-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent font-extrabold tracking-tight">
                    Air Crash Museum
                  </span>
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="flex items-center space-x-1">
                <a 
                  href="/" 
                  className="group relative px-4 py-2 text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 rounded-lg hover:bg-blue-50/80 dark:hover:bg-blue-900/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Home
                  </span>
                </a>
                <a 
                  href="/statistics" 
                  className="group relative px-4 py-2 text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 rounded-lg hover:bg-blue-50/80 dark:hover:bg-blue-900/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Statistics
                  </span>
                </a>
                <a 
                  href="/safety" 
                  className="group relative px-4 py-2 text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 rounded-lg hover:bg-blue-50/80 dark:hover:bg-blue-900/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Safety
                  </span>
                </a>
                <a 
                  href="/globe" 
                  className="group relative px-4 py-2 text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 rounded-lg hover:bg-blue-50/80 dark:hover:bg-blue-900/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Globe
                  </span>
                </a>
                <a 
                  href="/about" 
                  className="group relative px-4 py-2 text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 rounded-lg hover:bg-blue-50/80 dark:hover:bg-blue-900/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    About
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="pt-20">{children}</div>
        <footer className="bg-gray-900 text-white mt-20">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 !text-white">
                  <span className="text-blue-300">✈️</span>
                  Air Crash Museum
                </h3>
                <p className="text-gray-300 leading-relaxed mt-6">
                  Dedicated to preserving the history and lessons of aviation accidents to ensure safer skies for future generations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center !text-white">Featured Cases</h3>
                <ul className="space-y-2 text-gray-300 mt-6">
                  <li><a href="/af447" className="hover:text-blue-300 transition-colors">Air France 447</a></li>
                  <li><a href="/jal123" className="hover:text-blue-300 transition-colors">Japan Airlines 123</a></li>
                  <li><a href="/mh370" className="hover:text-blue-300 transition-colors">Malaysia Airlines 370</a></li>
                  <li><a href="/tk981" className="hover:text-blue-300 transition-colors">Turkish Airlines 981</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center !text-white">Mission</h3>
                <p className="text-gray-300 text-sm leading-relaxed mt-6">
                  Our mission is to honor the memory of those lost in aviation accidents while educating the public about flight safety and the continuous improvements in aviation technology.
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
              <p>© 2024 Air Crash Museum | Educational Resource for Aviation Safety</p>
              <p className="mt-1">Remember the past • Learn for the future • Fly safer</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
