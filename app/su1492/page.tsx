import Image from "next/image";
import Link from "next/link";

export default function SU1492Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-red-500 to-white dark:from-blue-800 dark:via-red-700 dark:to-gray-900">
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
                src="/images/airlines/aeroflot/Aeroflot_Logo_en.svg.png"
                alt="Aeroflot Logo"
                width={128}
                height={64}
                className="object-contain w-full h-full"
                unoptimized
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Aeroflot</h2>
          </div>
        </section>

        <div className="mb-10">
          <div className="p-4 bg-red-500/80 backdrop-blur-sm rounded-t-xl">
            <h1 className="text-3xl font-bold text-white text-center">Aeroflot Flight 1492 (2019)</h1>
          </div>
          <Image
            src="/images/su1492/su1492.jpg"
            alt="Aeroflot Flight 1492"
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
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">✈️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Flight Information
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-red-600 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-gray-800 dark:text-gray-200 text-base space-y-2">
                <li><strong className="text-gray-900 dark:text-white">Flight:</strong> Aeroflot 1492 (SU1492)</li>
                <li><strong className="text-gray-900 dark:text-white">Date:</strong> May 5, 2019</li>
                <li><strong className="text-gray-900 dark:text-white">Aircraft:</strong> Sukhoi Superjet 100-95B</li>
                <li><strong className="text-gray-900 dark:text-white">Registration:</strong> RA-89098</li>
              </ul>
              <ul className="text-gray-800 dark:text-gray-200 text-base space-y-2">
                <li><strong className="text-gray-900 dark:text-white">Route:</strong> Moscow Sheremetyevo (SVO) → Murmansk (MMK)</li>
                <li><strong className="text-gray-900 dark:text-white">Occupants:</strong> 78 (73 passengers, 5 crew)</li>
                <li><strong className="text-gray-900 dark:text-white">Fatalities:</strong> 41</li>
                <li><strong className="text-gray-900 dark:text-white">Survivors:</strong> 37</li>
              </ul>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Lightning Emergency
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-red-600 rounded-full mt-2"></div>
              </h2>
            </div>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
              On May 5, 2019, Aeroflot Flight 1492 departed Moscow Sheremetyevo Airport on what should have been a routine domestic flight to Murmansk. The Sukhoi Superjet 100, Russia's modern regional airliner, carried 78 people on board. Captain Denis Evdokimov, 36, and First Officer Maksim Kuznetsov, 26, were experienced pilots familiar with the aircraft type.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
              Just 28 minutes after takeoff, while climbing through thunderstorm activity, the aircraft was struck by lightning. This natural phenomenon, typically harmless to modern aircraft, would trigger a cascade of failures that transformed a routine flight into a nightmare emergency return.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
              What followed became one of the most documented aviation emergencies in recent history, as the crew battled degraded flight controls while attempting an emergency return to Moscow, ultimately resulting in a tragic fire that claimed 41 lives.
            </p>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">⏰</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Timeline of Crisis
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-red-600 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">18:02</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Normal Departure:</strong> SU1492 departs Moscow Sheremetyevo bound for Murmansk
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded">18:30</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Lightning Strike:</strong> Aircraft struck by lightning while climbing through storms at FL100
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">18:31</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>System Failures:</strong> Autopilot, autothrust, and flight mode annunciator systems fail
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">18:32</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Emergency Declared:</strong> Crew declares emergency and requests immediate return to Moscow
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-sm font-medium text-red-600 bg-red-50 px-2 py-1 rounded">18:55</div>
                <div className="text-gray-800 dark:text-gray-200">
                  <strong>Hard Landing:</strong> Aircraft makes hard landing, bounces, and catches fire on runway 24L
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🔧</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                System Failures
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-red-600 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Lightning Strike Effects</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  The lightning strike caused multiple electrical system failures that significantly degraded the aircraft's automation and flight management systems. While the basic flight controls remained functional, the crew lost many automated aids that modern pilots rely on.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-yellow-900 dark:text-yellow-300">Failed Systems</h4>
                  <ul className="list-disc list-inside text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
                    <li>Autopilot and flight director systems inoperative</li>
                    <li>Autothrust system failed</li>
                    <li>Flight mode annunciator (FMA) display degraded</li>
                    <li>Radio communication quality severely impaired</li>
                    <li>Multiple ECAM (Electronic Centralized Aircraft Monitor) warnings</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Manual Flight Challenges</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                  With the automation failures, the crew had to manually fly the Superjet back to Moscow. The loss of flight director and autothrust made precise speed and altitude control much more challenging, especially during the approach phase where accuracy is critical.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🔥</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                The Fatal Landing
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-red-600 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Approach Difficulties</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-3">
                  The emergency return to Sheremetyevo required the crew to manually fly an approach while managing multiple system failures. The aircraft was flying heavier than normal due to unburned fuel, and the crew had to contend with challenging manual flight control without automation assistance.
                </p>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-red-900 dark:text-red-300">Landing Sequence</h4>
                  <ul className="list-disc list-inside text-red-800 dark:text-red-200 text-sm space-y-1">
                    <li>Aircraft approached runway 24L at excessive speed</li>
                    <li>Hard touchdown at approximately 5-6 G's vertical acceleration</li>
                    <li>Aircraft bounced back into air after initial contact</li>
                    <li>Second, even harder touchdown caused structural damage</li>
                    <li>Landing gear collapsed, fuel tanks ruptured</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Post-Impact Fire</h3>
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                  The hard landing caused the main landing gear to collapse and fuel tanks to rupture. Fuel spilled and ignited, creating an intense fire that engulfed the rear of the aircraft. The location of the fire severely hampered evacuation efforts, as it blocked access to rear exits.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🛡️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Lessons Learned
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-red-600 rounded-full mt-2"></div>
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
                The SU1492 accident highlighted critical issues with crew training, aircraft systems design, and emergency evacuation procedures.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Training Improvements</h3>
                  <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                    <li><strong>Manual Flying:</strong> Enhanced manual flight training without automation</li>
                    <li><strong>Emergency Procedures:</strong> Improved emergency landing techniques</li>
                    <li><strong>System Management:</strong> Better electrical failure management training</li>
                    <li><strong>CRM Skills:</strong> Enhanced crew resource management protocols</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Safety Enhancements</h3>
                  <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-2">
                    <li><strong>Evacuation Slides:</strong> Improved fire-resistant materials</li>
                    <li><strong>Fuel Systems:</strong> Better fuel tank protection</li>
                    <li><strong>Electrical Systems:</strong> Enhanced lightning protection</li>
                    <li><strong>Emergency Equipment:</strong> Better cabin fire suppression</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-700/90 to-red-600/90 backdrop-blur-sm text-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Tragedy and Progress</h2>
            <p className="text-gray-200 text-center leading-relaxed mb-6">
              Aeroflot Flight 1492 demonstrated both the vulnerability of modern aircraft systems to electrical failures and the importance of comprehensive emergency training. The accident led to significant improvements in crew training protocols and aircraft fire safety systems.
            </p>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-red-300">41 Lives Lost → 37 Survivors</div>
              <div className="text-sm text-gray-300">May 5, 2019 → Moscow Sheremetyevo, Russia</div>
              <div className="text-xs text-gray-400 italic mt-4">"From darkness, light guides the way forward"</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Aeroflot Flight 1492 | Air Crash Museum", 
  description: "Learn about Aeroflot Flight 1492 (SU1492), the 2019 lightning strike emergency that resulted in a fatal fire at Moscow Sheremetyevo Airport.",
  keywords: [
    "Aeroflot 1492",
    "SU1492", 
    "lightning strike",
    "Sukhoi Superjet",
    "Moscow Sheremetyevo",
    "aircraft fire",
    "aviation accident",
    "air crash museum",
    "flight safety"
  ]
}; 