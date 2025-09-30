import Image from "next/image";
import Link from "next/link";

export default function PanAm103Page() {
  return (
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
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2 border border-gray-200">
              <Image 
                src="/images/airlines/pan-am/Pan_Am_Logo.svg.png" 
                alt="Pan Am Logo" 
                width={64} 
                height={64} 
                className="object-contain" 
                unoptimized
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Pan American World Airways</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">IATA: PA, ICAO: PAA</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-gray-900 dark:text-white">United States</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Country of Origin</p>
          </div>
        </div>
      </section>

      <div className="bg-white/90 dark:bg-black/50 p-8 rounded-xl shadow-lg border border-gray-200">
        <div className="mb-10">
          <div className="p-4 bg-blue-700/80 backdrop-blur-sm rounded-t-xl">
            <h1 className="text-3xl font-bold text-white text-center">Pan Am Flight 103 (1988)</h1>
          </div>
          <Image
            src="/images/panam103/panam103.jpg"
            alt="Pan Am Flight 103"
            width={700}
            height={350}
            className="rounded-b-xl w-full shadow-2xl border-x-4 border-b-4 border-white/70"
            placeholder="blur"
            blurDataURL="/next.svg"
            unoptimized
            priority
          />
        </div>
        <div className="grid gap-8">
          <section className="bg-white/80 dark:bg-black/40 rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)] flex items-center gap-2">
              <span>✈️</span>
              <span>Flight Information</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-gray-800 dark:text-gray-200 text-base space-y-2">
                <li><strong className="text-gray-900 dark:text-white">Flight:</strong> Pan American World Airways 103</li>
                <li><strong className="text-gray-900 dark:text-white">Date:</strong> December 21, 1988</li>
                <li><strong className="text-gray-900 dark:text-white">Aircraft:</strong> Boeing 747-121 "Clipper Maid of the Seas"</li>
                <li><strong className="text-gray-900 dark:text-white">Registration:</strong> N739PA</li>
              </ul>
              <ul className="text-gray-800 dark:text-gray-200 text-base space-y-2">
                <li><strong className="text-gray-900 dark:text-white">Route:</strong> London Heathrow (LHR) → New York JFK</li>
                <li><strong className="text-gray-900 dark:text-white">Occupants:</strong> 259 (243 passengers, 16 crew)</li>
                <li><strong className="text-gray-900 dark:text-white">Fatalities:</strong> 270 (259 on board + 11 on ground)</li>
                <li><strong className="text-gray-900 dark:text-white">Location:</strong> Lockerbie, Scotland</li>
              </ul>
            </div>
          </section>

          <section className="bg-white/80 dark:bg-black/40 rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">💣 The Lockerbie Bombing</h2>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-4">
              On December 21, 1988, Pan American World Airways Flight 103, "Clipper Maid of the Seas," was cruising at 31,000 feet over the Scottish countryside when it was destroyed by a terrorist bomb. The attack, which would become known as the Lockerbie bombing, was one of the deadliest acts of terrorism against American civilians before 9/11.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-4">
              The Boeing 747 was carrying 259 people on a routine transatlantic flight from London Heathrow to New York JFK. Many passengers were American college students returning home for Christmas holidays, including 35 students from Syracuse University's study abroad program. The timing made the tragedy even more heartbreaking.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
              At 19:02 GMT, 38 minutes after takeoff, a concealed bomb exploded in the aircraft's forward cargo hold. The explosion tore the aircraft apart, sending debris across 845 square miles of Scottish countryside. Large sections of the plane crashed into the town of Lockerbie, killing 11 residents and destroying 21 houses.
            </p>
          </section>

          <section className="bg-white/80 dark:bg-black/40 rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">⏰ Timeline of Terror</h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">18:24</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Departure:</strong> Pan Am 103 departs London Heathrow bound for New York JFK
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">19:00</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Normal Flight:</strong> Aircraft cruising at 31,000 feet over Scottish Borders
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-red-600 bg-red-50 px-2 py-1 rounded">19:02</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Bomb Detonation:</strong> Explosive device detonates in forward cargo hold AVE4041PA
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">19:03</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Structural Breakup:</strong> Aircraft disintegrates in midair, radar contact lost
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded">19:04</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Ground Impact:</strong> Main fuselage section crashes into Lockerbie, destroying homes
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/80 dark:bg-black/40 rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">💣 The Bomb</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Improvised Explosive Device</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  The bomb was concealed in a Toshiba radio-cassette player and placed inside a brown Samsonite suitcase. The explosive was composed of Semtex plastic explosive, a powerful and difficult-to-detect material commonly used by terrorists. The device was activated by a timer mechanism.
                </p>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-red-900 dark:text-red-300">Bomb Details</h4>
                  <ul className="list-disc list-inside text-red-800 dark:text-red-200 text-sm space-y-1">
                    <li>Explosive: 340-450 grams of Semtex plastic explosive</li>
                    <li>Concealment: Toshiba RT-SF16 radio-cassette player</li>
                    <li>Container: Brown Samsonite System 4 suitcase</li>
                    <li>Timer: MST-13 timer manufactured in Switzerland</li>
                    <li>Location: Forward cargo hold container AVE4041PA</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Explosive Effects</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                  The explosion created a 20-inch hole in the aircraft's fuselage and triggered catastrophic structural failure. The sudden loss of pressurization and structural integrity caused the Boeing 747 to break apart in seconds, making survival impossible for anyone aboard.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/80 dark:bg-black/40 rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">🔍 Unprecedented Investigation</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Largest Criminal Investigation in UK History</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  The investigation into Pan Am 103 became the largest criminal investigation in UK history, involving authorities from multiple countries including Scotland, England, the United States, Germany, and Malta. The complexity of gathering evidence across such a vast debris field presented unprecedented challenges.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-blue-900 dark:text-blue-300">Investigation Scale</h4>
                    <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 text-sm space-y-1">
                      <li>845 square miles of debris field</li>
                      <li>10,000+ pieces of evidence collected</li>
                      <li>180+ investigators from multiple countries</li>
                      <li>1,000+ witnesses interviewed</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-green-900 dark:text-green-300">Forensic Breakthrough</h4>
                    <ul className="list-disc list-inside text-green-800 dark:text-green-200 text-sm space-y-1">
                      <li>Timer fragment MST-13 identified</li>
                      <li>Clothing fragments traced to Malta</li>
                      <li>Suitcase routing through Frankfurt</li>
                      <li>Libyan connections established</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Key Evidence</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  A tiny fragment of the timer circuit board, smaller than a fingernail, became crucial evidence. This fragment was traced to a batch of MST-13 timers sold by a Swiss company to Libya. Clothing fragments in the bomb suitcase were traced to a shop in Malta, creating a trail that led investigators to the perpetrators.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/80 dark:bg-black/40 rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">⚖️ Legal Proceedings</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">The Libya Connection</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  Investigation revealed that the bombing was orchestrated by Libyan intelligence agents acting under orders from the government of Muammar Gaddafi. Two Libyan nationals, Abdelbaset al-Megrahi and Lamin Khalifah Fhimah, were indicted for the attack.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-yellow-900 dark:text-yellow-300">Legal Timeline</h4>
                  <ul className="list-disc list-inside text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
                    <li><strong>1991:</strong> Indictments issued against two Libyan agents</li>
                    <li><strong>1992-1999:</strong> UN sanctions imposed on Libya</li>
                    <li><strong>2000-2001:</strong> Trial held at Camp Zeist, Netherlands</li>
                    <li><strong>2001:</strong> Al-Megrahi convicted, Fhimah acquitted</li>
                    <li><strong>2009:</strong> Al-Megrahi released on compassionate grounds</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">International Justice</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                  The trial was held under Scots law in the Netherlands, representing a unique form of international justice. Libya eventually accepted responsibility for the bombing in 2003 and paid $2.7 billion in compensation to families of the victims.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/80 dark:bg-black/40 rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">🛡️ Aviation Security Revolution</h2>
            <div className="space-y-4">
              <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-4">
                The Lockerbie bombing exposed critical vulnerabilities in aviation security and led to comprehensive changes in airport security protocols worldwide.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Security Improvements</h3>
                  <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                    <li><strong>Baggage Reconciliation:</strong> Mandatory matching of passengers to checked bags</li>
                    <li><strong>Enhanced Screening:</strong> X-ray inspection of all checked baggage</li>
                    <li><strong>Explosive Detection:</strong> Deployment of bomb detection equipment</li>
                    <li><strong>International Cooperation:</strong> Improved intelligence sharing between countries</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Regulatory Changes</h3>
                  <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                    <li><strong>ICAO Standards:</strong> New international security standards</li>
                    <li><strong>Background Checks:</strong> Enhanced screening of aviation personnel</li>
                    <li><strong>Cargo Security:</strong> Stricter controls on freight and mail</li>
                    <li><strong>No-Fly Lists:</strong> Development of terrorist watch lists</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/80 dark:bg-black/40 rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">💝 Remembrance and Legacy</h2>
            <div className="space-y-4">
              <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-4">
                The Lockerbie bombing created lasting bonds between the families of victims and the community of Lockerbie. Annual memorial services, scholarships, and various charitable foundations keep the memory of the victims alive.
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-purple-900 dark:text-purple-300">Memorials and Tributes</h3>
                <ul className="list-disc list-inside text-purple-800 dark:text-purple-200 text-sm space-y-1">
                  <li><strong>Syracuse University:</strong> Lockerbie Memorial and scholarship programs</li>
                  <li><strong>Lockerbie Memorial:</strong> Garden of Remembrance in the town cemetery</li>
                  <li><strong>Victims' Families:</strong> Ongoing advocacy for aviation security</li>
                  <li><strong>Cultural Impact:</strong> Books, documentaries, and films preserving the story</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white/80 dark:bg-black/40 rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">📚 References & Further Reading</h2>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://assets.publishing.service.gov.uk/media/5422f2b3e5274a1317000b03/Lockerbie.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  📄 AAIB Final Report (PDF)
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Comprehensive investigation findings and technical analysis</p>
              </li>
              <li>
                <a 
                  href="https://www.fbi.gov/history/famous-cases/pan-am-flight-103-bombing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  🏛️ FBI Case Summary
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Federal Bureau of Investigation's role and findings</p>
              </li>
              <li>
                <a 
                  href="https://en.wikipedia.org/wiki/Pan_Am_Flight_103" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  🌐 Wikipedia: Pan Am Flight 103
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Detailed historical and legal information</p>
              </li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-red-900 to-purple-900 text-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Never Forgotten</h2>
            <p className="text-gray-200 text-center leading-relaxed mb-6">
              The Lockerbie bombing was an act of terrorism that shocked the world and changed aviation security forever. The 270 lives lost, including students heading home for Christmas, are remembered not only for their tragic deaths but for the improvements in aviation security that followed. Their legacy lives on in safer skies and a more vigilant world.
            </p>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-red-300">270 Lives Lost</div>
              <div className="text-sm text-gray-300">December 21, 1988 • Lockerbie, Scotland</div>
              <div className="text-xs text-gray-400 italic mt-4">"They shall not be forgotten"</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Pan Am Flight 103 | Air Crash Museum",
  description: "Learn about the Lockerbie bombing of Pan Am Flight 103 in 1988. Explore the investigation, legal proceedings, and lasting impact on aviation security worldwide.",
  keywords: [
    "Pan Am Flight 103",
    "Lockerbie bombing",
    "terrorism",
    "aviation security",
    "Boeing 747",
    "Libya",
    "Semtex",
    "investigation",
    "air crash museum",
    "flight safety"
  ]
}; 
