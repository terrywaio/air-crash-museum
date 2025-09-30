"use client";

import Link from "next/link";
import { useState } from "react";

const airCrashes = [
  {
    id: "af447",
    name: "Air France Flight 447",
    year: 2009,
    fatalities: 228,
    location: "Atlantic Ocean",
    category: "Weather/Human Error",
    aircraft: "Airbus A330",
    airline: "Air France"
  },
  {
    id: "jal123",
    name: "Japan Airlines Flight 123",
    year: 1985,
    fatalities: 520,
    location: "Mount Takamagahara, Japan",
    category: "Structural Failure",
    aircraft: "Boeing 747SR",
    airline: "Japan Airlines"
  },
  {
    id: "mh370",
    name: "Malaysia Airlines Flight 370",
    year: 2014,
    fatalities: 239,
    location: "Indian Ocean",
    category: "Unknown/Mystery",
    aircraft: "Boeing 777",
    airline: "Malaysia Airlines"
  },
  {
    id: "tk981",
    name: "Turkish Airlines Flight 981",
    year: 1974,
    fatalities: 346,
    location: "Ermenonville Forest, France",
    category: "Design Flaw",
    aircraft: "McDonnell Douglas DC-10",
    airline: "Turkish Airlines"
  },
  {
    id: "twa800",
    name: "TWA Flight 800",
    year: 1996,
    fatalities: 230,
    location: "Long Island, New York",
    category: "Fuel System",
    aircraft: "Boeing 747",
    airline: "TWA"
  },
  {
    id: "panam103",
    name: "Pan Am Flight 103",
    year: 1988,
    fatalities: 270,
    location: "Lockerbie, Scotland",
    category: "Terrorism",
    aircraft: "Boeing 747",
    airline: "Pan Am"
  },
  {
    id: "ua232",
    name: "United Airlines Flight 232",
    year: 1989,
    fatalities: 111,
    location: "Sioux City, Iowa",
    category: "Mechanical Failure",
    aircraft: "McDonnell Douglas DC-10",
    airline: "United Airlines"
  },
  {
    id: "sq006",
    name: "Singapore Airlines Flight 006",
    year: 2000,
    fatalities: 83,
    location: "Taipei, Taiwan",
    category: "Human Error",
    aircraft: "Boeing 747",
    airline: "Singapore Airlines"
  },
  {
    id: "su1492",
    name: "Aeroflot Flight 1492",
    year: 2019,
    fatalities: 41,
    location: "Moscow, Russia",
    category: "Emergency Landing",
    aircraft: "Sukhoi Superjet 100",
    airline: "Aeroflot"
  },
  {
    id: "ba5390",
    name: "British Airways Flight 5390",
    year: 1990,
    fatalities: 0,
    location: "Over England",
    category: "Structural Failure",
    aircraft: "BAC One-Eleven",
    airline: "British Airways"
  },
  {
    id: "cz3456",
    name: "China Southern Airlines Flight 3456",
    year: 1997,
    fatalities: 35,
    location: "Shenzhen, China",
    category: "Weather/Human Error",
    aircraft: "Boeing 737",
    airline: "China Southern"
  },
  {
    id: "swiss111",
    name: "Swissair Flight 111",
    year: 1998,
    fatalities: 229,
    location: "Nova Scotia, Canada",
    category: "Electrical Fire",
    aircraft: "McDonnell Douglas MD-11",
    airline: "Swissair"
  },
];

