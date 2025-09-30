"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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

const airlineMap: Record<string, string> = {
  af447: "Air France",
  jal123: "Japan Airlines",
  mh370: "Malaysia Airlines",
  tk981: "Turkish Airlines",
  twa800: "TWA",
  panam103: "Pan Am",
  ua232: "United Airlines",
  sq006: "Singapore Airlines",
  su1492: "Aeroflot",
  ba5390: "British Airways",
  cz3456: "China Southern",
  swiss111: "Swissair",
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");
  const [airline, setAirline] = useState("");
  const [category, setCategory] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "timeline">("grid");

  const years = Array.from(new Set(airCrashes.map(c => c.year))).sort((a, b) => b - a);
  const airlines = Array.from(new Set(Object.values(airlineMap)));
  const categories = Array.from(new Set(airCrashes.map(c => c.category)));

  const filtered = airCrashes.filter((crash) => {
    const searchTerm = search.toLowerCase();
    const matchSearch =
      crash.name.toLowerCase().includes(searchTerm) ||
      crash.shortName.toLowerCase().includes(searchTerm) ||
      crash.aircraft.toLowerCase().includes(searchTerm) ||
      crash.desc.toLowerCase().includes(searchTerm) ||
      crash.location.toLowerCase().includes(searchTerm);
    const matchYear = year ? String(crash.year) === year : true;
    const matchAirline = airline ? airlineMap[crash.id] === airline : true;
    const matchCategory = category ? crash.category === category : true;
    return matchSearch && matchYear && matchAirline && matchCategory;
  });

  const totalFatalities = airCrashes.reduce((sum, crash) => sum + crash.fatalities, 0);
  const yearsSpanned = Math.max(...airCrashes.map(c => c.year)) - Math.min(...airCrashes.map(c => c.year));

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-[var(--foreground)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-6xl font-extrabold mb-6 tracking-tight" style={{color: '#ffffff'}}>
            Air Crash Museum
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed text-gray-100">
            Preserving the history and lessons of aviation accidents to ensure safer skies for tomorrow
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 min-w-[120px]">
              <div className="text-3xl font-bold">{airCrashes.length}</div>
              <div className="text-sm text-blue-100">Historic Cases</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 min-w-[120px]">
              <div className="text-3xl font-bold">{totalFatalities.toLocaleString()}</div>
              <div className="text-sm text-blue-100">Lives Remembered</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 min-w-[120px]">
              <div className="text-3xl font-bold">{yearsSpanned}</div>
              <div className="text-sm text-blue-100">Years of History</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="bg-white/80 dark:bg-black/40 backdrop-blur rounded-2xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold mb-12 text-center text-[var(--foreground)]">Explore Aviation History</h2>
            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mb-6 mt-4">
              <input
                type="text"
                placeholder="Search by flight code, aircraft type, name, description, or location..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 w-full lg:w-80 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent bg-white/90 dark:bg-gray-800/90 shadow-sm text-[var(--foreground)] placeholder-gray-500 dark:placeholder-gray-400"
              />
              <select
                value={year}
                onChange={e => setYear(e.target.value)}
                className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white/90 dark:bg-gray-800/90 shadow-sm text-[var(--foreground)]"
              >
                <option value="">All Years</option>
                {years.map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
              <select
                value={airline}
                onChange={e => setAirline(e.target.value)}
                className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white/90 dark:bg-gray-800/90 shadow-sm text-[var(--foreground)]"
              >
                <option value="">All Airlines</option>
                {airlines.map(a => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
              <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white/90 dark:bg-gray-800/90 shadow-sm text-[var(--foreground)]"
              >
                <option value="">All Categories</option>
                {categories.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-6 py-2 rounded-lg transition-all ${viewMode === "grid" ? "bg-[var(--primary)] text-white" : "bg-gray-200 dark:bg-gray-700 text-[var(--foreground)] hover:bg-gray-300 dark:hover:bg-gray-600"}`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode("timeline")}
                className={`px-6 py-2 rounded-lg transition-all ${viewMode === "timeline" ? "bg-[var(--primary)] text-white" : "bg-gray-200 dark:bg-gray-700 text-[var(--foreground)] hover:bg-gray-300 dark:hover:bg-gray-600"}`}
              >
                Timeline View
              </button>
            </div>
          </div>
        </section>

        {/* Quick Access Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-700/20 dark:to-purple-700/20 rounded-2xl shadow-lg p-8 border border-blue-100 dark:border-blue-600">
            <h2 className="text-2xl font-bold mb-12 text-center text-[var(--foreground)]">Quick Access</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <Link 
                href="/statistics"
                className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-300 to-purple-400 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl">📊</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[var(--foreground)] group-hover:text-blue-400 dark:group-hover:text-blue-200 transition-colors min-h-[2.5rem] flex items-center">
                      Data Statistics
                    </h3>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <p className="text-sm text-[var(--secondary)] dark:text-gray-300 mb-4">Visualize aviation safety data through interactive charts and analysis</p>
                  <div className="flex items-center gap-2 text-blue-400 dark:text-blue-200 text-sm font-medium">
                    <span>View Statistics</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link 
                href="/safety"
                className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-300 to-teal-400 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl">🛡️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[var(--foreground)] group-hover:text-green-400 dark:group-hover:text-green-200 transition-colors min-h-[2.5rem] flex items-center">
                      Safety Improvements
                    </h3>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <p className="text-sm text-[var(--secondary)] dark:text-gray-300 mb-4">Learn how tragedies led to major aviation safety advances</p>
                  <div className="flex items-center gap-2 text-green-400 dark:text-green-200 text-sm font-medium">
                    <span>View Improvements</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link 
                href="/globe"
                className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-300 to-red-400 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl">🌍</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[var(--foreground)] group-hover:text-orange-400 dark:group-hover:text-orange-200 transition-colors min-h-[2.5rem] flex items-center">
                      Global Routes
                    </h3>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <p className="text-sm text-[var(--secondary)] dark:text-gray-300 mb-4">Explore flight paths on an interactive 3D globe model</p>
                  <div className="flex items-center gap-2 text-orange-400 dark:text-orange-200 text-sm font-medium">
                    <span>View Globe</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>

            {/* Quick statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{airCrashes.length}</div>
                <div className="text-sm text-[var(--secondary)] dark:text-gray-300">Total Cases</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{totalFatalities.toLocaleString()}</div>
                <div className="text-sm text-[var(--secondary)] dark:text-gray-300">Total Fatalities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{yearsSpanned}</div>
                <div className="text-sm text-[var(--secondary)] dark:text-gray-300">Years Span</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{categories.length}</div>
                <div className="text-sm text-[var(--secondary)] dark:text-gray-300">Accident Types</div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <main>
          {filtered.length === 0 && (
            <div className="text-center text-[var(--foreground)] text-lg py-20">
              <div className="text-6xl mb-4">✈️</div>
              <div>No air crashes found matching your criteria.</div>
            </div>
          )}

          {viewMode === "grid" ? (
            /* Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filtered.map((crash) => (
                <Link href={`/${crash.id}`} key={crash.id} className="block group">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="relative w-full h-48">
                      <Image
                        src={crash.img}
                        alt={`Image of ${crash.name}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="group-hover:scale-105 transition-transform duration-300"
                        unoptimized
                      />
                      <div className="absolute top-2 left-2 bg-black/60 text-white text-sm font-bold px-3 py-1 rounded-md">{crash.year}</div>
                      <div className="absolute top-2 right-2 bg-red-600/90 text-white text-xs font-semibold px-2 py-1 rounded-md">{crash.fatalities} casualties</div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{crash.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                        {crash.desc}
                      </p>
                      <div className="mt-auto flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                        <span className="inline-block bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 font-semibold">{crash.category}</span>
                        <span className="font-semibold">{crash.aircraft}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* Timeline View */
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--primary)] to-gray-300"></div>
              {filtered.sort((a, b) => a.year - b.year).map((crash, index) => (
                <div key={crash.id} className="relative flex items-center mb-12">
                  <div className="absolute left-6 w-5 h-5 bg-[var(--primary)] rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="ml-20 bg-white/90 dark:bg-black/50 rounded-2xl shadow-lg p-6 border border-gray-200 flex-1 hover:shadow-xl transition-shadow">
                    <Link href={`/${crash.id}`} className="block">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-32 h-20 relative rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                          <Image
                            src={crash.img}
                            alt={crash.name}
                            fill
                            style={{ objectFit: "cover" }}
                            unoptimized
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-lg font-bold text-[var(--primary)]">{crash.year}</span>
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                              {crash.fatalities} casualties
                            </span>
                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                              {crash.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-[var(--foreground)] dark:text-white">
                            {crash.name}
                          </h3>
                          <p className="text-[var(--secondary)] dark:text-gray-300 text-sm">
                            {crash.desc}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>

        {/* Memorial Section */}
        <section className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-2xl shadow-2xl p-12">
            <h2 className="text-3xl font-bold mb-6" style={{color: '#ffffff'}}>In Memory</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-white mt-4">
              "Every accident teaches us something new about flying safely. We honor those who lost their lives by learning from their sacrifice and making aviation safer for future generations."
            </p>
            <div className="text-4xl font-bold text-blue-200">
              {totalFatalities.toLocaleString()} lives remembered
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
