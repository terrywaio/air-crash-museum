import Image from "next/image";
import Link from "next/link";

export default function BA5390Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-600 to-red-600 dark:from-blue-900 dark:via-blue-700 dark:to-red-700">
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
                src="/images/airlines/british-airways/British_Airways_logo.svg.png"
                alt="British Airways Logo"
                width={128}
                height={64}
                className="object-contain w-full h-full"
                unoptimized
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">British Airways</h2>
          </div>
        </section>

        <div className="mb-10">
          <div className="p-4 bg-blue-800/80 backdrop-blur-sm rounded-t-xl">
            <h1 className="text-3xl font-bold text-white text-center">British Airways Flight 5390 (1990)</h1>
          </div>
          <Image
            src="/images/ba5390/ba5390.jpg"
            alt="British Airways Flight 5390"
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
                <li><strong className="text-gray-900 dark:text-white">Flight:</strong> British Airways 5390 (BA5390)</li>
                <li><strong className="text-gray-900 dark:text-white">Date:</strong> June 10, 1990</li>
                <li><strong className="text-gray-900 dark:text-white">Aircraft:</strong> BAC One-Eleven 528FL</li>
                <li><strong className="text-gray-900 dark:text-white">Registration:</strong> G-BJRT</li>
              </ul>
              <ul className="text-gray-800 dark:text-gray-200 text-base space-y-2">
                <li><strong className="text-gray-900 dark:text-white">Route:</strong> Birmingham (BHX) → Málaga (AGP)</li>
                <li><strong className="text-gray-900 dark:text-white">Occupants:</strong> 87 (81 passengers, 6 crew)</li>
                <li><strong className="text-gray-900 dark:text-white">Fatalities:</strong> 0</li>
                <li><strong className="text-gray-900 dark:text-white">Injuries:</strong> 7 (minor)</li>
              </ul>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">💨</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                The Windscreen Blowout
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
              On June 10, 1990, British Airways Flight 5390 was climbing out of Birmingham Airport bound for Málaga, Spain, with 87 people aboard. The BAC One-Eleven 528FL, registration G-BJRT, was a reliable workhorse aircraft that had been in service since 1971. Captain Tim Lancaster, 42, and First Officer Alastair Atchison, 39, were experienced pilots familiar with the aircraft type.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
              Just 13 minutes into the flight, while climbing through 17,300 feet over Oxfordshire, a catastrophic failure occurred that would test the limits of human courage and aviation training. The left windscreen of the cockpit suddenly blew out with explosive force, creating one of the most dramatic emergencies in aviation history.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
              What followed was an extraordinary display of airmanship, teamwork, and human determination that saved all 87 lives aboard and became a legendary tale of survival against impossible odds.
            </p>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">💨</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Timeline of Emergency
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">07:20</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Normal Departure:</strong> BA5390 departs Birmingham bound for Málaga with 87 souls aboard
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-red-600 bg-red-50 px-2 py-1 rounded">07:33</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Windscreen Failure:</strong> Left cockpit windscreen blows out at 17,300 feet over Oxfordshire
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">07:33</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Captain Sucked Out:</strong> Captain Lancaster partially ejected from aircraft, held by crew
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">07:34</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Emergency Descent:</strong> First Officer takes control, begins emergency descent to Southampton
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded">07:55</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Safe Landing:</strong> Aircraft lands safely at Southampton with all aboard surviving
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🔧</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                The Fatal Maintenance Error
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Previous Night's Work</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  On the night of June 9-10, 1990, a maintenance technician at Birmingham Airport replaced the left windscreen of the BAC One-Eleven. This routine maintenance task, performed thousands of times across the aviation industry, would prove to have a fatal flaw in execution.
                </p>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-red-900 dark:text-red-300">Critical Errors</h4>
                  <ul className="list-disc list-inside text-red-800 dark:text-red-200 text-sm space-y-1">
                    <li>Wrong bolt specifications used for windscreen attachment</li>
                    <li>A4 bolts used instead of required A4-80 high-strength bolts</li>
                    <li>90 bolts were 0.66mm too small in diameter</li>
                    <li>Insufficient visual inspection after installation</li>
                    <li>Lack of proper torque checking procedures</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">The Selection Error</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                  The maintenance technician selected the replacement bolts by sight and feel rather than consulting the parts manual. The wrong bolts looked similar to the correct ones but lacked the necessary strength to withstand the differential pressure loads at altitude. This fundamental error would prove catastrophic.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">💥</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                The Explosive Decompression
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Sudden Failure</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  At 17,300 feet, the differential pressure between the cabin and outside atmosphere was approximately 8.5 pounds per square inch. The undersized bolts finally failed under this load, causing the left windscreen to blow out instantaneously with explosive force.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-yellow-900 dark:text-yellow-300">Immediate Effects</h4>
                  <ul className="list-disc list-inside text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
                    <li>Captain Lancaster sucked out of aircraft to his waist</li>
                    <li>Rapid decompression and temperature drop to -17°C</li>
                    <li>Loud noise and severe windblast in cockpit</li>
                    <li>Flight bag and other loose items blown out</li>
                    <li>Autopilot disconnected due to control disruption</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Human Chain of Survival</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                  Flight attendant Nigel Ogden immediately grabbed Captain Lancaster's legs, preventing him from being completely ejected from the aircraft. Cabin crew member Susan Prince and passenger Atchison helped hold the captain while First Officer Atchison took control of the aircraft. This human chain literally saved the captain's life.
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
                Heroic Airmanship
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">First Officer Takes Command</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  With Captain Lancaster incapacitated and hanging outside the aircraft, First Officer Alastair Atchison took immediate control. Despite the noise, freezing air, and debris flying around the cockpit, he maintained his composure and began executing emergency procedures.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-blue-900 dark:text-blue-300">Emergency Actions</h4>
                  <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 text-sm space-y-1">
                    <li>Immediately began emergency descent to safe altitude</li>
                    <li>Declared Pan-Pan emergency to air traffic control</li>
                    <li>Diverted to Southampton Airport (nearest suitable airfield)</li>
                    <li>Managed aircraft systems despite extreme conditions</li>
                    <li>Coordinated with cabin crew throughout emergency</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Cabin Crew Heroics</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                  The cabin crew's actions were nothing short of heroic. While holding onto Captain Lancaster in freezing, hurricane-force winds, they also managed to calm passengers, secure the cabin, and assist the First Officer. Their coordinated response was textbook crew resource management under the most extreme circumstances.
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
                Investigation Findings
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">AAIB Investigation</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  The Air Accidents Investigation Branch (AAIB) conducted a thorough investigation that revealed the maintenance error was the primary cause. However, they also identified systemic issues in maintenance procedures and oversight.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-orange-900 dark:text-orange-300">Direct Causes</h4>
                    <ul className="list-disc list-inside text-orange-800 dark:text-orange-200 text-sm space-y-1">
                      <li>Wrong bolt specification selected</li>
                      <li>Inadequate bolt strength for pressure loads</li>
                      <li>Poor lighting during maintenance work</li>
                      <li>Lack of proper verification procedures</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-purple-900 dark:text-purple-300">Contributing Factors</h4>
                    <ul className="list-disc list-inside text-purple-800 dark:text-purple-200 text-sm space-y-1">
                      <li>Time pressure during maintenance shift</li>
                      <li>Insufficient training on bolt identification</li>
                      <li>Lack of mandatory reference to technical manuals</li>
                      <li>Poor quality control procedures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🛡</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Safety Improvements
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
                The BA5390 incident led to significant improvements in aircraft maintenance procedures and quality control systems worldwide.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Maintenance Improvements</h3>
                  <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                    <li><strong>Parts Identification:</strong> Mandatory use of technical manuals for part selection</li>
                    <li><strong>Quality Control:</strong> Enhanced inspection and verification procedures</li>
                    <li><strong>Training:</strong> Improved training on critical component maintenance</li>
                    <li><strong>Documentation:</strong> Better record-keeping and tracking systems</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Regulatory Changes</h3>
                  <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                    <li><strong>Maintenance Standards:</strong> Stricter certification requirements for technicians</li>
                    <li><strong>Supervision:</strong> Enhanced oversight of critical maintenance tasks</li>
                    <li><strong>Equipment:</strong> Better tools and lighting for maintenance work</li>
                    <li><strong>Procedures:</strong> Mandatory double-checking for safety-critical components</li>
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
                  href="https://assets.publishing.service.gov.uk/media/5422f2b3e5274a1317000b03/8-1990_G-BJRT.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  📄 AAIB Final Report (PDF)
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Air Accidents Investigation Branch comprehensive investigation report</p>
              </li>
              <li>
                <a 
                  href="https://en.wikipedia.org/wiki/British_Airways_Flight_5390" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  🌐 Wikipedia: British Airways Flight 5390
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Detailed account with crew information and aftermath</p>
              </li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-blue-800/90 to-blue-700/90 backdrop-blur-sm text-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Miracle of Teamwork</h2>
            <p className="text-gray-200 text-center leading-relaxed mb-6">
              British Airways Flight 5390 demonstrated the extraordinary power of human courage, quick thinking, and teamwork under the most extreme circumstances. The heroic actions of the crew saved all 87 lives aboard and created one of aviation's most remarkable survival stories.
            </p>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-blue-300">87 Lives Saved → 0 Fatalities</div>
              <div className="text-sm text-gray-300">June 10, 1990 → Over Oxfordshire, England</div>
              <div className="text-xs text-gray-400 italic mt-4">"Courage under pressure, teamwork under crisis"</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "British Airways Flight 5390 | Air Crash Museum",
  description: "Learn about British Airways Flight 5390 (BA5390), the 1990 windscreen blowout incident where heroic crew actions saved all 87 lives. Discover the maintenance error, emergency response, and safety improvements.",
  keywords: [
    "British Airways 5390",
    "BA5390",
    "windscreen blowout",
    "maintenance error",
    "emergency landing",
    "BAC One-Eleven",
    "crew heroism",
    "aviation safety",
    "air crash museum",
    "flight safety"
  ]
};