export default function StatisticsPage() {
  const [activeChart, setActiveChart] = useState<"fatalities" | "categories" | "timeline" | "aircraft">("fatalities");

  // Calculate statistics
  const totalFatalities = airCrashes.reduce((sum, crash) => sum + crash.fatalities, 0);
  const averageFatalities = Math.round(totalFatalities / airCrashes.length);
  const deadliestCrash = airCrashes.reduce((max, crash) => crash.fatalities > max.fatalities ? crash : max);
  const yearsSpanned = Math.max(...airCrashes.map(c => c.year)) - Math.min(...airCrashes.map(c => c.year));

  // Group by category
  const categoryStats = airCrashes.reduce((acc, crash) => {
    acc[crash.category] = (acc[crash.category] || 0) + crash.fatalities;
    return acc;
  }, {} as Record<string, number>);

  // Group by decade
  const decadeStats = airCrashes.reduce((acc, crash) => {
    const decade = Math.floor(crash.year / 10) * 10;
    const decadeLabel = `${decade}s`;
    acc[decadeLabel] = (acc[decadeLabel] || 0) + crash.fatalities;
    return acc;
  }, {} as Record<string, number>);

  // Group by manufacturer
  const manufacturerStats = airCrashes.reduce((acc, crash) => {
    const manufacturer = crash.aircraft.split(' ')[0];
    acc[manufacturer] = (acc[manufacturer] || 0) + crash.fatalities;
    return acc;
  }, {} as Record<string, number>);

  const maxCategoryValue = Math.max(...Object.values(categoryStats));
  const maxDecadeValue = Math.max(...Object.values(decadeStats));
  const maxManufacturerValue = Math.max(...Object.values(manufacturerStats));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Back to home button */}
        <Link 
          href="/" 
          className="group inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:bg-white dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 mb-8"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-medium">Back to Home</span>
        </Link>

        {/* Page title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Aviation Data Statistics
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Analyze aviation safety history through data visualization, learning from tragedies to build safer skies
          </p>
        </div>

        {/* Overall statistics overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-300 to-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">📊</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white min-h-[2.5rem] flex items-center">Total Cases</h3>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <p className="text-3xl font-extrabold text-blue-500 text-center mb-2">{airCrashes.length}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Major air disaster events</p>
            </div>
          </div>

          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-300 to-red-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">💔</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white min-h-[2.5rem] flex items-center">Total Fatalities</h3>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <p className="text-3xl font-extrabold text-red-500 text-center mb-2">{totalFatalities.toLocaleString()}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Lives forever remembered</p>
            </div>
          </div>

          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-300 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">⚡</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white min-h-[2.5rem] flex items-center">Deadliest Accident</h3>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <p className="text-3xl font-extrabold text-purple-500 text-center mb-2">{deadliestCrash.fatalities}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">JAL123 ({deadliestCrash.year})</p>
            </div>
          </div>

          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-300 to-green-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">📈</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white min-h-[2.5rem] flex items-center">Time Span</h3>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <p className="text-3xl font-extrabold text-green-500 text-center mb-2">{yearsSpanned}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Years of aviation safety history</p>
            </div>
          </div>
        </div>

        {/* Chart selector */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
            <span className="mr-3 text-3xl">📊</span>
            Data Visualization Analysis
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8 mt-4">
            {[
              { key: "fatalities", label: "Fatality Rankings", icon: "💔" },
              { key: "categories", label: "Accident Types", icon: "📊" },
              { key: "timeline", label: "Decade Distribution", icon: "📅" },
              { key: "aircraft", label: "Aircraft Manufacturers", icon: "✈️" }
            ].map((chart) => (
              <button
                key={chart.key}
                onClick={() => setActiveChart(chart.key as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeChart === chart.key
                    ? "bg-blue-400 text-white shadow-lg scale-105"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                <span className="text-lg">{chart.icon}</span>
                <span className="font-medium">{chart.label}</span>
              </button>
            ))}
          </div>

          {/* Fatality rankings chart */}
          {activeChart === "fatalities" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                <span className="mr-3 text-3xl">💔</span>
                Air Disaster Fatality Comparison
              </h2>
              {airCrashes
                .sort((a, b) => b.fatalities - a.fatalities)
                .map((crash, index) => (
                  <div key={crash.id} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-900 dark:text-white">{crash.name}</span>
                        <span className="font-bold text-lg text-red-500">{crash.fatalities}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-red-300 to-red-500 h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${(crash.fatalities / deadliestCrash.fatalities) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {crash.year} • {crash.location}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* Accident types chart */}
          {activeChart === "categories" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                <span className="mr-3 text-3xl">🏷️</span>
                Statistics by Accident Type
              </h2>
              {Object.entries(categoryStats)
                .sort(([,a], [,b]) => b - a)
                .map(([category, fatalities]) => (
                  <div key={category} className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-900 dark:text-white">{category}</span>
                        <span className="font-bold text-lg text-blue-500">{fatalities}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-blue-300 to-purple-400 h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${(fatalities / maxCategoryValue) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {((fatalities / totalFatalities) * 100).toFixed(1)}% of total fatalities
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* Decade distribution chart */}
          {activeChart === "timeline" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                <span className="mr-3 text-3xl">📅</span>
                Distribution by Decade
              </h2>
              {Object.entries(decadeStats)
                .sort(([,a], [,b]) => b - a)
                .map(([decade, fatalities]) => (
                  <div key={decade} className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-900 dark:text-white">{decade}</span>
                        <span className="font-bold text-lg text-green-500">{fatalities}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-green-300 to-teal-400 h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${(fatalities / maxDecadeValue) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Total fatalities in this decade
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* Aircraft manufacturers chart */}
          {activeChart === "aircraft" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                <span className="mr-3 text-3xl">✈️</span>
                Statistics by Aircraft Manufacturer
              </h2>
              {Object.entries(manufacturerStats)
                .sort(([,a], [,b]) => b - a)
                .map(([manufacturer, fatalities]) => (
                  <div key={manufacturer} className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-900 dark:text-white">{manufacturer}</span>
                        <span className="font-bold text-lg text-orange-500">{fatalities}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-orange-300 to-red-400 h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${(fatalities / maxManufacturerValue) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Total fatalities involving this manufacturer's aircraft
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Safety trend analysis */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
            <span className="mr-3 text-3xl">📈</span>
            Aviation Safety Trend Analysis
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-4">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Key Improvement Areas</h3>
              <ul className="space-y-3 mt-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Aircraft Design:</strong>
                    <span className="text-gray-600 dark:text-gray-300"> Structural strength, redundant systems, material improvements</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Maintenance Standards:</strong>
                    <span className="text-gray-600 dark:text-gray-300"> Inspection procedures, repair quality, documentation</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Pilot Training:</strong>
                    <span className="text-gray-600 dark:text-gray-300"> Emergency procedures, human factors, teamwork</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Safety Systems:</strong>
                    <span className="text-gray-600 dark:text-gray-300"> Monitoring technology, warning systems, data analysis</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Key Milestones</h3>
              <div className="space-y-4 mt-2">
                <div className="border-l-4 border-blue-400 pl-4">
                  <div className="font-semibold text-gray-900 dark:text-white">1970s-1980s</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Major improvements in structural design and maintenance standards</div>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <div className="font-semibold text-gray-900 dark:text-white">1990s-2000s</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Development of CRM training and human factors research</div>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <div className="font-semibold text-gray-900 dark:text-white">2010s-Present</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Application of real-time monitoring and data analysis technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Memorial section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-2xl shadow-2xl p-12 text-center">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
            <span className="mr-3 text-3xl">🕊️</span>
            Beyond the Numbers
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200 mt-4">
            Every number represents precious lives, every accident drives aviation safety progress. We analyze data from history to ensure tragedies don't repeat, making the skies safer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-300">{airCrashes.length}</div>
              <div className="text-sm text-white">Historic Cases</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-300">{totalFatalities.toLocaleString()}</div>
              <div className="text-sm text-white">Forever Remembered</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-300">∞</div>
              <div className="text-sm text-white">Safety Improvements</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 