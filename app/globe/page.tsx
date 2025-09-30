"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// 动态导入Globe组件，避免SSR问题
const Globe = dynamic(() => import('react-globe.gl'), { 
  ssr: false,
  loading: () => (
    <div className="h-[700px] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400">Loading 3D Globe...</p>
      </div>
    </div>
  )
});

// 航班数据包含地理坐标
const flightData = [
  {
    id: "af447",
    name: "Air France 447",
    departure: { city: "Rio de Janeiro", country: "Brazil", lat: -22.8064, lng: -43.2096 },
    destination: { city: "Paris", country: "France", lat: 48.8566, lng: 2.3522 },
    year: 2009,
    fatalities: 228,
    category: "Weather/Human Error"
  },
  {
    id: "jal123",
    name: "Japan Airlines 123",
    departure: { city: "Tokyo", country: "Japan", lat: 35.6762, lng: 139.6503 },
    destination: { city: "Osaka", country: "Japan", lat: 34.6937, lng: 135.5023 },
    year: 1985,
    fatalities: 520,
    category: "Structural Failure"
  },
  {
    id: "mh370",
    name: "Malaysia Airlines 370",
    departure: { city: "Kuala Lumpur", country: "Malaysia", lat: 3.1390, lng: 101.6869 },
    destination: { city: "Beijing", country: "China", lat: 39.9042, lng: 116.4074 },
    year: 2014,
    fatalities: 239,
    category: "Unknown/Mystery"
  },
  {
    id: "tk981",
    name: "Turkish Airlines 981",
    departure: { city: "Paris", country: "France", lat: 48.8566, lng: 2.3522 },
    destination: { city: "London", country: "United Kingdom", lat: 51.5074, lng: -0.1278 },
    year: 1974,
    fatalities: 346,
    category: "Design Flaw"
  },
  {
    id: "twa800",
    name: "TWA Flight 800",
    departure: { city: "New York", country: "United States", lat: 40.7128, lng: -74.0060 },
    destination: { city: "Paris", country: "France", lat: 48.8566, lng: 2.3522 },
    year: 1996,
    fatalities: 230,
    category: "Fuel System"
  },
  {
    id: "panam103",
    name: "Pan Am Flight 103",
    departure: { city: "London", country: "United Kingdom", lat: 51.5074, lng: -0.1278 },
    destination: { city: "New York", country: "United States", lat: 40.7128, lng: -74.0060 },
    year: 1988,
    fatalities: 270,
    category: "Terrorism"
  },
  {
    id: "ua232",
    name: "United Airlines 232",
    departure: { city: "Denver", country: "United States", lat: 39.7392, lng: -104.9903 },
    destination: { city: "Chicago", country: "United States", lat: 41.8781, lng: -87.6298 },
    year: 1989,
    fatalities: 111,
    category: "Mechanical Failure"
  },
  {
    id: "sq006",
    name: "Singapore Airlines 006",
    departure: { city: "Taipei", country: "Taiwan", lat: 25.0330, lng: 121.5654 },
    destination: { city: "Los Angeles", country: "United States", lat: 34.0522, lng: -118.2437 },
    year: 2000,
    fatalities: 83,
    category: "Human Error"
  },
  {
    id: "su1492",
    name: "Aeroflot Flight 1492",
    departure: { city: "Moscow", country: "Russia", lat: 55.7558, lng: 37.6176 },
    destination: { city: "Murmansk", country: "Russia", lat: 68.9585, lng: 33.0827 },
    year: 2019,
    fatalities: 41,
    category: "Emergency Landing"
  },
  {
    id: "ba5390",
    name: "British Airways 5390",
    departure: { city: "Birmingham", country: "United Kingdom", lat: 52.4862, lng: -1.8904 },
    destination: { city: "Málaga", country: "Spain", lat: 36.7213, lng: -4.4214 },
    year: 1990,
    fatalities: 0,
    category: "Structural Failure"
  },
  {
    id: "cz3456",
    name: "China Southern 3456",
    departure: { city: "Chongqing", country: "China", lat: 29.5630, lng: 106.5516 },
    destination: { city: "Shenzhen", country: "China", lat: 22.5431, lng: 114.0579 },
    year: 1997,
    fatalities: 35,
    category: "Weather/Human Error"
  },
  {
    id: "swiss111",
    name: "Swissair Flight 111",
    departure: { city: "New York", country: "United States", lat: 40.7128, lng: -74.0060 },
    destination: { city: "Geneva", country: "Switzerland", lat: 46.2044, lng: 6.1432 },
    year: 1998,
    fatalities: 229,
    category: "Electrical Fire"
  }
];

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    "Design Flaw": "#ff0000",
    "Structural Failure": "#ffa500",
    "Terrorism": "#800080",
    "Mechanical Failure": "#0000ff",
    "Weather/Human Error": "#008000",
    "Fuel System": "#ffff00",
    "Electrical Fire": "#ff1493",
    "Human Error": "#00bfff",
    "Unknown/Mystery": "#808080",
    "Emergency Landing": "#ff4500"
  };
  return colors[category] || "#808080";
}

