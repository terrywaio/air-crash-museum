import Image from "next/image";
import Link from "next/link";

export default function JAL123Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-white to-red-600 dark:from-red-800 dark:via-gray-900 dark:to-red-800">
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
                src="/images/airlines/japan-airlines/Japan_Airlines_Logo_(2011).svg.png"
                alt="Japan Airlines Logo"
                width={128}
                height={64}
                className="object-contain w-full h-full"
                unoptimized
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Japan Airlines</h2>
          </div>
        </section>

        <div className="mb-10">
          <div className="p-4 bg-red-700/80 backdrop-blur-sm rounded-t-xl">
            <h1 className="text-3xl font-bold text-white text-center">Japan Air Lines Flight 123 (1985)</h1>
          </div>
          <Image
            src="/images/jal123/jal123.jpg"
            alt="Japan Air Lines Flight 123"
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
                <li><strong className="text-gray-900 dark:text-white">Flight:</strong> Japan Airlines 123 (JAL123)</li>
                <li><strong className="text-gray-900 dark:text-white">Date:</strong> August 12, 1985</li>
                <li><strong className="text-gray-900 dark:text-white">Aircraft:</strong> Boeing 747-146SR</li>
                <li><strong className="text-gray-900 dark:text-white">Registration:</strong> JA8119</li>
              </ul>
              <ul className="text-gray-800 dark:text-gray-200 text-base space-y-2">
                <li><strong className="text-gray-900 dark:text-white">Route:</strong> Tokyo Haneda (HND) → Osaka Itami (ITM)</li>
                <li><strong className="text-gray-900 dark:text-white">Occupants:</strong> 524 (509 passengers, 15 crew)</li>
                <li><strong className="text-gray-900 dark:text-white">Fatalities:</strong> 520</li>
                <li><strong className="text-gray-900 dark:text-white">Survivors:</strong> 4</li>
              </ul>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🏔️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                The Deadliest Single-Aircraft Disaster
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
              On August 12, 1985, Japan Airlines Flight 123 departed Tokyo Haneda Airport for what should have been a routine 54-minute domestic flight to Osaka. The Boeing 747-146SR, registration JA8119, was carrying 524 people on one of the busiest travel days of the year during the Obon holiday period.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
              Just 12 minutes after takeoff, while climbing through 24,000 feet, a catastrophic structural failure in the aircraft's rear pressure bulkhead would trigger a sequence of events that became the deadliest single-aircraft accident in aviation history.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
              What followed was a 32-minute struggle by the crew to maintain control of the crippled aircraft, ultimately ending in tragedy on the remote slopes of Mount Takamagahara.
            </p>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">⏰</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Timeline of Disaster
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">18:04</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Normal Departure:</strong> JAL123 departs Tokyo Haneda bound for Osaka
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-red-600 bg-red-50 px-2 py-1 rounded">18:16</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Structural Failure:</strong> Rear pressure bulkhead fails, causing explosive decompression
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">18:17</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Control Loss:</strong> Hydraulic systems fail, aircraft becomes difficult to control
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">18:18-18:56</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Heroic Struggle:</strong> Crew fights for 32 minutes to control the aircraft
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded">18:56</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Mountain Impact:</strong> Aircraft crashes into Mount Takamagahara
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🔧</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                The Fatal Repair
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Previous Damage</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  Seven years earlier, in 1978, the same aircraft had suffered a tailstrike incident during landing at Osaka. During the subsequent repair, Boeing incorrectly installed a splice plate on the rear pressure bulkhead, using a single row of rivets instead of the required double row.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-yellow-900 dark:text-yellow-300">Repair Deficiency</h4>
                  <ul className="list-disc list-inside text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
                    <li>Single row of rivets instead of required double row</li>
                    <li>Reduced structural strength by approximately 70%</li>
                    <li>Created stress concentration at rivet holes</li>
                    <li>Metal fatigue crack grew with each pressurization cycle</li>
                    <li>Eventual catastrophic failure after 12,319 flight cycles</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">The Explosive Decompression</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                  When the weakened bulkhead finally failed, it caused explosive decompression that destroyed the vertical stabilizer and damaged all four hydraulic systems. The crew was left trying to control a 747 using only engine thrust differential.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">👨‍✈️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Heroic Crew Effort
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Captain Masami Takahama</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  Captain Takahama, with over 12,000 flight hours, led his crew through an impossible situation with remarkable skill and composure. Despite having no hydraulic controls, they managed to keep the aircraft aloft for 32 crucial minutes.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-blue-900 dark:text-blue-300">Crew Actions</h4>
                  <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 text-sm space-y-1">
                    <li>Used differential engine thrust to attempt steering</li>
                    <li>Lowered landing gear to increase drag and stability</li>
                    <li>Coordinated with flight engineer to manage systems</li>
                    <li>Attempted multiple emergency landing approaches</li>
                    <li>Maintained communication with air traffic control</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Against All Odds</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                  The fact that the crew managed to keep the aircraft controllable for over 30 minutes without hydraulics was considered extraordinary by aviation experts. Their actions provided crucial time for emergency response preparation and undoubtedly prevented an even greater catastrophe.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🛡️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Legacy of Safety
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
                The JAL123 accident led to fundamental changes in aircraft maintenance, inspection procedures, and design standards worldwide.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Maintenance Improvements</h3>
                  <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                    <li><strong>Inspection Standards:</strong> Enhanced structural inspection requirements</li>
                    <li><strong>Repair Procedures:</strong> Stricter oversight of major structural repairs</li>
                    <li><strong>Documentation:</strong> Improved repair documentation and tracking</li>
                    <li><strong>Training:</strong> Enhanced technician training and certification</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Design Changes</h3>
                  <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                    <li><strong>Pressure Bulkheads:</strong> Redesigned bulkhead structures</li>
                    <li><strong>Hydraulic Systems:</strong> Improved redundancy and separation</li>
                    <li><strong>Flight Controls:</strong> Manual reversion capabilities</li>
                    <li><strong>Emergency Procedures:</strong> New crew training protocols</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-red-700/90 to-red-600/90 backdrop-blur-sm text-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Never Forgotten</h2>
            <p className="text-gray-200 text-center leading-relaxed mb-6">
              Japan Airlines Flight 123 remains the deadliest single-aircraft accident in aviation history. The tragic loss of 520 lives led to significant improvements in aircraft design, maintenance procedures, and emergency response protocols that continue to save lives today. The heroic efforts of the crew are remembered as an extraordinary example of professionalism under impossible circumstances.
            </p>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-red-300">520 Lives Lost → 4 Survivors</div>
              <div className="text-sm text-gray-300">August 12, 1985 → Mount Takamagahara, Japan</div>
              <div className="text-xs text-gray-400 italic mt-4">"Their sacrifice made aviation safer for all"</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Japan Airlines Flight 123 | Air Crash Museum",
  description: "Learn about Japan Airlines Flight 123 (JAL123), the deadliest single-aircraft accident in aviation history that claimed 520 lives on August 12, 1985.",
  keywords: [
    "Japan Airlines 123",
    "JAL123",
    "Mount Takamagahara",
    "Boeing 747",
    "pressure bulkhead failure",
    "aviation accident",
    "air crash museum",
    "flight safety"
  ]
}; 