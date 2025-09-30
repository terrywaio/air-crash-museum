import Image from "next/image";
import Link from "next/link";

export default function CZ3456Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-blue-700 dark:from-red-700 dark:via-red-600 dark:to-blue-800">
      <div className="max-w-4xl mx-auto py-10 px-4">
        <Link 
          href="/" 
          className="group inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:bg-white dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 mb-6"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-medium">Back to Home</span>
        </Link>

        {/* Airline Logo Section */}
        <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200 mb-6">
          <div className="flex items-center gap-6">
            <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center p-2 border border-gray-200">
              <Image
                src="/images/airlines/china-southern-airlines/China_Southern_Airlines_logo.svg.png"
                alt="China Southern Airlines Logo"
                width={128}
                height={64}
                className="object-contain w-full h-full"
                unoptimized
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">China Southern Airlines</h2>
          </div>
        </section>

        <div className="mb-10">
          <div className="p-4 bg-blue-700/80 backdrop-blur-sm rounded-t-xl">
            <h1 className="text-3xl font-bold text-white text-center">China Southern Flight 3456 (1997)</h1>
          </div>
          <Image
            src="/images/cz3456/cz3456.jpg"
            alt="China Southern Airlines Flight 3456"
            width={700}
            height={350}
            className="rounded-b-xl w-full shadow-2xl border-x-4 border-b-4 border-white/70"
            placeholder="blur"
            blurDataURL="/next.svg"
            unoptimized
            priority
          />
        </div>
        <div className="grid gap-16">
          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">✈️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Flight Information
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-blue-600 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-gray-800 dark:text-gray-200 text-base space-y-2">
                <li><strong className="text-gray-900 dark:text-white">Flight:</strong> China Southern Airlines 3456 (CZ3456)</li>
                <li><strong className="text-gray-900 dark:text-white">Date:</strong> May 8, 1997</li>
                <li><strong className="text-gray-900 dark:text-white">Aircraft:</strong> Boeing 737-31B</li>
                <li><strong className="text-gray-900 dark:text-white">Registration:</strong> B-2925</li>
              </ul>
              <ul className="text-gray-800 dark:text-gray-200 text-base space-y-2">
                <li><strong className="text-gray-900 dark:text-white">Route:</strong> Chongqing (CKG) → Shenzhen (SZX)</li>
                <li><strong className="text-gray-900 dark:text-white">Occupants:</strong> 74 (65 passengers, 9 crew)</li>
                <li><strong className="text-gray-900 dark:text-white">Fatalities:</strong> 35</li>
                <li><strong className="text-gray-900 dark:text-white">Survivors:</strong> 39</li>
              </ul>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">⛈️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Storm Over Shenzhen
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-blue-600 rounded-full mt-2"></div>
              </h2>
            </div>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
              On May 8, 1997, China Southern Airlines Flight 3456 was operating a scheduled domestic service from Chongqing to Shenzhen. The Boeing 737-31B, registration B-2925, was a relatively new aircraft that had been in service for just over two years. As the aircraft approached Shenzhen in the evening, severe thunderstorms were developing across the Pearl River Delta region.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
              Captain Zhao Zhongyou and First Officer Luo Jibin were experienced pilots familiar with the challenging weather conditions common in southern China during the spring season. However, the intensity of the thunderstorm they encountered that evening would test their skills to the limit and expose critical weaknesses in weather detection and crew training for severe weather operations.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
              What began as a routine domestic flight would become a tragic demonstration of the deadly combination of severe weather, poor visibility, and inadequate go-around procedures, ultimately leading to significant improvements in China's aviation weather operations.
            </p>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🏁</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Timeline of Disaster
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-blue-600 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">19:15</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Departure:</strong> CZ3456 departs Chongqing for Shenzhen with 74 people aboard
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded">21:20</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Weather Deterioration:</strong> Severe thunderstorms develop over Shenzhen Airport
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">21:28</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Approach Clearance:</strong> Aircraft cleared for ILS approach to Runway 15 in heavy rain
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-red-600 bg-red-50 px-2 py-1 rounded">21:31</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Hard Landing:</strong> Aircraft touches down hard, bounces, and goes around
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded">21:35</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Crash:</strong> Second approach fails, aircraft crashes and breaks apart
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🌧️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Severe Weather Challenge
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-blue-600 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Thunderstorm Conditions</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  As Flight 3456 approached Shenzhen, a powerful thunderstorm system was moving through the area. The storm brought torrential rain, strong crosswinds, wind shear, and extremely poor visibility. These conditions made any approach extremely challenging, even for experienced crews.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-yellow-900 dark:text-yellow-300">Weather Conditions</h4>
                  <ul className="list-disc list-inside text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
                    <li>Heavy thunderstorms with intense precipitation</li>
                    <li>Visibility reduced to less than 1,000 meters</li>
                    <li>Strong gusty crosswinds up to 35 knots</li>
                    <li>Wind shear and downdrafts in the approach path</li>
                    <li>Rapidly changing wind directions</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Airport Operations</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                  Despite the severe weather, Shenzhen Airport remained open for operations. The air traffic control tower continued to clear aircraft for approach, though several previous flights had already reported difficult conditions and requested diversions to alternate airports.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🛬</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                The Unstable Approaches
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-blue-600 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">First Approach Attempt</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  The crew's first approach to Runway 15 was conducted in extremely challenging conditions. The aircraft encountered severe turbulence, wind shear, and driving rain that made visual contact with the runway difficult until very late in the approach.
                </p>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-orange-900 dark:text-orange-300">First Landing Attempt</h4>
                  <ul className="list-disc list-inside text-orange-800 dark:text-orange-200 text-sm space-y-1">
                    <li>Aircraft approached in severe turbulence and rain</li>
                    <li>Hard touchdown well beyond normal landing zone</li>
                    <li>Aircraft bounced back into the air</li>
                    <li>Crew elected to execute go-around procedure</li>
                    <li>Landing gear and flaps damaged during bounce</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Fatal Second Approach</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                  Despite the damaged landing gear and challenging weather conditions, the crew attempted a second approach rather than diverting to an alternate airport. The damaged aircraft was more difficult to control, and the continuing severe weather made this decision increasingly dangerous.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">💥</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                The Crash
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-blue-600 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Final Approach</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  The second approach was even more unstable than the first. With damaged landing gear affecting the aircraft's handling characteristics and continuing severe weather, the crew struggled to maintain a stable approach path.
                </p>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-red-900 dark:text-red-300">Crash Sequence</h4>
                  <ul className="list-disc list-inside text-red-800 dark:text-red-200 text-sm space-y-1">
                    <li>Aircraft approached with excessive descent rate</li>
                    <li>Hard impact short of runway threshold</li>
                    <li>Landing gear collapsed upon impact</li>
                    <li>Aircraft broke apart and slid across ground</li>
                    <li>Post-crash fire erupted in aft section</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Emergency Response</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                  Airport rescue and firefighting crews responded quickly to the crash. However, the severe weather hampered initial rescue efforts. Of the 74 people aboard, 39 survived with various injuries, while 35 perished in the impact and subsequent fire.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🔍</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Investigation Findings
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-blue-600 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
                The investigation by Chinese aviation authorities revealed multiple contributing factors to the accident.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Primary Factors</h3>
                  <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                    <li><strong>Weather:</strong> Severe thunderstorm with wind shear and turbulence</li>
                    <li><strong>Crew Decision:</strong> Continuation of approach in unstable conditions</li>
                    <li><strong>Hard Landing:</strong> Excessive descent rate on second approach</li>
                    <li><strong>Aircraft Damage:</strong> Compromised handling after first bounce</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Contributing Factors</h3>
                  <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                    <li><strong>Training:</strong> Inadequate severe weather training</li>
                    <li><strong>Procedures:</strong> Poor go-around decision-making protocols</li>
                    <li><strong>Weather Info:</strong> Limited real-time weather data available</li>
                    <li><strong>Airport Ops:</strong> Continued operations in hazardous conditions</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🛡️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Safety Improvements
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-blue-600 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
                The CZ3456 accident led to significant improvements in Chinese aviation weather operations and crew training procedures.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Weather Operations</h3>
                  <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                    <li><strong>Weather Radar:</strong> Enhanced weather detection systems at airports</li>
                    <li><strong>Forecasting:</strong> Improved thunderstorm prediction capabilities</li>
                    <li><strong>Procedures:</strong> Stricter weather minimums for operations</li>
                    <li><strong>Communication:</strong> Better pilot-meteorologist coordination</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Training & Procedures</h3>
                  <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                    <li><strong>Crew Training:</strong> Enhanced severe weather approach training</li>
                    <li><strong>Decision Making:</strong> Improved go-around decision criteria</li>
                    <li><strong>Unstable Approach:</strong> Mandatory go-around for unstable approaches</li>
                    <li><strong>Emergency Procedures:</strong> Better damage assessment protocols</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">📚</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                References & Further Reading
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-blue-600 rounded-full mt-2"></div>
              </h2>
            </div>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://en.wikipedia.org/wiki/China_Southern_Airlines_Flight_3456" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  🌐 Wikipedia: China Southern Airlines Flight 3456
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Comprehensive overview with accident details and investigation summary</p>
              </li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-blue-600/90 to-blue-500/90 backdrop-blur-sm text-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Lessons from the Storm</h2>
            <p className="text-gray-200 text-center leading-relaxed mb-6">
              China Southern Airlines Flight 3456 demonstrated the critical importance of proper weather assessment and go-around decisions. The accident led to significant improvements in Chinese aviation weather operations, crew training, and airport safety procedures that continue to benefit aviation safety today.
            </p>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-blue-300">35 Lives Lost → 39 Survivors</div>
              <div className="text-sm text-gray-300">May 8, 1997 → Shenzhen, China</div>
              <div className="text-xs text-gray-400 italic mt-4">"When in doubt, divert - safety over schedule"</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "China Southern Airlines Flight 3456 | Air Crash Museum",
  description: "Learn about China Southern Airlines Flight 3456 (CZ3456), the 1997 severe weather accident in Shenzhen that killed 35 people. Discover the investigation findings, weather challenges, and safety improvements.",
  keywords: [
    "China Southern 3456",
    "CZ3456",
    "severe weather",
    "thunderstorm",
    "Shenzhen airport",
    "Boeing 737",
    "hard landing",
    "aviation accident",
    "air crash museum",
    "flight safety"
  ]
}; 
