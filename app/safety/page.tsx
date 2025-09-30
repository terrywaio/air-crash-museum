"use client";

import Link from "next/link";
import { useState } from "react";

const safetyCategories = [
  {
    id: "structural",
    title: "Structural Design",
    icon: "🔧",
    description: "Aircraft structural integrity and design improvements",
    color: "from-blue-300 to-blue-500",
    improvements: [
      {
        title: "Cargo Door Design",
        accident: "Turkish Airlines 981 (1974)",
        improvement: "Redesigned cargo door latching mechanisms with fail-safe systems",
        impact: "Prevented future catastrophic decompression incidents"
      },
      {
        title: "Structural Maintenance",
        accident: "Japan Airlines 123 (1985)", 
        improvement: "Enhanced inspection procedures for pressure bulkheads and repairs",
        impact: "Stricter quality control for structural repairs"
      },
      {
        title: "Window Installation",
        accident: "British Airways 5390 (1990)",
        improvement: "Improved windscreen installation procedures and quality control",
        impact: "Enhanced cockpit structural integrity standards"
      }
    ]
  },
  {
    id: "security",
    title: "Security Systems",
    icon: "🛡️",
    description: "Aviation security and anti-terrorism measures",
    color: "from-red-300 to-red-500",
    improvements: [
      {
        title: "Baggage Screening",
        accident: "Pan Am Flight 103 (1988)",
        improvement: "Mandatory X-ray screening of all checked baggage",
        impact: "Revolutionary changes in airport security worldwide"
      },
      {
        title: "Passenger Screening",
        accident: "Pan Am Flight 103 (1988)",
        improvement: "Enhanced passenger and carry-on luggage screening",
        impact: "Multi-layered security checkpoints implemented globally"
      },
      {
        title: "Cargo Security",
        accident: "Pan Am Flight 103 (1988)",
        improvement: "Known shipper programs and cargo screening requirements",
        impact: "Significantly reduced terrorism risks in aviation"
      }
    ]
  },
  {
    id: "human-factors",
    title: "Human Factors",
    icon: "👨‍✈️",
    description: "Crew resource management and human performance",
    color: "from-green-300 to-green-500",
    improvements: [
      {
        title: "Crew Resource Management",
        accident: "United Airlines 232 (1989)",
        improvement: "CRM training emphasizing teamwork and communication",
        impact: "Improved cockpit coordination and decision-making"
      },
      {
        title: "Stall Recovery Training",
        accident: "Air France 447 (2009)",
        improvement: "Enhanced upset recovery and stall recognition training",
        impact: "Better pilot response to unexpected situations"
      },
      {
        title: "Weather Training",
        accident: "China Southern 3456 (1997)",
        improvement: "Advanced weather recognition and approach training",
        impact: "Improved decision-making in adverse conditions"
      }
    ]
  },
  {
    id: "systems",
    title: "System Safety",
    icon: "⚙️",
    description: "Aircraft systems and redundancy improvements",
    color: "from-purple-300 to-purple-500",
    improvements: [
      {
        title: "Hydraulic System Redundancy",
        accident: "United Airlines 232 (1989)",
        improvement: "Improved hydraulic system separation and backup controls",
        impact: "Enhanced aircraft controllability during system failures"
      },
      {
        title: "Fuel System Safety",
        accident: "TWA Flight 800 (1996)",
        improvement: "Fuel tank inerting systems and electrical protection",
        impact: "Eliminated center fuel tank explosion risks"
      },
      {
        title: "Fire Suppression",
        accident: "Swissair 111 (1998)",
        improvement: "Enhanced fire detection and suppression systems",
        impact: "Faster fire detection and improved containment"
      }
    ]
  },
  {
    id: "training",
    title: "Pilot Training",
    icon: "🎓",
    description: "Advanced pilot education and simulation training",
    color: "from-orange-300 to-orange-500",
    improvements: [
      {
        title: "Emergency Procedures",
        accident: "Aeroflot 1492 (2019)",
        improvement: "Enhanced emergency evacuation and fire response training",
        impact: "Improved passenger survival rates in emergencies"
      },
      {
        title: "Simulator Training",
        accident: "Air France 447 (2009)",
        improvement: "More realistic flight simulator scenarios and training",
        impact: "Better preparation for real emergency situations"
      },
      {
        title: "Ground Operations",
        accident: "Singapore Airlines 006 (2000)",
        improvement: "Enhanced runway awareness and ground operation training",
        impact: "Reduced runway incursion and ground collision risks"
      }
    ]
  },
  {
    id: "tracking",
    title: "Tracking & Monitoring",
    icon: "📡",
    description: "Real-time monitoring and tracking systems",
    color: "from-teal-300 to-teal-500",
    improvements: [
      {
        title: "Global Tracking",
        accident: "Malaysia Airlines 370 (2014)",
        improvement: "Mandatory real-time aircraft position reporting",
        impact: "Aircraft can no longer disappear without trace"
      },
      {
        title: "Flight Data Monitoring",
        accident: "Multiple accidents",
        improvement: "Continuous flight data monitoring and analysis",
        impact: "Proactive identification of safety trends and risks"
      },
      {
        title: "Communication Systems",
        accident: "Malaysia Airlines 370 (2014)",
        improvement: "Enhanced satellite communication and tracking systems",
        impact: "Improved search and rescue capabilities"
      }
    ]
  }
];

