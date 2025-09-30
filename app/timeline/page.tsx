"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";

// Data for air crashes - ideally this would come from a shared data source
const airCrashes = [
  {
    id: "af447",
    name: "Air France Flight 447",
    shortName: "AF447",
    year: 2009,
    fatalities: 228,
    location: "Atlantic Ocean",
    desc: "Rio de Janeiro to Paris, crashed into the Atlantic Ocean due to pilot error and iced pitot tubes.",
    img: "/images/af447/af447.jpg",
    category: "Weather/Human Error",
    aircraft: "Airbus A330"
  },
  {
    id: "jal123",
    name: "Japan Airlines Flight 123",
    shortName: "JAL123",
    year: 1985,
    fatalities: 520,
    location: "Mount Takamagahara, Japan",
    desc: "Tokyo to Osaka, crashed into Mount Takamagahara after explosive decompression.",
    img: "/images/jal123/jal123.jpg",
    category: "Structural Failure",
    aircraft: "Boeing 747SR"
  },
  {
    id: "mh370",
    name: "Malaysia Airlines Flight 370",
    shortName: "MH370",
    year: 2014,
    fatalities: 239,
    location: "Indian Ocean",
    desc: "Kuala Lumpur to Beijing, disappeared over the Indian Ocean - still a mystery.",
    img: "/images/mh370/mh370.jpg",
    category: "Unknown/Mystery",
    aircraft: "Boeing 777"
  },
  {
    id: "tk981",
    name: "Turkish Airlines Flight 981",
    shortName: "TK981",
    year: 1974,
    fatalities: 346,
    location: "Ermenonville Forest, France",
    desc: "Istanbul to London via Paris, crashed due to cargo door failure.",
    img: "/images/tk981/tk981.jpg",
    category: "Design Flaw",
    aircraft: "McDonnell Douglas DC-10"
  },
  {
    id: "twa800",
    name: "TWA Flight 800",
    shortName: "TWA800",
    year: 1996,
    fatalities: 230,
    location: "Long Island, New York",
    desc: "New York to Paris, exploded off Long Island due to fuel tank explosion.",
    img: "/images/twa800/twa800.jpg",
    category: "Fuel System",
    aircraft: "Boeing 747"
  },
  {
    id: "panam103",
    name: "Pan Am Flight 103",
    shortName: "Pan Am 103",
    year: 1988,
    fatalities: 270,
    location: "Lockerbie, Scotland",
    desc: "London to New York, bombed over Lockerbie in a terrorist attack.",
    img: "/images/panam103/panam103.jpg",
    category: "Terrorism",
    aircraft: "Boeing 747"
  },
  {
    id: "ua232",
    name: "United Airlines Flight 232",
    shortName: "UA232",
    year: 1989,
    fatalities: 111,
    location: "Sioux City, Iowa",
    desc: "Denver to Chicago, hydraulic failure led to crash landing.",
    img: "/images/ua232/ua232.jpg",
    category: "Mechanical Failure",
    aircraft: "McDonnell Douglas DC-10"
  },
  {
    id: "sq006",
    name: "Singapore Airlines Flight 006",
    shortName: "SQ006",
    year: 2000,
    fatalities: 83,
    location: "Taipei, Taiwan",
    desc: "Taipei to Los Angeles, crashed during takeoff on wrong runway.",
    img: "/images/sq006/sq006.jpg",
    category: "Human Error",
    aircraft: "Boeing 747"
  },
  {
    id: "su1492",
    name: "Aeroflot Flight 1492",
    shortName: "SU1492",
    year: 2019,
    fatalities: 41,
    location: "Moscow, Russia",
    desc: "Moscow to Murmansk, emergency landing turned fatal with fire.",
    img: "/images/su1492/su1492.jpg",
    category: "Emergency Landing",
    aircraft: "Sukhoi Superjet 100"
  },
  {
    id: "ba5390",
    name: "British Airways Flight 5390",
    shortName: "BA5390",
    year: 1990,
    fatalities: 0,
    location: "Over England",
    desc: "Birmingham to Málaga, cockpit window blew out - miraculous survival.",
    img: "/images/ba5390/ba5390.jpg",
    category: "Structural Failure",
    aircraft: "BAC One-Eleven"
  },
  {
    id: "cz3456",
    name: "China Southern Airlines Flight 3456",
    shortName: "CZ3456",
    year: 1997,
    fatalities: 35,
    location: "Shenzhen, China",
    desc: "Chongqing to Shenzhen, crashed during landing approach.",
    img: "/images/cz3456/cz3456.jpg",
    category: "Weather/Human Error",
    aircraft: "Boeing 737"
  },
  {
    id: "swiss111",
    name: "Swissair Flight 111",
    shortName: "SR111",
    year: 1998,
    fatalities: 229,
    location: "Nova Scotia, Canada",
    desc: "New York to Geneva, crashed into the Atlantic after electrical fire.",
    img: "/images/swiss111/swiss111.jpg",
    category: "Electrical Fire",
    aircraft: "McDonnell Douglas MD-11"
  },
];

