import Image from "next/image";
import Link from "next/link";

export default function SQ006Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-700 to-yellow-600 dark:from-blue-900 dark:via-blue-800 dark:to-yellow-700">
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

        <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200 mb-6">
          <div className="flex items-center gap-6">
            <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center p-2 border border-gray-200">
              <Image
                src="/images/airlines/singapore-airlines/Singapore_Airlines_Logo_2.svg.png"
                alt="Singapore Airlines Logo"
                width={128}
                height={64}
                className="object-contain w-full h-full"
                unoptimized
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Singapore Airlines</h2>
          </div>
        </section>

        <div className="mb-10">
          <div className="p-4 bg-blue-800/80 backdrop-blur-sm rounded-t-xl">
            <h1 className="text-3xl font-bold text-white text-center">Singapore Airlines Flight 006 (2000)</h1>
          </div>
          <Image
            src="/images/sq006/sq006.jpg"
            alt="Singapore Airlines Flight 006"
            width={700}
            height={350}
            className="rounded-b-xl w-full shadow-2xl border-x-4 border-b-4 border-white/70"
            placeholder="blur"
            blurDataURL="/next.svg"
            unoptimized
          />
        </div>

        <div className="grid gap-16">
          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">✈️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Flight Information
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-gray-800 dark:text-gray-200 text-base space-y-2">
                <li><strong className="text-gray-900 dark:text-white">Flight:</strong> Singapore Airlines 006 (SQ006)</li>
                <li><strong className="text-gray-900 dark:text-white">Date:</strong> October 31, 2000</li>
                <li><strong className="text-gray-900 dark:text-white">Aircraft:</strong> Boeing 747-412</li>
                <li><strong className="text-gray-900 dark:text-white">Registration:</strong> 9V-SPK</li>
              </ul>
              <ul className="text-gray-800 dark:text-gray-200 text-base space-y-2">
                <li><strong className="text-gray-900 dark:text-white">Route:</strong> Taipei (TPE) → Los Angeles (LAX)</li>
                <li><strong className="text-gray-900 dark:text-white">Occupants:</strong> 179 (159 passengers, 20 crew)</li>
                <li><strong className="text-gray-900 dark:text-white">Fatalities:</strong> 83</li>
                <li><strong className="text-gray-900 dark:text-white">Survivors:</strong> 96</li>
              </ul>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🌪️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                The Typhoon Night Disaster
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
              On October 31, 2000, Singapore Airlines Flight 006 was preparing for departure from Chiang Kai-shek International Airport (now Taiwan Taoyuan International Airport) to Los Angeles during one of the worst typhoons to hit Taiwan in decades. Typhoon Xangsane was battering the island with winds exceeding 100 mph and torrential rain, creating extremely hazardous flying conditions.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
              The Boeing 747-412, registration 9V-SPK, was a relatively new aircraft delivered to Singapore Airlines in 1997. Captain Foong Chee Kong, 41, was an experienced pilot with over 12,000 flight hours, accompanied by First Officer Ng Kheng Leng. Despite the severe weather, the crew received clearance for takeoff from Runway 05L.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
              What followed was a catastrophic case of mistaken runway identity that would become one of Asia's deadliest aviation accidents and expose critical weaknesses in airport safety systems during severe weather operations.
            </p>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">⏰</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Timeline of Tragedy
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">22:05</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Taxi Clearance:</strong> SQ006 receives clearance to taxi to Runway 05L for departure
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded">23:15</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Wrong Turn:</strong> Aircraft mistakenly enters closed Runway 05R instead of active 05L
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">23:17</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Takeoff Clearance:</strong> Tower clears SQ006 for takeoff, unaware of runway error
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-red-600 bg-red-50 px-2 py-1 rounded">23:17</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Collision:</strong> Aircraft strikes construction equipment on closed runway at 180 knots
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded">23:18</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Fire and Breakup:</strong> Aircraft breaks apart and catches fire after striking multiple obstacles
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🚧</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                The Fatal Runway Mix-up
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Airport Configuration</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  Chiang Kai-shek International Airport had two parallel runways: 05L/23R (active) and 05R/23L (closed for construction). On the night of the accident, Runway 05R was closed due to construction work and was littered with concrete barriers, excavators, and other heavy machinery.
                </p>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-red-900 dark:text-red-300">Construction Obstacles</h4>
                  <ul className="list-disc list-inside text-red-800 dark:text-red-200 text-sm space-y-1">
                    <li>Multiple concrete barriers across the runway</li>
                    <li>Two excavators positioned on the runway centerline</li>
                    <li>Construction materials and debris scattered throughout</li>
                    <li>No runway lighting due to construction work</li>
                    <li>Inadequate visual markers indicating closure</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Navigation Error</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                  In the severe weather conditions with extremely limited visibility, the crew became disoriented during taxi and unknowingly entered the closed runway. The typhoon's driving rain and wind, combined with poor lighting and inadequate runway markings, created a perfect storm for this tragic error.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🛡️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Safety Legacy
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
                The SQ006 accident led to significant improvements in airport safety systems and runway incursion prevention worldwide.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Airport Improvements</h3>
                  <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                    <li><strong>Runway Markings:</strong> Enhanced visual guidance systems</li>
                    <li><strong>Ground Radar:</strong> Surface movement radar implementation</li>
                    <li><strong>Lighting Systems:</strong> Improved runway status lighting</li>
                    <li><strong>Construction Safety:</strong> Better protection during maintenance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Operational Changes</h3>
                  <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                    <li><strong>Weather Minimums:</strong> Stricter visibility requirements</li>
                    <li><strong>Crew Training:</strong> Enhanced situational awareness training</li>
                    <li><strong>ATC Procedures:</strong> Improved runway monitoring protocols</li>
                    <li><strong>Emergency Response:</strong> Faster rescue coordination</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-700/90 to-blue-600/90 backdrop-blur-sm text-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">A Night of Tragedy and Learning</h2>
            <p className="text-gray-200 text-center leading-relaxed mb-6">
              Singapore Airlines Flight 006 serves as a stark reminder of how weather, visibility, and airport infrastructure must work together to ensure safe operations. The accident led to revolutionary improvements in runway safety systems and procedures that protect countless passengers today.
            </p>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-blue-300">83 Lives Lost → 96 Survivors</div>
              <div className="text-sm text-gray-300">October 31, 2000 → Taipei, Taiwan</div>
              <div className="text-xs text-gray-400 italic mt-4">"From tragedy comes safer skies"</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Singapore Airlines Flight 006 | Air Crash Museum",
  description: "Learn about Singapore Airlines Flight 006 (SQ006), the 2000 runway disaster in Taipei during Typhoon Xangsane that killed 83 people.",
  keywords: [
    "Singapore Airlines 006",
    "SQ006",
    "runway incursion",
    "Typhoon Xangsane",
    "Taipei airport",
    "Boeing 747",
    "aviation accident",
    "air crash museum",
    "flight safety"
  ]
}; 