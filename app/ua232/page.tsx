import Image from "next/image";
import Link from "next/link";

export default function UA232Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-gray-800 dark:from-blue-700 dark:via-blue-600 dark:to-gray-900">
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
                src="/images/airlines/united-airlines/United_Airlines_logo.svg.png"
                alt="United Airlines Logo"
                width={128}
                height={64}
                className="object-contain w-full h-full"
                unoptimized
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">United Airlines</h2>
          </div>
        </section>

        <div className="mb-10">
          <div className="p-4 bg-blue-600/80 backdrop-blur-sm rounded-t-xl">
            <h1 className="text-3xl font-bold text-white text-center">United Airlines Flight 232 (1989)</h1>
          </div>
          <Image
            src="/images/ua232/ua232.jpg"
            alt="United Airlines Flight 232"
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
                <li><strong className="text-gray-900 dark:text-white">Flight:</strong> United Airlines 232 (UA232)</li>
                <li><strong className="text-gray-900 dark:text-white">Date:</strong> July 19, 1989</li>
                <li><strong className="text-gray-900 dark:text-white">Aircraft:</strong> McDonnell Douglas DC-10-10</li>
                <li><strong className="text-gray-900 dark:text-white">Registration:</strong> N1819U</li>
              </ul>
              <ul className="text-gray-800 dark:text-gray-200 text-base space-y-2">
                <li><strong className="text-gray-900 dark:text-white">Route:</strong> Denver (DEN) → Chicago (ORD)</li>
                <li><strong className="text-gray-900 dark:text-white">Occupants:</strong> 296 (285 passengers, 11 crew)</li>
                <li><strong className="text-gray-900 dark:text-white">Fatalities:</strong> 111</li>
                <li><strong className="text-gray-900 dark:text-white">Survivors:</strong> 185 (62% survival rate)</li>
              </ul>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🌪️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                The Miracle of Sioux City
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-4">
              On July 19, 1989, United Airlines Flight 232 departed Denver for Chicago with 296 souls aboard. What began as a routine domestic flight became one of aviation's most incredible survival stories, demonstrating the power of crew resource management, innovative thinking, and extraordinary airmanship in the face of an "impossible" situation.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-4">
              The McDonnell Douglas DC-10, tail number N1819U, had been in service for 16 years and was considered a reliable workhorse of United's fleet. Captain Alfred "Al" Haynes, with over 33,000 flight hours, was at the controls for what should have been a routine 2.5-hour flight to Chicago O'Hare.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
              At 3:16 PM, approximately one hour into the flight while cruising at 37,000 feet over Iowa, a catastrophic event occurred that would test the limits of human ingenuity and courage. The tail-mounted engine failed in a way that should have made the aircraft completely uncontrollable, yet somehow, 185 people would survive the unsurvivable.
            </p>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">⚙️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Catastrophic Engine Failure
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">The Fan Disk Disintegration</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  The Number 2 engine (tail-mounted) suffered an uncontained failure when its titanium fan disk, weighing 348 pounds and spinning at 3,600 RPM, disintegrated due to a fatigue crack. The spinning disk exploded like a grenade, sending high-energy fragments in all directions.
                </p>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-red-900 dark:text-red-300">Failure Sequence</h4>
                  <ul className="list-disc list-inside text-red-800 dark:text-red-200 text-sm space-y-1">
                    <li>Manufacturing defect created microscopic crack in titanium fan disk</li>
                    <li>Crack propagated over 17 years and 15,503 flight cycles</li>
                    <li>Disk fractured, sending fragments through fuselage and wing</li>
                    <li>All three independent hydraulic systems severed by debris</li>
                    <li>Complete loss of primary flight controls</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Total Hydraulic Failure</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                  The engine fragments severed all three of the DC-10's hydraulic systems, a scenario considered so unlikely (odds of 1 in 1 billion) that no procedures existed for it. Without hydraulics, the crew lost control of elevators, ailerons, rudder, wing flaps, and landing gear. The aircraft was essentially flying like a dart with no steering.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Differential Thrust Control
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Innovative Flight Control</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  With no traditional flight controls, Captain Haynes and his crew developed an unprecedented technique: using differential thrust from the two remaining wing-mounted engines to steer the aircraft. Higher thrust on the left engine would cause a right turn, and vice versa.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-blue-900 dark:text-blue-300">Thrust Control Technique</h4>
                  <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 text-sm space-y-1">
                    <li>Left engine high thrust + Right engine low thrust = Right turn</li>
                    <li>Right engine high thrust + Left engine low thrust = Left turn</li>
                    <li>Both engines reduced thrust = Nose down (descent)</li>
                    <li>Both engines increased thrust = Nose up (climb)</li>
                    <li>Extremely sensitive - tiny adjustments caused dramatic responses</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Dennis Fitch: The Fourth Hero</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                  When off-duty DC-10 instructor pilot Dennis Fitch heard about the emergency, he volunteered to help. Positioning himself at the throttles, Fitch became the "fourth pilot," making minute thrust adjustments based on the captain's commands. His expertise in DC-10 systems proved invaluable.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🚁</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                The Sioux City Landing
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Emergency Response</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  Sioux Gateway Airport, normally a small regional facility, mobilized every available resource. Fire trucks from multiple departments, ambulances, medical personnel, and even off-duty healthcare workers rushed to assist. The airport foamed the runway and positioned emergency vehicles strategically.
                </p>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-orange-900 dark:text-orange-300">Emergency Preparations</h4>
                  <ul className="list-disc list-inside text-orange-800 dark:text-orange-200 text-sm space-y-1">
                    <li>186 firefighters and emergency personnel mobilized</li>
                    <li>35 ambulances and medical units positioned</li>
                    <li>Runway foamed to reduce fire risk</li>
                    <li>Hospitals alerted and trauma teams assembled</li>
                    <li>All available aircraft moved away from runway</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">The Landing</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                  At 4:00 PM, after 44 minutes of the most challenging flight control in aviation history, Flight 232 attempted to land. The aircraft was descending too fast and approaching the runway at an angle, but it was the best the crew could achieve. The DC-10 hit the runway hard, broke apart, and caught fire, yet 185 of 296 people survived - a miracle by any measure.
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
                Aviation Safety Revolution
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-4">
                The lessons learned from United 232 revolutionized aviation safety, crew training, and emergency response procedures worldwide.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Technical Improvements</h3>
                  <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                    <li><strong>Engine Inspection:</strong> Enhanced ultrasonic testing for fan disks</li>
                    <li><strong>Hydraulic Design:</strong> Better protection and backup systems</li>
                    <li><strong>Emergency Procedures:</strong> Development of manual reversion techniques</li>
                    <li><strong>Crew Training:</strong> Differential thrust control in simulators</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Emergency Response</h3>
                  <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                    <li><strong>CRM Training:</strong> Enhanced crew resource management programs</li>
                    <li><strong>Airport Preparedness:</strong> Improved emergency response protocols</li>
                    <li><strong>Medical Response:</strong> Better coordination of trauma care</li>
                    <li><strong>Communication:</strong> Standardized emergency communication procedures</li>
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
                  href="https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR9006.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  📄 NTSB Final Report (PDF)
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Comprehensive investigation findings and safety recommendations</p>
              </li>
              <li>
                <a 
                  href="https://en.wikipedia.org/wiki/United_Airlines_Flight_232" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  🌐 Wikipedia: United Airlines Flight 232
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Detailed timeline and crew information</p>
              </li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-blue-700/90 to-blue-600/90 backdrop-blur-sm text-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Miracle of Airmanship</h2>
            <p className="text-gray-200 text-center leading-relaxed mb-6">
              United 232 represents the pinnacle of crew resource management and human ingenuity. When faced with an impossible situation, the crew's teamwork, innovative thinking, and calm professionalism saved 185 lives. Their heroic efforts continue to inspire aviation safety improvements and crew training worldwide.
            </p>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-green-300">185 Lives Saved • 111 Lives Lost</div>
              <div className="text-sm text-gray-300">July 19, 1889 • Sioux City, Iowa</div>
              <div className="text-xs text-gray-400 italic mt-4">"Heroism in the face of the impossible"</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "United Airlines Flight 232 | Air Crash Museum",
  description: "Explore the Miracle of Sioux City - United Airlines Flight 232's incredible survival story. Learn about differential thrust control, crew resource management, and extraordinary airmanship.",
  keywords: [
    "United Airlines 232",
    "UA232",
    "Sioux City miracle",
    "differential thrust",
    "crew resource management",
    "McDonnell Douglas DC-10",
    "hydraulic failure",
    "aviation safety",
    "air crash museum",
    "flight safety"
  ]
}; 
