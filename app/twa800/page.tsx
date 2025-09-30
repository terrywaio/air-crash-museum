import Image from "next/image";
import Link from "next/link";

export default function TWA800Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-gray-800 dark:from-red-700 dark:via-red-600 dark:to-gray-900">
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
                src="/images/airlines/twa/Trans_World_Airlines_Globe_Map_Logo_1.png"
                alt="TWA Logo"
                width={128}
                height={64}
                className="object-contain w-full h-full"
                unoptimized
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Trans World Airlines</h2>
          </div>
        </section>

        <div className="mb-10">
          <div className="p-4 bg-red-600/80 backdrop-blur-sm rounded-t-xl">
            <h1 className="text-3xl font-bold text-white text-center">TWA Flight 800 (1996)</h1>
          </div>
          <Image
            src="/images/twa800/twa800.jpg"
            alt="TWA Flight 800"
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
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">✈️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Flight Information
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-gray-800 dark:text-gray-200 text-base space-y-2">
                <li><strong className="text-gray-900 dark:text-white">Flight:</strong> Trans World Airlines 800 (TWA800)</li>
                <li><strong className="text-gray-900 dark:text-white">Date:</strong> July 17, 1996</li>
                <li><strong className="text-gray-900 dark:text-white">Aircraft:</strong> Boeing 747-131</li>
                <li><strong className="text-gray-900 dark:text-white">Registration:</strong> N93119</li>
              </ul>
              <ul className="text-gray-800 dark:text-gray-200 text-base space-y-2">
                <li><strong className="text-gray-900 dark:text-white">Route:</strong> New York JFK → Paris CDG → Rome</li>
                <li><strong className="text-gray-900 dark:text-white">Occupants:</strong> 230 (212 passengers, 18 crew)</li>
                <li><strong className="text-gray-900 dark:text-white">Fatalities:</strong> 230 (all souls)</li>
                <li><strong className="text-gray-900 dark:text-white">Location:</strong> Atlantic Ocean off Long Island, NY</li>
              </ul>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">💥</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                The Mysterious Explosion
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-4">
              On the evening of July 17, 1996, TWA Flight 800, a Boeing 747-131, took off from John F. Kennedy International Airport bound for Paris. What should have been a routine transatlantic flight became one of the most investigated and controversial aviation disasters in history, sparking theories that ranged from mechanical failure to terrorism.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-4">
              Just 12 minutes after takeoff, while climbing through 13,760 feet over the Atlantic Ocean, the aircraft suddenly exploded in a massive fireball visible from the ground. Witnesses described seeing a streak of light rising toward the aircraft before the explosion, leading to immediate speculation about a missile attack.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
              The Boeing 747, carrying 230 souls aboard, broke apart in midair and crashed into the ocean approximately 8 miles south of East Moriches on Long Island. The disaster occurred during the peak of summer travel season, and many passengers were bound for Paris to connect to other destinations or begin European vacations.
            </p>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🔬</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                The Center Wing Tank Explosion
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Fatal Design Vulnerability</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  The investigation revealed a critical design flaw in the Boeing 747's center wing tank (CWT). Located between the aircraft's main wings, this fuel tank was positioned directly above the air conditioning system, which generated significant heat during ground operations.
                </p>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                  On the day of the accident, TWA 800 had been delayed on the ground for several hours in hot summer weather. The air conditioning packs, running continuously beneath the nearly empty center wing tank, heated the small amount of remaining fuel to approximately 120°F, creating highly flammable vapor.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">The Ignition Source</h3>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-yellow-900 dark:text-yellow-300">Probable Cause</h4>
                  <ul className="list-disc list-inside text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
                    <li>Short circuit in fuel quantity indication system (FQIS) wiring</li>
                    <li>Damaged wire created electrical arc inside center wing tank</li>
                    <li>Arc ignited explosive fuel vapor at optimal concentration</li>
                    <li>Massive explosion tore aircraft apart instantaneously</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🕵️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                The Most Extensive Investigation
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Multi-Agency Investigation</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  The TWA 800 investigation became the largest, most complex, and most expensive investigation in the history of the National Transportation Safety Board (NTSB). Due to initial suspicions of terrorism, the FBI took the lead role alongside the NTSB, creating an unprecedented joint investigation.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-blue-900 dark:text-blue-300">Investigation Scale</h4>
                    <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 text-sm space-y-1">
                      <li>4-year investigation duration</li>
                      <li>$40+ million cost</li>
                      <li>95% of aircraft recovered from ocean floor</li>
                      <li>747 witnesses interviewed</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-green-900 dark:text-green-300">Recovery Operation</h4>
                    <ul className="list-disc list-inside text-green-800 dark:text-green-200 text-sm space-y-1">
                      <li>1.6 million pieces of debris collected</li>
                      <li>16-month underwater recovery</li>
                      <li>120-foot deep ocean floor search</li>
                      <li>Full aircraft reconstruction</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🛡️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Revolutionary Safety Changes
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-4">
                The TWA 800 disaster led to the most comprehensive fuel tank safety improvements in aviation history, fundamentally changing how aircraft fuel systems are designed and maintained.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Technical Improvements</h3>
                  <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                    <li><strong>Fuel Tank Inerting:</strong> Nitrogen generation systems to prevent explosive vapors</li>
                    <li><strong>Wiring Upgrades:</strong> Enhanced insulation and routing of electrical systems</li>
                    <li><strong>Tank Design:</strong> Improved ventilation and heat reduction measures</li>
                    <li><strong>Maintenance Procedures:</strong> Stricter inspection of fuel system components</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Regulatory Changes</h3>
                  <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                    <li><strong>FAA Rules:</strong> Mandatory fuel tank safety upgrades for all commercial aircraft</li>
                    <li><strong>Design Standards:</strong> New certification requirements for fuel tank systems</li>
                    <li><strong>International Adoption:</strong> Worldwide implementation of safety improvements</li>
                    <li><strong>Ongoing Monitoring:</strong> Enhanced fuel tank safety oversight programs</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">📚</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                References & Further Reading
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR0003.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  📄 NTSB Final Investigation Report (PDF)
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Comprehensive 4-year investigation findings and safety recommendations</p>
              </li>
              <li>
                <a 
                  href="https://en.wikipedia.org/wiki/TWA_Flight_800" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  🌐 Wikipedia: TWA Flight 800
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Detailed timeline and technical analysis</p>
              </li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-red-700/90 to-red-600/90 backdrop-blur-sm text-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">In Remembrance</h2>
            <p className="text-gray-200 text-center leading-relaxed mb-6">
              The tragedy of TWA Flight 800 led to revolutionary fuel tank safety improvements that have prevented similar disasters. The exhaustive investigation set new standards for aviation accident analysis. The 230 lives lost were not in vain - their legacy lives on in safer skies.
            </p>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-red-300">230 Lives Lost</div>
              <div className="text-sm text-gray-300">July 17, 1996 • Atlantic Ocean off Long Island</div>
              <div className="text-xs text-gray-400 italic mt-4">"From tragedy comes progress in safety"</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "TWA Flight 800 | Air Crash Museum",
  description: "Explore the TWA Flight 800 disaster of 1996, the center wing tank explosion that killed 230 people. Learn about the extensive investigation and revolutionary fuel tank safety improvements.",
  keywords: [
    "TWA Flight 800",
    "TWA800",
    "center wing tank",
    "fuel tank explosion",
    "Boeing 747",
    "Long Island crash",
    "aviation safety",
    "NTSB investigation",
    "air crash museum",
    "flight safety"
  ]
}; 
