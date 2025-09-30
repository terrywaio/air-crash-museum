import Image from "next/image";
import Link from "next/link";

export default function TK981Page() {
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

        <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200 mb-6">
          <div className="flex items-center gap-6">
            <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center p-2 border border-gray-200">
              <Image
                src="/images/airlines/turkish-airlines/Turkish_Airlines_logo_2019_compact.svg.png"
                alt="Turkish Airlines Logo"
                width={128}
                height={64}
                className="object-contain w-full h-full"
                unoptimized
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Turkish Airlines</h2>
          </div>
        </section>

        <div className="mb-10">
          <div className="p-4 bg-red-600/80 backdrop-blur-sm rounded-t-xl">
            <h1 className="text-3xl font-bold text-white text-center">Turkish Airlines Flight 981 (1974)</h1>
          </div>
          <Image
            src="/images/tk981/tk981.jpg"
            alt="Turkish Airlines Flight 981"
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
                <li><strong className="text-gray-900 dark:text-white">Flight:</strong> Turkish Airlines 981 (TK981)</li>
                <li><strong className="text-gray-900 dark:text-white">Date:</strong> March 3, 1974</li>
                <li><strong className="text-gray-900 dark:text-white">Aircraft:</strong> McDonnell Douglas DC-10-10</li>
                <li><strong className="text-gray-900 dark:text-white">Registration:</strong> TC-JAV</li>
              </ul>
              <ul className="text-gray-800 dark:text-gray-200 text-base space-y-2">
                <li><strong className="text-gray-900 dark:text-white">Route:</strong> Paris Orly (ORY) → London Heathrow (LHR)</li>
                <li><strong className="text-gray-900 dark:text-white">Occupants:</strong> 346 (335 passengers, 11 crew)</li>
                <li><strong className="text-gray-900 dark:text-white">Fatalities:</strong> 346 (all souls)</li>
                <li><strong className="text-gray-900 dark:text-white">Location:</strong> Ermenonville Forest, France</li>
              </ul>
            </div>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🚪</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                The Cargo Door Disaster
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
              On March 3, 1974, Turkish Airlines Flight 981 took off from Paris Orly Airport bound for London Heathrow with 346 people aboard. The McDonnell Douglas DC-10 was operating what should have been a routine European flight, carrying passengers from multiple nationalities on the busy Paris-London route.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed">
              Just 12 minutes into the flight, while climbing through 11,500 feet above the French countryside, a catastrophic structural failure would make this the deadliest aviation accident in history at the time, exposing a fundamental design flaw that had been a ticking time bomb.
            </p>
          </section>

          <section className="bg-white/90 dark:bg-black/50 rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Design Flaw Exposed
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"></div>
              </h2>
            </div>
            <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-8">
              The DC-10's rear cargo door had a fundamental design defect in its locking mechanism. Despite previous incidents and warnings, including a near-catastrophic failure on American Airlines Flight 96 in 1972, the issue had not been properly addressed through mandatory design changes.
            </p>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-red-900 dark:text-red-300">Critical Failure Sequence</h4>
              <ul className="list-disc list-inside text-red-800 dark:text-red-200 text-sm space-y-1">
                <li>Cargo door latches appeared closed but were not properly engaged</li>
                <li>Door blew out due to cabin pressure differential</li>
                <li>Cabin floor collapsed, severing flight control cables</li>
                <li>Pilots lost control of elevators and rudder</li>
                <li>Aircraft became uncontrollable and crashed</li>
              </ul>
            </div>
          </section>

          <section className="bg-gradient-to-r from-red-700/90 to-red-600/90 backdrop-blur-sm text-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">A Preventable Tragedy</h2>
            <p className="text-gray-200 text-center leading-relaxed mb-6">
              Turkish Airlines Flight 981 was a preventable tragedy that highlighted the critical importance of addressing known design flaws promptly. The accident led to mandatory design changes for the DC-10 and influenced aircraft certification processes worldwide.
            </p>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-red-300">346 Lives Lost</div>
              <div className="text-sm text-gray-300">March 3, 1974 → Ermenonville Forest, France</div>
              <div className="text-xs text-gray-400 italic mt-4">"Safety must never be compromised by design shortcuts"</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Turkish Airlines Flight 981 | Air Crash Museum",
  description: "Learn about Turkish Airlines Flight 981 (TK981), the 1974 cargo door disaster that killed 346 people and exposed critical DC-10 design flaws.",
  keywords: [
    "Turkish Airlines 981",
    "TK981",
    "cargo door failure",
    "DC-10 disaster",
    "Ermenonville Forest",
    "aviation accident",
    "air crash museum",
    "flight safety"
  ]
}; 