const timelineMilestones = [
  { year: 1974, event: "Cargo door design improvements", impact: "Prevented decompression accidents" },
  { year: 1985, event: "Enhanced maintenance procedures", impact: "Improved structural integrity" },
  { year: 1988, event: "Aviation security revolution", impact: "Comprehensive screening systems" },
  { year: 1989, event: "CRM training implementation", impact: "Better crew coordination" },
  { year: 1990, event: "Window installation standards", impact: "Enhanced structural safety" },
  { year: 1996, event: "Fuel system protection", impact: "Eliminated tank explosion risks" },
  { year: 1998, event: "Fire detection improvements", impact: "Faster emergency response" },
  { year: 2000, event: "Ground operation safety", impact: "Reduced runway incidents" },
  { year: 2009, event: "Stall recovery training", impact: "Improved upset recovery" },
  { year: 2014, event: "Global tracking mandate", impact: "Aircraft location transparency" },
  { year: 2019, event: "Emergency procedures update", impact: "Enhanced evacuation safety" }
];

export default function SafetyPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCategories = selectedCategory === "all" 
    ? safetyCategories 
    : safetyCategories.filter(cat => cat.id === selectedCategory);

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
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Aviation Safety Improvements
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            How tragedy transforms into progress - learn about major safety advances born from aviation accidents
          </p>
        </div>

        {/* Category selector */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">Safety Improvement Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`p-4 rounded-xl transition-all duration-300 ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-blue-400 to-purple-400 text-white shadow-lg scale-105"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              <div className="text-2xl mb-2">📋</div>
              <div className="font-semibold">All Categories</div>
              <div className="text-sm opacity-80">View all improvements</div>
            </button>
            {safetyCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="font-semibold">{category.title}</div>
                <div className="text-sm opacity-80">{category.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Safety improvements */}
        <div className="space-y-8 mb-12">
          {filteredCategories.map((category, categoryIndex) => (
            <div key={category.id} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Category header */}
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{category.icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                    <p className="text-lg opacity-90">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Improvements list */}
              <div className="p-6">
                <div className="space-y-6">
                  {category.improvements.map((improvement, index) => (
                    <div key={index} className="border-l-4 border-gray-200 dark:border-gray-600 pl-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      
                      <div className="mb-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{improvement.title}</h3>
                        <div className="text-sm text-red-500 dark:text-red-300 font-medium mb-2">
                          Triggered by: {improvement.accident}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Safety Improvement</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {improvement.improvement}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Industry Impact</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {improvement.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Historical timeline */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
            <span className="mr-3 text-3xl">📜</span>
            Safety Improvement Timeline
          </h2>
          <div className="space-y-4 mt-4">
            {timelineMilestones.map((milestone, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{milestone.event}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{milestone.impact}</p>
                </div>
                <div className="flex-shrink-0 w-2 h-2 bg-blue-300 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Modern safety technology */}
        <div className="bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-2xl shadow-2xl p-12 mt-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
            <span className="mr-3 text-3xl">🚀</span>
            Modern Aviation Safety Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-800/20 dark:to-blue-700/20 rounded-xl p-6 border border-blue-100 dark:border-blue-600">
              <div className="text-3xl mb-3">🛰️</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Real-time Tracking</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Satellite-based tracking ensures aircraft positions are known at all times, preventing disappearances like MH370.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-800/20 dark:to-green-700/20 rounded-xl p-6 border border-green-100 dark:border-green-600">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Machine learning analyzes flight data to predict and prevent potential safety issues before they occur.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-800/20 dark:to-purple-700/20 rounded-xl p-6 border border-purple-100 dark:border-purple-600">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Advanced Materials</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Next-generation materials provide enhanced strength, fire resistance, and weight reduction for safer aircraft.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-800/20 dark:to-orange-700/20 rounded-xl p-6 border border-orange-100 dark:border-orange-600">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Predictive Maintenance</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                IoT sensors monitor aircraft health in real-time, scheduling maintenance before problems develop.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-800/20 dark:to-red-700/20 rounded-xl p-6 border border-red-100 dark:border-red-600">
              <div className="text-3xl mb-3">🚨</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Enhanced Training</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                VR and AR technologies provide immersive training experiences for emergency scenarios and crew coordination.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-800/20 dark:to-teal-700/20 rounded-xl p-6 border border-teal-100 dark:border-teal-600">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Global Cooperation</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                International data sharing and standardization ensure safety improvements benefit aviation worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-2xl shadow-2xl p-12 text-center">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
            <span className="mr-3 text-3xl">🏁</span>
            The Continuous Journey of Safety
          </h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200 mt-4">
            Every tragedy in aviation history has contributed to making flying safer. Through rigorous investigation, innovative solutions, and unwavering commitment to improvement, the aviation industry has transformed catastrophic lessons into life-saving technologies and procedures. Today's aviation safety record is built on the foundation of lessons learned from past accidents.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-200 mb-1">99.999%</div>
              <div className="text-sm text-white">Safety Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-200 mb-1">45 Years</div>
              <div className="text-sm text-white">Continuous Improvement</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-200 mb-1">Countless</div>
              <div className="text-sm text-white">Lives Saved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 