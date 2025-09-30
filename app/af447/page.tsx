import Image from "next/image";
import Link from "next/link";

export default function AF447Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-slate-100 to-red-600 dark:from-blue-800 dark:via-slate-200 dark:to-red-700">
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
                src="/images/airlines/air-france/Air_France_Logo.svg.png"
                alt="Air France Logo"
                width={128}
                height={64}
                className="object-contain w-full h-full"
                unoptimized
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Air France</h2>
          </div>
        </section>

        <div className="mb-8">
          <div className="p-4 bg-blue-700/80 backdrop-blur-sm rounded-t-xl">
              <h1 className="text-3xl font-bold text-white text-center">Air France Flight 447 (2009)</h1>
          </div>
          <Image
            src="/images/af447/af447.jpg"
            alt="Air France Flight 447"
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
                <li><strong className="text-gray-900 dark:text-white">Flight:</strong> Air France 447 (AF447)</li>
                <li><strong className="text-gray-900 dark:text-white">Date:</strong> June 1, 2009</li>
                <li><strong className="text-gray-900 dark:text-white">Aircraft:</strong> Airbus A330-203</li>
                <li><strong className="text-gray-900 dark:text-white">Registration:</strong> F-GZCP</li>
              </ul>
              <ul className="text-gray-800 dark:text-gray-200 text-base space-y-2">
                <li><strong className="text-gray-900 dark:text-white">Route:</strong> Rio de Janeiro (GIG) → Paris (CDG)</li>
                <li><strong className="text-gray-900 dark:text-white">Occupants:</strong> 228 (216 passengers, 12 crew)</li>
                <li><strong className="text-gray-900 dark:text-white">Fatalities:</strong> 228 (all souls)</li>
                <li><strong className="text-gray-900 dark:text-white">Location:</strong> Atlantic Ocean, 640 nm NE of Brazil</li>
              </ul>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🌊</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Lost Over the Atlantic
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
              On June 1, 2009, Air France Flight 447 departed Rio de Janeiro-Galeão International Airport bound for Paris Charles de Gaulle Airport on what should have been a routine overnight transatlantic crossing. The Airbus A330-203, registration F-GZCP, carried 228 people including three experienced pilots: Captain Marc Dubois, First Officer Pierre-Cédric Bonin, and First Officer David Robert.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
              The aircraft, nicknamed "Ville de Rio de Janeiro," was a modern, reliable twin-engine wide-body that had been in service since 2005. As Flight 447 cruised northward over the vast expanse of the Atlantic Ocean at 35,000 feet, it approached the Intertropical Convergence Zone - an area known for severe weather and turbulence.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
              What happened in the next four minutes and 23 seconds would become one of aviation's most extensively studied accidents, fundamentally changing our understanding of pilot training, aircraft automation, and high-altitude aerodynamics.
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
                <div className="flex-shrink-0 w-20 text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">19:29</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Normal Departure:</strong> AF447 departs Rio de Janeiro with 228 souls aboard
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">02:02</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Captain's Rest:</strong> Captain leaves cockpit for scheduled rest period
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded">02:10</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Ice Crystal Encounter:</strong> Aircraft enters area of ice crystals, pitot tubes begin icing
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">02:11</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Autopilot Disconnect:</strong> Unreliable airspeed causes autopilot to disconnect
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-red-600 bg-red-50 px-2 py-1 rounded">02:14</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Ocean Impact:</strong> Aircraft stalls and crashes into Atlantic Ocean
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">❄️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                The Ice Crystal Trigger
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Pitot Tube Icing</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  As Flight 447 cruised through the Intertropical Convergence Zone, it encountered a band of ice crystals that caused the aircraft's pitot tubes to become blocked. These tubes, which measure airspeed by detecting air pressure differences, are critical for determining the aircraft's speed through the air.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-blue-900 dark:text-blue-300">Pitot System Effects</h4>
                  <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 text-sm space-y-1">
                    <li>Ice crystals blocked all three pitot tubes simultaneously</li>
                    <li>Airspeed indications became unreliable and conflicting</li>
                    <li>Autopilot automatically disconnected due to invalid data</li>
                    <li>Air data computers provided contradictory information</li>
                    <li>Flight management system lost critical input parameters</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Automation Confusion</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                  The sudden loss of reliable airspeed data triggered the autopilot to disconnect, transferring control back to the pilots. However, the aircraft's fly-by-wire system also reverted to a degraded "alternate law" mode, changing the handling characteristics and removing many of the normal flight envelope protections.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🔄</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                The Fatal Stall
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Pilot Response</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  When the autopilot disconnected, First Officer Bonin, who was pilot flying, reacted to the sudden situation by pulling back on the sidestick, causing the aircraft to climb. This initial response was contrary to standard procedures for dealing with unreliable airspeed at high altitude.
                </p>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-red-900 dark:text-red-300">Control Inputs</h4>
                  <ul className="list-disc list-inside text-red-800 dark:text-red-200 text-sm space-y-1">
                    <li>Pilot pulled back on sidestick, causing aircraft to climb</li>
                    <li>Airspeed continued to decrease due to climbing attitude</li>
                    <li>Aircraft entered deep stall at high altitude</li>
                    <li>Stall warnings initially activated, then stopped</li>
                    <li>Pilots did not recognize or recover from stall condition</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">High-Altitude Stall</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                  The aircraft entered a deep stall at 35,000 feet - a condition from which recovery is extremely difficult. The combination of high altitude, reduced engine performance, and aerodynamic stall created a situation where the aircraft was falling rather than flying, despite continued engine operation.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">👨‍✈️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Crew Resource Management
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Communication Breakdown</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  The cockpit voice recorder revealed confusion and miscommunication between the pilots. Captain Dubois returned to the cockpit but was unable to quickly assess the situation and take effective action in the limited time available.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-yellow-900 dark:text-yellow-300">Communication Issues</h4>
                  <ul className="list-disc list-inside text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
                    <li>Pilots did not clearly communicate control actions</li>
                    <li>Conflicting control inputs from both pilots</li>
                    <li>Captain unable to quickly understand situation</li>
                    <li>No clear declaration of emergency or situation assessment</li>
                    <li>Lack of standard callouts and procedures</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Training Gaps</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                  The accident revealed significant gaps in pilot training for manual flying skills, high-altitude stall recovery, and dealing with degraded automation. The crew had limited experience with manual flight at high altitude in the A330.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🔍</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Investigation Challenges
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Deep Ocean Search</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  The Bureau d'Enquêtes et d'Analyses (BEA) conducted one of the most challenging accident investigations in aviation history. The wreckage lay on the ocean floor at a depth of nearly 13,000 feet, requiring specialized deep-sea recovery equipment.
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-green-900 dark:text-green-300">Recovery Operation</h4>
                  <ul className="list-disc list-inside text-green-800 dark:text-green-200 text-sm space-y-1">
                    <li>Multiple search expeditions over nearly two years</li>
                    <li>Advanced sonar and remotely operated vehicles used</li>
                    <li>Flight recorders recovered in May 2011</li>
                    <li>104 bodies and major aircraft components recovered</li>
                    <li>Investigation cost exceeded €50 million</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Technical Analysis</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                  The investigation included extensive analysis of weather patterns, aircraft systems, and human factors. Simulator studies recreated the exact conditions to understand how the accident unfolded and why the crew was unable to recover.
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
                Global Safety Revolution
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
                The AF447 accident led to comprehensive changes in pilot training, aircraft design, and operational procedures worldwide.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Training Improvements</h3>
                  <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                    <li><strong>Manual Flying:</strong> Enhanced training for flying without automation</li>
                    <li><strong>Stall Recovery:</strong> Updated high-altitude stall recovery procedures</li>
                    <li><strong>CRM Training:</strong> Improved crew coordination and communication</li>
                    <li><strong>Simulator Training:</strong> More realistic high-altitude scenarios</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Technical Improvements</h3>
                  <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                    <li><strong>Pitot Tubes:</strong> Improved ice-resistant designs</li>
                    <li><strong>Flight Displays:</strong> Better presentation of flight envelope information</li>
                    <li><strong>Stall Protection:</strong> Enhanced angle of attack displays</li>
                    <li><strong>Data Monitoring:</strong> Improved flight data monitoring systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">📚</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                References & Further Reading
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.bea.aero/en/investigation-reports/notified-events/detail/accident-to-the-airbus-a330-registered-f-gzcp-flight-af-447-on-01-06-2009/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  📄 BEA Final Report
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Bureau d'Enquêtes et d'Analyses comprehensive investigation report</p>
              </li>
              <li>
                <a 
                  href="https://en.wikipedia.org/wiki/Air_France_Flight_447" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  🌐 Wikipedia: Air France Flight 447
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Detailed timeline and investigation summary</p>
              </li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-blue-700/90 to-blue-600/90 backdrop-blur-sm text-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Lessons from the Deep</h2>
            <p className="text-gray-200 text-center leading-relaxed mb-6">
              Air France Flight 447 fundamentally changed aviation by highlighting the critical importance of manual flying skills and crew coordination. The tragedy led to revolutionary improvements in pilot training, aircraft systems, and our understanding of high-altitude flight that benefit every pilot and passenger today.
            </p>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-blue-300">228 Lives Lost</div>
              <div className="text-sm text-gray-300">June 1, 2009 → Atlantic Ocean</div>
              <div className="text-xs text-gray-400 italic mt-4">"When technology fails, basic flying skills save lives"</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Air France Flight 447 | Air Crash Museum",
  description: "Learn about Air France Flight 447 (AF447), the 2009 Atlantic Ocean crash that killed 228 people and revolutionized pilot training. Discover the pitot tube icing, stall sequence, and safety improvements.",
  keywords: [
    "Air France 447",
    "AF447",
    "Atlantic crash",
    "pitot tube icing",
    "high altitude stall",
    "Airbus A330",
    "deep ocean search",
    "aviation accident",
    "air crash museum",
    "flight safety"
  ]
}; 