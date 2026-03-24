import React from 'react';
import Navbar from '../components/Navbar';
import { cars } from '../data/cars';
import { Link } from 'react-router-dom';
import { Heart, Fuel, Settings2, Users } from 'lucide-react';

const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-[10px] p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <Link to={`/car/${car.id}`} className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            {car.name}
          </Link>
          <p className="text-sm font-bold text-gray-400 mt-1">{car.type}</p>
        </div>
        <button className={`${car.favorite ? 'text-red-500' : 'text-gray-300'} hover:scale-110 transition-transform`}>
          <Heart size={24} fill={car.favorite ? 'currentColor' : 'none'} />
        </button>
      </div>

      <Link to={`/car/${car.id}`} className="my-10 relative h-32 flex items-center justify-center block">
        <img src={car.image} alt={car.name} className="max-w-full max-h-full object-contain" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/80 to-transparent"></div>
      </Link>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-gray-400">
          <Fuel size={20} />
          <span className="text-sm font-medium">{car.fuel}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Settings2 size={20} />
          <span className="text-sm font-medium">{car.transmission}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Users size={20} />
          <span className="text-sm font-medium">{car.capacity}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-xl font-bold text-gray-900">${car.price.toFixed(2)}/</span>
          <span className="text-sm text-gray-400 font-bold ml-1">day</span>
        </div>
        <Link to={`/car/${car.id}`} className="bg-blue-600 text-white px-5 py-2.5 rounded-[4px] font-semibold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 inline-block text-center">
          Rent Now
        </Link>
      </div>
    </div>
  );
};

const GuestPage = () => {
  return (
    <div className="min-h-screen bg-[#F6F7F9]">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <main className="p-8">
          {/* Hero Section / Adverts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-500 rounded-[10px] p-6 text-white relative overflow-hidden min-h-[360px] flex flex-col justify-between">
              <div className="relative z-10 max-w-[280px]">
                <h2 className="text-3xl font-semibold mb-4 leading-tight">The Best Platform for Car Rental</h2>
                <p className="text-blue-50/80 mb-6">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-[4px] font-semibold hover:bg-blue-700 transition-all">Rental Car</button>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1544839800-4f51e3da07d3?auto=format&fit=crop&w=800&q=80" 
                alt="Car Ad" 
                className="absolute right-0 bottom-4 w-2/3 object-contain opacity-90 scale-x-[-1]"
              />
            </div>
            <div className="bg-blue-600 rounded-[10px] p-6 text-white relative overflow-hidden min-h-[360px] flex flex-col justify-between hidden md:flex">
              <div className="relative z-10 max-w-[280px]">
                <h2 className="text-3xl font-semibold mb-4 leading-tight">Easy way to rent a car at a low price</h2>
                <p className="text-blue-50/80 mb-6">Providing cheap car rental services and safe and comfortable facilities.</p>
                <button className="bg-blue-400 text-white px-6 py-3 rounded-[4px] font-semibold hover:bg-blue-500 transition-all">Rental Car</button>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1623812705597-2a5494d93026?auto=format&fit=crop&w=800&q=80" 
                alt="Car Ad" 
                className="absolute right-0 bottom-4 w-2/3 object-contain opacity-90"
              />
            </div>
          </div>

          {/* Section Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-gray-400 font-semibold">Recommendation Car</h3>
            <button className="text-blue-600 font-semibold hover:underline">View All</button>
          </div>

          {/* Car Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
          
          <div className="mt-12 flex justify-center pb-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-[4px] font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
              Show more car
            </button>
            <span className="ml-auto text-gray-400 font-bold text-sm self-center">120 Car</span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GuestPage;
