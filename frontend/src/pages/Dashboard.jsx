import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { cars } from '../data/cars';
import { Link } from 'react-router-dom';
import { Heart, Fuel, Settings2, Users, ArrowUpDown } from 'lucide-react';

const SidebarItem = ({ title, children }) => (
  <div className="mb-10">
    <h3 className="text-gray-300 text-[10px] uppercase font-bold tracking-widest mb-6">{title}</h3>
    <div className="flex flex-col gap-4">
      {children}
    </div>
  </div>
);

const Checkbox = ({ label, count, checked, onChange }) => (
  <label className="flex items-center gap-3 cursor-pointer group">
    <input 
      type="checkbox" 
      className="w-5 h-5 rounded border-gray-200 text-blue-600 focus:ring-blue-500 transition-all cursor-pointer"
      checked={checked}
      onChange={onChange}
    />
    <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">{label}</span>
    {count !== undefined && <span className="text-sm font-semibold text-gray-400 ml-auto">({count})</span>}
  </label>
);

const LocationPanel = ({ title, city, date, time }) => (
  <div className="bg-white p-6 rounded-[10px] shadow-sm flex-1">
    <div className="flex items-center gap-2 mb-4">
      <div className="w-4 h-4 rounded-full border-4 border-blue-200 bg-blue-600"></div>
      <h4 className="font-bold text-gray-900 text-base">{title}</h4>
    </div>
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <label className="block text-gray-900 font-bold text-sm mb-2">Locations</label>
        <select className="w-full text-xs text-gray-400 font-medium bg-transparent outline-none cursor-pointer">
          <option>{city}</option>
        </select>
      </div>
      <div className="w-px bg-gray-100 hidden md:block"></div>
      <div className="flex-1">
        <label className="block text-gray-900 font-bold text-sm mb-2">Date</label>
        <select className="w-full text-xs text-gray-400 font-medium bg-transparent outline-none cursor-pointer">
          <option>{date}</option>
        </select>
      </div>
      <div className="w-px bg-gray-100 hidden md:block"></div>
      <div className="flex-1">
        <label className="block text-gray-900 font-bold text-sm mb-2">Time</label>
        <select className="w-full text-xs text-gray-400 font-medium bg-transparent outline-none cursor-pointer">
          <option>{time}</option>
        </select>
      </div>
    </div>
  </div>
);

const CarCard = ({ car }) => {
  const [isFavorite, setIsFavorite] = useState(car.favorite);

  return (
    <div className="bg-white rounded-[10px] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div className="flex justify-between items-start mb-4">
        <div>
          <Link to={`/car/${car.id}`} className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            {car.name}
          </Link>
          <p className="text-sm font-bold text-gray-400 mt-1">{car.type}</p>
        </div>
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className={`${isFavorite ? 'text-red-500' : 'text-gray-300'} hover:scale-110 transition-transform`}
        >
          <Heart size={24} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>

      <Link to={`/car/${car.id}`} className="my-10 relative h-32 flex items-center justify-center cursor-pointer block">
        <img src={car.image} alt={car.name} className="max-w-full max-h-full object-contain" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/80 to-transparent"></div>
      </Link>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-1.5 text-gray-400">
          <Fuel size={20} className="fill-current" />
          <span className="text-sm font-medium">{car.fuel}</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-400">
          <Settings2 size={20} className="fill-current" />
          <span className="text-sm font-medium">{car.transmission}</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-400">
          <Users size={20} className="fill-current" />
          <span className="text-sm font-medium">{car.capacity}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-xl font-bold text-gray-900">${car.price.toFixed(2)}/</span>
          <span className="text-sm text-gray-400 font-bold ml-1">day</span>
        </div>
        <Link to={`/car/${car.id}`} className="bg-blue-600 text-white px-5 py-2.5 rounded-[4px] font-semibold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 active:scale-95 transition-all inline-block text-center">
          Rent Now
        </Link>
      </div>
    </div>
  );
};

const Dashboard = () => {
    const [priceRange, setPriceRange] = useState(100);

  return (
    <div className="min-h-screen bg-[#F6F7F9]">
      <Navbar />
      
      <div className="max-w-[1440px] mx-auto flex">
        {/* SIDEBAR FILTERS */}
        <aside className="w-[360px] bg-white hidden lg:block p-8 border-r border-gray-50 min-h-screen">
          <SidebarItem title="T Y P E">
            <Checkbox label="Sport" count={10} checked={true} />
            <Checkbox label="SUV" count={12} checked={true} />
            <Checkbox label="MPV" count={16} checked={false} />
            <Checkbox label="Sedan" count={20} checked={false} />
            <Checkbox label="Coupe" count={14} checked={false} />
            <Checkbox label="Hatchback" count={14} checked={false} />
          </SidebarItem>

          <SidebarItem title="C A P A C I T Y">
            <Checkbox label="2 Person" count={10} checked={true} />
            <Checkbox label="4 Person" count={14} checked={false} />
            <Checkbox label="6 Person" count={12} checked={false} />
            <Checkbox label="8 or More" count={16} checked={false} />
          </SidebarItem>

          <SidebarItem title="P R I C E">
            <div className="space-y-4">
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={priceRange} 
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <p className="text-gray-700 font-bold text-lg">Max. ${priceRange}.00</p>
            </div>
          </SidebarItem>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-8 lg:p-10">
          {/* Pick-Up / Drop-Off section */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-11 mb-10 relative">
            <LocationPanel 
              title="Pick - Up" 
              city="Select your city" 
              date="Select your date" 
              time="Select your time" 
            />
            
            {/* Swap Button */}
            <button className="bg-blue-600 text-white p-4 rounded-[10px] shadow-xl shadow-blue-500/30 hover:scale-110 active:scale-95 transition-all z-10 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
              <ArrowUpDown size={24} />
            </button>

            <LocationPanel 
              title="Drop - Off" 
              city="Select your city" 
              date="Select your date" 
              time="Select your time" 
            />
          </div>

          {/* Car Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          {/* Load More Section */}
          <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-6 pb-12 relative">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-[4px] font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95">
              Show more car
            </button>
            <span className="md:absolute md:right-0 text-gray-400 font-bold text-sm">120 Car</span>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
