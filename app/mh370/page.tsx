import Image from "next/image";
import Link from "next/link";

export default function MH370Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-blue-800 dark:from-red-800 dark:via-red-700 dark:to-blue-900">
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
                src="/images/airlines/malaysia-airlines/Malaysia_Airlines_Logo.svg.png"
                alt="Malaysia Airlines Logo"
                width={128}
                height={64}
                className="object-contain w-full h-full"
                unoptimized
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Malaysia Airlines</h2>
          </div>
        </section>

        <div className="mb-10">
          <div className="p-4 bg-red-600/80 backdrop-blur-sm rounded-t-xl">
            <h1 className="text-3xl font-bold text-white text-center">Malaysia Airlines Flight 370 (2014)</h1>
          </div>
          <Image
            src="/images/mh370/mh370.jpg"
            alt="Malaysia Airlines Flight 370"
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
                <li><strong className="text-gray-900 dark:text-white">Flight:</strong> Malaysia Airlines 370 (MH370)</li>
                <li><strong className="text-gray-900 dark:text-white">Date:</strong> March 8, 2014</li>
                <li><strong className="text-gray-900 dark:text-white">Aircraft:</strong> Boeing 777-200ER</li>
                <li><strong className="text-gray-900 dark:text-white">Registration:</strong> 9M-MRO</li>
              </ul>
              <ul className="text-gray-800 dark:text-gray-200 text-base space-y-2">
                <li><strong className="text-gray-900 dark:text-white">Route:</strong> Kuala Lumpur (KUL) → Beijing (PEK)</li>
                <li><strong className="text-gray-900 dark:text-white">Occupants:</strong> 239 (227 passengers, 12 crew)</li>
                <li><strong className="text-gray-900 dark:text-white">Status:</strong> Missing, presumed crashed</li>
                <li><strong className="text-gray-900 dark:text-white">Location:</strong> Southern Indian Ocean (presumed)</li>
              </ul>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🌃</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                The Vanishing Flight
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
              Malaysia Airlines Flight 370 vanished on March 8, 2014, during what should have been a routine red-eye flight from Kuala Lumpur to Beijing. The disappearance of this Boeing 777-200ER with 239 souls aboard became the most perplexing mystery in aviation history, defying explanation and captivating the world for nearly a decade.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
              The aircraft was piloted by Captain Zaharie Ahmad Shah, 53, an experienced aviator with over 18,000 flight hours, accompanied by First Officer Fariq Abdul Hamid, 27, who was completing his Boeing 777 training. The Boeing 777 was considered one of the safest aircraft types in commercial aviation, with an exemplary safety record.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
              At 00:42 UTC, approximately 38 minutes after takeoff, MH370 vanished from air traffic control radar screens over the South China Sea. The last radio transmission was a routine "Good night Malaysian three seven zero" - words that would become haunting in their ordinariness as the aircraft disappeared into the darkness.
            </p>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">⏰</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Timeline of Mystery
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">00:41</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Last Normal Contact:</strong> "Good night Malaysian three seven zero" - final radio transmission
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-red-600 bg-red-50 px-2 py-1 rounded">00:42</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Transponder Silent:</strong> Aircraft disappears from civilian radar, all communication systems stop
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">01:19</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Course Deviation:</strong> Military radar detects aircraft turning back toward Malaysian Peninsula
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded">02:22</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Last Radar Contact:</strong> Final detection by Malaysian military radar over Strait of Malacca
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">08:11</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Final Satellite Ping:</strong> Last automated handshake with Inmarsat satellite system
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">📡</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                The Digital Trail
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Satellite Data Breakthrough</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  The key to understanding MH370's fate came from an unexpected source: Inmarsat satellite communications. The aircraft continued to automatically "handshake" with satellites for over six hours after vanishing from radar, providing crucial tracking data.
                </p>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                  Doppler shift analysis of these satellite transmissions revealed the aircraft had flown south into the remote southern Indian Ocean, revolutionizing how investigators track missing aircraft.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Largest Search in Aviation History</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-gray-900 dark:text-white">Search Statistics</h4>
                    <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-1">
                      <li>120,000 km² of seabed searched</li>
                      <li>26 countries involved</li>
                      <li>Cost: Over $150 million</li>
                      <li>Duration: Nearly 3 years</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-gray-900 dark:text-white">Technology Used</h4>
                    <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-1">
                      <li>Deep-sea sonar mapping</li>
                      <li>Autonomous underwater vehicles</li>
                      <li>Satellite imagery analysis</li>
                      <li>Ocean drift modeling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🔄</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Course Deviation
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
              Between 2015 and 2017, 33 pieces of debris confirmed or likely from MH370 washed ashore across the western Indian Ocean. The first major breakthrough came in July 2015 when a flaperon was discovered on Réunion Island.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-blue-900 dark:text-blue-300">Key Debris Discoveries</h3>
              <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 text-sm space-y-1">
                <li><strong>Flaperon (Réunion Island):</strong> First confirmed MH370 debris, provided crucial identification</li>
                <li><strong>Wing flap (Tanzania):</strong> Showed evidence of high-speed impact with water</li>
                <li><strong>Engine cowling pieces:</strong> Confirmed aircraft broke up in flight or on impact</li>
                <li><strong>Interior panels:</strong> Suggested violent breakup and rapid sinking</li>
              </ul>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🌊</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                The Greatest Search
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
              MH370's disappearance exposed critical gaps in aviation tracking, leading to the most significant changes in aircraft monitoring since radar introduction.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">New Tracking Systems</h3>
                <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                  <li><strong>GADSS:</strong> Global Aeronautical Distress and Safety System</li>
                  <li><strong>15-minute reporting:</strong> Position reports over remote areas</li>
                  <li><strong>Enhanced flight recorders:</strong> Longer duration, deployable systems</li>
                  <li><strong>Real-time streaming:</strong> Critical flight data transmission</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">International Cooperation</h3>
                <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                  <li><strong>Data sharing:</strong> Improved radar and satellite data sharing</li>
                  <li><strong>Search coordination:</strong> Better international response frameworks</li>
                  <li><strong>Communication protocols:</strong> Standardized emergency procedures</li>
                  <li><strong>Technology investment:</strong> New tracking and recovery systems</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🛡️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Aviation Security Revolution
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
              MH370's disappearance exposed critical gaps in aviation tracking, leading to the most significant changes in aircraft monitoring since radar introduction.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">New Tracking Systems</h3>
                <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                  <li><strong>GADSS:</strong> Global Aeronautical Distress and Safety System</li>
                  <li><strong>15-minute reporting:</strong> Position reports over remote areas</li>
                  <li><strong>Enhanced flight recorders:</strong> Longer duration, deployable systems</li>
                  <li><strong>Real-time streaming:</strong> Critical flight data transmission</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">International Cooperation</h3>
                <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                  <li><strong>Data sharing:</strong> Improved radar and satellite data sharing</li>
                  <li><strong>Search coordination:</strong> Better international response frameworks</li>
                  <li><strong>Communication protocols:</strong> Standardized emergency procedures</li>
                  <li><strong>Technology investment:</strong> New tracking and recovery systems</li>
                </ul>
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
                  href="https://mh370.gov.my/en/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  🏛 Official Malaysian Government Investigation
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Comprehensive investigation reports and ongoing updates</p>
              </li>
              <li>
                <a 
                  href="https://www.atsb.gov.au/mh370/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  📊 Australian Transport Safety Bureau
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Technical analysis and search coordination documentation</p>
              </li>
              <li>
                <a 
                  href="https://en.wikipedia.org/wiki/Malaysia_Airlines_Flight_370" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  🌐 Wikipedia: Malaysia Airlines Flight 370
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Comprehensive timeline and analysis compilation</p>
              </li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-red-900/90 to-red-800/90 backdrop-blur-sm text-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">The Enduring Mystery</h2>
            <p className="text-gray-200 text-center leading-relaxed mb-6">
              Malaysia Airlines Flight 370 remains aviation's greatest unsolved mystery. The disappearance sparked the largest multinational search in aviation history and led to revolutionary improvements in aircraft tracking, communication systems, and international cooperation that benefit global aviation safety.
            </p>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-red-300">239 Souls Missing</div>
              <div className="text-sm text-gray-300">March 8, 2014 → Southern Indian Ocean</div>
              <div className="text-xs text-gray-400 italic mt-4">"Until they come home, we keep searching"</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Malaysia Airlines Flight 370 | Air Crash Museum",
  description: "Explore the mystery of Malaysia Airlines Flight 370 (MH370), aviation's greatest unsolved puzzle. Learn about the investigation, search efforts, satellite analysis, and safety improvements that followed.",
  keywords: [
    "Malaysia Airlines 370",
    "MH370",
    "aviation mystery",
    "missing aircraft",
    "Indian Ocean",
    "satellite tracking",
    "GADSS",
    "air crash museum",
    "flight safety"
  ]
};
