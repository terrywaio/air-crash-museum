"use client";

import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Back to home button */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:bg-white dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-blue-400 dark:hover:text-blue-200 mb-8"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-medium">Back to Home</span>
        </Link>

        {/* Page title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Creator of the Air Crash Museum - Preserving Aviation History
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-xl border-2 border-teal-400">
                <Image 
                  src="/images/author/avatar.jpg" 
                  alt="Terry Han" 
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Terry Han
              </h2>
              <p className="text-lg text-teal-600 dark:text-teal-400 mb-2">
                From Hangzhou, China
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Grade 12 · Favorite aircraft: Boeing 777-300
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-600">
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                  I'm a high school student, and I independently built this website. I have a deep passion for aviation and hope that by curating and visualizing major aviation events, more people can learn about aviation history and safety.
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Email:</span> <a href="mailto:terrywai7114@gmail.com" className="text-teal-600 dark:text-teal-400 hover:underline">terrywai7114@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-2xl shadow-2xl p-12">
            <p className="text-sm text-white italic">
              All content is for educational and informational purposes only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 
