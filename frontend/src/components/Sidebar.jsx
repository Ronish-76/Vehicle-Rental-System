import React, { useState } from 'react';

const Sidebar = () => {
  const [priceMax, setPriceMax] = useState(100);

  const categories = [
    { name: 'Sport', count: 10, checked: true },
    { name: 'SUV', count: 12, checked: true },
    { name: 'MPV', count: 16, checked: false },
    { name: 'Sedan', count: 20, checked: false },
    { name: 'Coupe', count: 14, checked: false },
    { name: 'Hatchback', count: 10, checked: false },
  ];

  const capacities = [
    { name: '2 Person', count: 10, checked: true },
    { name: '4 Person', count: 14, checked: false },
    { name: '6 Person', count: 12, checked: false },
    { name: '8 or More', count: 16, checked: true },
  ];

  return (
    <aside className="w-72 bg-white border-r border-gray-100 p-8 hidden lg:block sticky top-[89px] h-[calc(100vh-89px)] overflow-y-auto">
      {/* Type Filter */}
      <div className="mb-10">
        <h3 className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-6">Type</h3>
        <div className="space-y-4">
          {categories.map((category) => (
            <label key={category.name} className="flex items-center cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input type="checkbox" className="peer sr-only" defaultChecked={category.checked} />
                <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors"></div>
                <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="ml-3 text-gray-600 font-medium group-hover:text-gray-900 transition-colors text-sm">{category.name}</span>
              <span className="ml-2 text-gray-400 text-sm">({category.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Capacity Filter */}
      <div className="mb-10">
        <h3 className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-6">Capacity</h3>
        <div className="space-y-4">
          {capacities.map((capacity) => (
            <label key={capacity.name} className="flex items-center cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input type="checkbox" className="peer sr-only" defaultChecked={capacity.checked} />
                <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors"></div>
                <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="ml-3 text-gray-600 font-medium group-hover:text-gray-900 transition-colors text-sm">{capacity.name}</span>
              <span className="ml-2 text-gray-400 text-sm">({capacity.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-6">Price</h3>
        <div className="space-y-4">
          <input 
            type="range" 
            min="0" 
            max="200" 
            value={priceMax} 
            onChange={(e) => setPriceMax(parseInt(e.target.value))}
            className="w-full accent-blue-600 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-gray-700 font-semibold text-sm">
            Max. ${priceMax.toFixed(2)}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