export default function GlobePage() {
  const globeRef = useRef<any>(null);
  const [selectedFlight, setSelectedFlight] = useState<any>(null);
  const [globeReady, setGlobeReady] = useState(false);
  const [mounted, setMounted] = useState(false);

  // 确保组件只在客户端渲染
  useEffect(() => {
    setMounted(true);
  }, []);

  // 创建航路数据
  const arcsData = flightData.map(flight => ({
    startLat: flight.departure.lat,
    startLng: flight.departure.lng,
    endLat: flight.destination.lat,
    endLng: flight.destination.lng,
    color: getCategoryColor(flight.category),
    name: flight.name,
    year: flight.year,
    fatalities: flight.fatalities,
    id: flight.id
  }));

  // 创建标记点数据
  const pointsData = flightData.reduce((acc, flight) => {
    // 添加出发地
    const existingDeparture = acc.find(p => 
      Math.abs(p.lat - flight.departure.lat) < 0.1 && 
      Math.abs(p.lng - flight.departure.lng) < 0.1
    );
    if (!existingDeparture) {
      acc.push({
        lat: flight.departure.lat,
        lng: flight.departure.lng,
        city: flight.departure.city,
        country: flight.departure.country,
        type: 'departure',
        flights: [flight.name]
      });
    } else {
      existingDeparture.flights.push(flight.name);
    }

    // 添加目的地
    const existingDestination = acc.find(p => 
      Math.abs(p.lat - flight.destination.lat) < 0.1 && 
      Math.abs(p.lng - flight.destination.lng) < 0.1
    );
    if (!existingDestination) {
      acc.push({
        lat: flight.destination.lat,
        lng: flight.destination.lng,
        city: flight.destination.city,
        country: flight.destination.country,
        type: 'destination',
        flights: [flight.name]
      });
    } else {
      existingDestination.flights.push(flight.name);
    }

    return acc;
  }, [] as any[]);

  useEffect(() => {
    if (globeRef.current && globeReady) {
      // 设置初始视角
      globeRef.current.pointOfView({ altitude: 2.5 });
    }
  }, [globeReady]);

  // 如果组件还没有挂载，显示加载状态
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="h-[700px] flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-400">Loading Globe...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
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
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Global Flight Routes
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore the geographical distribution of major aviation accidents on an interactive 3D globe
          </p>
        </div>

        <div className="grid xl:grid-cols-5 lg:grid-cols-4 gap-8">
          {/* Globe - 更大的宽度 */}
          <div className="xl:col-span-4 lg:col-span-3 col-span-1">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="h-[700px] relative flex items-center justify-center">
                <Globe
                  ref={globeRef}
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                  arcsData={arcsData}
                  arcColor={(d: any) => d.color}
                  arcStroke={1.0}
                  pointsData={pointsData}
                  pointColor={() => '#ffff00'}
                  pointAltitude={0.02}
                  pointRadius={0.8}
                  pointLabel={(d: any) => `
                    <div class="bg-gray-900 text-white p-3 rounded-lg shadow-lg max-w-xs">
                      <div class="font-bold text-lg text-blue-300">${d.city}, ${d.country}</div>
                      <div class="text-sm text-gray-300 mt-1">Flights: ${d.flights.length}</div>
                      <div class="text-xs text-gray-400 mt-2">${d.flights.join(', ')}</div>
                    </div>
                  `}
                  arcLabel={(d: any) => `
                    <div class="bg-gray-900 text-white p-3 rounded-lg shadow-lg max-w-xs">
                      <div class="font-bold text-lg text-red-300">${d.name}</div>
                      <div class="text-sm text-gray-300">${d.year}</div>
                      <div class="text-sm text-red-400">${d.fatalities} fatalities</div>
                    </div>
                  `}
                  onArcClick={(arc: any) => {
                    const flight = flightData.find(f => f.id === arc.id);
                    setSelectedFlight(flight);
                  }}
                  onGlobeReady={() => setGlobeReady(true)}
                  width={undefined}
                  height={700}
                />
              </div>
            </div>
          </div>

          {/* Sidebar - 更小的宽度 */}
          <div className="xl:col-span-1 lg:col-span-1 col-span-1 space-y-6">
            {/* Legend */}
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-sm font-bold mb-2 flex items-center text-gray-900 dark:text-white">
                <span className="mr-2 text-base">🗺️</span>
                Flight Route Legend
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Airport Locations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-transparent rounded"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Flight Routes</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Accident Categories</h4>
                <div className="space-y-2 text-sm">
                  {Object.entries({
                    "Design Flaw": "rgb(255, 0, 0)",
                    "Structural Failure": "rgb(255, 165, 0)",
                    "Terrorism": "rgb(128, 0, 128)",
                    "Mechanical Failure": "rgb(0, 0, 255)",
                    "Weather/Human Error": "rgb(0, 128, 0)",
                    "Fuel System": "rgb(255, 255, 0)",
                    "Electrical Fire": "rgb(255, 20, 147)",
                    "Human Error": "rgb(0, 191, 255)",
                    "Unknown/Mystery": "rgb(128, 128, 128)",
                    "Emergency Landing": "rgb(255, 69, 0)"
                  }).map(([category, color]) => (
                    <div key={category} className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: color }}
                      ></div>
                      <span className="text-gray-700 dark:text-gray-300">{category}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Selected Flight Info */}
            {selectedFlight && (
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <h2 className="text-sm font-bold mb-2 flex items-center text-gray-900 dark:text-white">
                  <span className="mr-2 text-base">✈️</span>
                  Flight Details
                </h2>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">{selectedFlight.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{selectedFlight.year}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>From:</strong> {selectedFlight.departure.city}, {selectedFlight.departure.country}
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>To:</strong> {selectedFlight.destination.city}, {selectedFlight.destination.country}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-red-600 dark:text-red-400">
                      <strong>Fatalities:</strong> {selectedFlight.fatalities}
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Category:</strong> {selectedFlight.category}
                    </div>
                  </div>
                  <Link 
                    href={`/${selectedFlight.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    <span>View Details</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}

            {/* Statistics */}
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-sm font-bold mb-2 flex items-center text-gray-900 dark:text-white">
                <span className="mr-2 text-base">📊</span>
                Global Statistics
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Total Flights</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">{flightData.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Total Fatalities</span>
                  <span className="text-sm font-bold text-red-500 dark:text-red-400">{flightData.reduce((sum, f) => sum + f.fatalities, 0).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Countries Affected</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">{new Set([...flightData.map(f => f.departure.country), ...flightData.map(f => f.destination.country)]).size}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Time Span</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">1974-2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 