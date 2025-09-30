import Image from "next/image";
import Link from "next/link";

export default function Swiss111Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-700 via-red-600 to-slate-100 dark:from-red-800 dark:via-red-700 dark:to-slate-200">
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
                src="/images/airlines/swissair/Swissair_logo.svg.png"
                alt="Swissair Logo"
                width={128}
                height={64}
                className="object-contain w-full h-full"
                unoptimized
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Swissair</h2>
          </div>
        </section>

        <div className="mb-10">
          <div className="p-4 bg-red-700/80 backdrop-blur-sm rounded-t-xl">
            <h1 className="text-3xl font-bold text-white text-center">Swissair Flight 111 (1998)</h1>
          </div>
          <Image
            src="/images/swiss111/swiss111.jpg"
            alt="Swissair Flight 111"
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
                <li><strong className="text-gray-900 dark:text-white">Flight:</strong> Swissair 111</li>
                <li><strong className="text-gray-900 dark:text-white">Date:</strong> September 2, 1998</li>
                <li><strong className="text-gray-900 dark:text-white">Aircraft:</strong> McDonnell Douglas MD-11</li>
                <li><strong className="text-gray-900 dark:text-white">Registration:</strong> HB-IWF</li>
              </ul>
              <ul className="text-gray-800 dark:text-gray-200 text-base space-y-2">
                <li><strong className="text-gray-900 dark:text-white">Route:</strong> New York JFK (JFK) → Geneva (GVA)</li>
                <li><strong className="text-gray-900 dark:text-white">Occupants:</strong> 229 (215 passengers, 14 crew)</li>
                <li><strong className="text-gray-900 dark:text-white">Fatalities:</strong> 229 (all souls)</li>
                <li><strong className="text-gray-900 dark:text-white">Location:</strong> Atlantic Ocean off Nova Scotia</li>
              </ul>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🔥</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Fire in the Sky
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8\">
              On September 2, 1998, Swissair Flight 111 departed New York's John F. Kennedy International Airport bound for Geneva, Switzerland. The McDonnell Douglas MD-11, registration HB-IWF "Vaud," was one of Swissair's flagship aircraft, carrying 229 people on a routine transatlantic flight that would become one of aviation's most meticulously investigated disasters.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8\">
              Captain Urs Zimmermann, 50, with over 11,000 flight hours, and First Officer Stephan Loew, 36, with 4,800 hours, were highly experienced pilots. The flight proceeded normally for the first hour, cruising at 33,000 feet over the North Atlantic, when an insidious danger began developing in the aircraft's hidden spaces.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
              What started as a subtle odor in the cockpit would escalate into an unstoppable inferno that demonstrated the devastating potential of in-flight fire and forever changed aviation fire safety standards worldwide.
            </p>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">⏰</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Timeline of Tragedy
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">20:18</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Normal Departure:</strong> Flight 111 departs JFK for Geneva with 229 souls aboard
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded">22:10</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>First Odor:</strong> Crew detects unusual odor in cockpit, initially thought to be air conditioning
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">22:14</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Pan-Pan Declared:</strong> Crew declares emergency and requests diversion to Halifax
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-red-600 bg-red-50 px-2 py-1 rounded">22:19</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Mayday:</strong> Emergency upgraded to Mayday as smoke fills cockpit
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded">22:31</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Radio Silence:</strong> Final radio transmission, aircraft crashes into Atlantic Ocean
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🔥</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                The Hidden Fire
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Electrical Origin</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  The fire originated in the aircraft's upper ceiling area, likely from an electrical fault in the in-flight entertainment system wiring. The exact ignition source was never definitively determined due to the extensive fire damage, but investigators focused on the network of wires running above the cockpit ceiling.
                </p>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-red-900 dark:text-red-300">Fire Development</h4>
                  <ul className="list-disc list-inside text-red-800 dark:text-red-200 text-sm space-y-1">
                    <li>Fire started in hidden ceiling space above cockpit</li>
                    <li>Flammable thermal acoustic insulation provided fuel</li>
                    <li>Metallized polyethylene terephthalate (MPET) covering accelerated spread</li>
                    <li>Fire spread rapidly through aircraft systems</li>
                    <li>Multiple aircraft systems progressively failed</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Material Vulnerability</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                  The investigation revealed that the aircraft's thermal acoustic insulation was covered with a metallized polyethylene terephthalate (MPET) material. When exposed to heat and flame, this covering not only burned readily but also produced toxic smoke and contributed to rapid fire spread throughout the aircraft's hidden spaces.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🚨</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Emergency Response
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Crew Actions</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  The crew initially suspected an air conditioning problem and began troubleshooting procedures. When the situation escalated, they quickly declared an emergency and began diverting to Halifax. However, the fire's rapid spread overwhelmed their ability to maintain aircraft control.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-blue-900 dark:text-blue-300">Emergency Procedures</h4>
                  <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 text-sm space-y-1">
                    <li>Declared Pan-Pan emergency for suspected air conditioning issue</li>
                    <li>Requested immediate diversion to Halifax Airport</li>
                    <li>Initiated emergency descent and fuel dumping procedures</li>
                    <li>Upgraded to Mayday as fire situation worsened</li>
                    <li>Attempted to land as quickly as possible</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">System Failures</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                  As the fire spread, it progressively disabled aircraft systems. The flight data recorder stopped functioning, followed by the cockpit voice recorder. Critical flight instruments began failing, making it increasingly difficult for the crew to maintain control of the aircraft.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🌊</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Ocean Impact
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Final Moments</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  Just 20 minutes after the first report of an odor, Swissair 111 impacted the Atlantic Ocean near Peggy's Cove, Nova Scotia. The aircraft struck the water at high speed, resulting in the immediate loss of all 229 people aboard. The impact was so severe that the aircraft was completely destroyed.
                </p>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-300">Recovery Operation</h4>
                  <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-1">
                    <li>Largest aircraft accident investigation in Canadian history</li>
                    <li>98% of aircraft wreckage recovered from ocean floor</li>
                    <li>2 million pieces of debris collected and analyzed</li>
                    <li>Wreckage reconstructed in a hangar for investigation</li>
                    <li>Investigation lasted over 4 years</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🔍</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Revolutionary Investigation
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Transportation Safety Board of Canada</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  The Transportation Safety Board of Canada (TSB) conducted one of the most comprehensive aircraft accident investigations in history. The investigation involved extensive underwater recovery operations, detailed fire testing, and revolutionary forensic analysis techniques.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-yellow-900 dark:text-yellow-300">Key Findings</h4>
                    <ul className="list-disc list-inside text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
                      <li>Fire originated above cockpit ceiling</li>
                      <li>MPET insulation covering contributed to fire spread</li>
                      <li>Inadequate fire detection and suppression</li>
                      <li>Smoke and fire checklist limitations</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-green-900 dark:text-green-300">Investigation Innovations</h4>
                    <ul className="list-disc list-inside text-green-800 dark:text-green-200 text-sm space-y-1">
                      <li>Advanced underwater recovery techniques</li>
                      <li>Computer fire modeling and simulation</li>
                      <li>Material flammability testing programs</li>
                      <li>Forensic wire analysis methods</li>
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
                Fire Safety Legacy
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8\">
                The Swissair 111 disaster led to the most comprehensive review of aircraft fire safety in aviation history, resulting in fundamental changes to materials, systems, and procedures.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Material Improvements</h3>
                  <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                    <li><strong>MPET Prohibition:</strong> Metallized coverings banned from insulation</li>
                    <li><strong>Fire-Resistant Materials:</strong> Enhanced fire-resistant insulation requirements</li>
                    <li><strong>Wire Protection:</strong> Better wire insulation and routing standards</li>
                    <li><strong>Material Testing:</strong> Stricter flammability testing protocols</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">System Enhancements</h3>
                  <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                    <li><strong>Fire Detection:</strong> Enhanced detection systems in hidden areas</li>
                    <li><strong>Emergency Procedures:</strong> Improved smoke and fire checklists</li>
                    <li><strong>Circuit Breakers:</strong> Better electrical system protection</li>
                    <li><strong>Training:</strong> Enhanced fire emergency training for crews</li>
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
                  href="https://www.tsb.gc.ca/eng/rapports-reports/aviation/1998/a98h0003/a98h0003.html" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  📄 TSB Final Report
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Transportation Safety Board of Canada comprehensive investigation</p>
              </li>
              <li>
                <a 
                  href="https://en.wikipedia.org/wiki/Swissair_Flight_111" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  🌐 Wikipedia: Swissair Flight 111
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Detailed timeline and investigation summary</p>
              </li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-red-600/90 to-red-500/90 backdrop-blur-sm text-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-12 text-red-700">Fire Safety Legacy</h2>
            <p className="text-gray-200 text-center leading-relaxed mb-6">
              Swissair Flight 111 transformed our understanding of in-flight fire and led to revolutionary improvements in aircraft fire safety. The comprehensive investigation and resulting safety changes have made aviation significantly safer for all who fly.
            </p>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-red-300">229 Lives Lost</div>
              <div className="text-sm text-gray-300">September 2, 1998 ?Atlantic Ocean off Nova Scotia</div>
              <div className="text-xs text-gray-400 italic mt-4">"From tragedy comes transformation in fire safety"</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Swissair Flight 111 | Air Crash Museum",
  description: "Learn about Swissair Flight 111, the 1998 in-flight fire that killed 229 people and revolutionized aircraft fire safety. Discover the investigation findings, material failures, and safety improvements.",
  keywords: [
    "Swissair 111",
    "in-flight fire",
    "MD-11",
    "Atlantic Ocean",
    "fire safety",
    "MPET insulation",
    "electrical fire",
    "aviation accident",
    "air crash museum",
    "flight safety"
  ]
}; 