const categoryColors: Record<string, string> = {
  "Weather/Human Error": "bg-yellow-400",
  "Structural Failure": "bg-red-400",
  "Unknown/Mystery": "bg-gray-400",
  "Design Flaw": "bg-orange-400",
  "Fuel System": "bg-purple-400",
  "Terrorism": "bg-pink-400",
  "Mechanical Failure": "bg-indigo-400",
  "Human Error": "bg-amber-400", // Slightly different from Weather/Human Error
  "Emergency Landing": "bg-cyan-400",
  "Electrical Fire": "bg-rose-400",
  // Add more categories and colors as needed
};

export default function TimelinePage() {
  const [selectedDecade, setSelectedDecade] = useState<string>("all");

  const decades = useMemo(() => {
    const uniqueDecades = Array.from(
      new Set(airCrashes.map((crash) => Math.floor(crash.year / 10) * 10))
    ).sort((a, b) => b - a);
    return uniqueDecades.map(decade => `${decade}s`);
  }, []);

  const filteredCrashes = useMemo(() => {
    return airCrashes
      .filter((crash) => {
        if (selectedDecade === "all") return true;
        const crashDecade = Math.floor(crash.year / 10) * 10;
        return `${crashDecade}s` === selectedDecade;
      })
      .sort((a, b) => a.year - b.year); // Sort chronologically for timeline
  }, [selectedDecade]);

  const allCategories = useMemo(() => {
    return Array.from(new Set(airCrashes.map(c => c.category))).sort();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Back to home button */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:bg-white dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-blue-400 dark:hover:text-blue-200 mb-8"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-medium">Back to Home</span>
        </Link>

        {/* Page title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Aviation Accidents Timeline
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore significant air crash events in chronological order. Filter by decade to see trends over time.
          </p>
        </div>

        {/* Decade Filter */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
            <span className="mr-3 text-3xl">📅</span>
            Filter by Decade
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <button
              onClick={() => setSelectedDecade("all")}
              className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                selectedDecade === "all"
                  ? "bg-teal-400 text-white shadow-lg scale-105"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              <span className="font-medium">All Decades</span>
            </button>
            {decades.map((decade) => (
              <button
                key={decade}
                onClick={() => setSelectedDecade(decade)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  selectedDecade === decade
                    ? "bg-teal-400 text-white shadow-lg scale-105"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                <span className="font-medium">{decade}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Category Legend */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                <span className="mr-3 text-3xl">🔖</span>
                Category Legend
            </h2>
            <div className="flex flex-wrap gap-3">
                {allCategories.map(category => (
                    <div key={category} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className={`w-4 h-4 rounded-sm ${categoryColors[category] || 'bg-gray-300'}`}></span>
                        <span>{category}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          {filteredCrashes.length > 0 && (
            <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 via-cyan-400 to-gray-300 dark:from-teal-600 dark:via-cyan-600 dark:to-gray-700 rounded-full"></div>
          )}

          {filteredCrashes.length === 0 && (
            <div className="text-center text-gray-600 dark:text-gray-300 py-20">
              <div className="text-6xl mb-4">✈️</div>
              <p className="text-xl">No air crashes found for the selected decade.</p>
              <p>Try selecting a different decade or "All Decades".</p>
            </div>
          )}

          <div className="space-y-12">
            {filteredCrashes.map((crash, index) => (
              <div key={crash.id} className="relative pl-10 sm:pl-14 md:pl-20">
                {/* Dot on the timeline */}
                <div className={`absolute left-0 sm:left-2 md:left-4 top-1 w-8 h-8 rounded-full border-4 border-white dark:border-gray-800 shadow-lg flex items-center justify-center ${categoryColors[crash.category] || 'bg-gray-300'}`}>
                  <span className="text-xs font-bold text-white">
                    {crash.year}
                  </span>
                </div>

                {/* Timeline Card */}
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <Link href={`/${crash.id}`} className="block group">
                    <div className="md:flex">
                      <div className="md:w-1/3 relative h-48 md:h-auto">
                        <Image
                          src={crash.img}
                          alt={crash.name}
                          fill
                          style={{ objectFit: "cover" }}
                          className="group-hover:scale-105 transition-transform duration-300"
                          unoptimized
                        />
                        <div className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold text-white rounded-md ${categoryColors[crash.category] || 'bg-gray-500'} bg-opacity-80`}>
                          {crash.category}
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-300 transition-colors">
                            {crash.name} ({crash.shortName})
                          </h2>
                          <span className="text-lg font-semibold text-red-500 dark:text-red-400 whitespace-nowrap">
                            {crash.fatalities} Fatalities
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          <strong>Date:</strong> {crash.year} | <strong>Location:</strong> {crash.location}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <strong>Aircraft:</strong> {crash.aircraft}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed line-clamp-3 mb-4">
                          {crash.desc}
                        </p>
                        <div className="flex items-center gap-2 text-teal-500 dark:text-teal-300 text-sm font-medium group-hover:underline">
                          <span>Read More</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion / Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-2xl shadow-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">Explore Further</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Delve deeper into individual accident reports or analyze statistical trends to understand the evolution of aviation safety.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/statistics"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                View Statistics
              </Link>
              <Link
                href="/safety"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Safety Improvements
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 