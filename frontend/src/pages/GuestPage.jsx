import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { cars } from '../data/cars';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Fuel, Settings2, Users, ArrowLeftRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

// ─── Car Card ────────────────────────────────────────────────────────────────
const CarCard = ({ car }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isFav, setIsFav] = useState(car.favorite);

  const guard = (e) => {
    if (!user) { e.preventDefault(); navigate('/login'); }
  };

  const toggleFav = (e) => {
    e.preventDefault();
    if (!user) { navigate('/login'); return; }
    setIsFav((f) => !f);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-start mb-1">
        <div>
          <Link onClick={guard} to={`/car/${car.id}`}
            className="text-base font-bold text-gray-900 hover:text-blue-600 transition-colors leading-tight block">
            {car.name}
          </Link>
          <p className="text-xs font-semibold text-gray-400 mt-0.5">{car.type}</p>
        </div>
        <button onClick={toggleFav} className="mt-0.5 transition-transform hover:scale-110">
          <Heart
            size={20}
            className={isFav ? 'text-red-500' : 'text-gray-300'}
            fill={isFav ? 'currentColor' : 'none'}
          />
        </button>
      </div>

      {/* Car image */}
      <Link onClick={guard} to={`/car/${car.id}`}
        className="relative h-32 flex items-center justify-center my-5 block">
        <img src={car.image} alt={car.name} className="max-w-full max-h-full object-contain drop-shadow-md" />
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white/70 to-transparent rounded-b-xl" />
      </Link>

      {/* Specs */}
      <div className="flex items-center justify-between mb-5 text-gray-400">
        <span className="flex items-center gap-1.5 text-xs font-medium">
          <Fuel size={15} /> {car.fuel}
        </span>
        <span className="flex items-center gap-1.5 text-xs font-medium">
          <Settings2 size={15} /> {car.transmission}
        </span>
        <span className="flex items-center gap-1.5 text-xs font-medium">
          <Users size={15} /> {car.capacity}
        </span>
      </div>

      {/* Price + CTA */}
      <div className="flex items-center justify-between mt-auto">
        <div>
          <p className="text-lg font-bold text-gray-900">
            ${car.price.toFixed(2)}/<span className="text-xs font-semibold text-gray-400">day</span>
          </p>
          {car.originalPrice && (
            <p className="text-xs text-gray-400 line-through">${car.originalPrice.toFixed(2)}</p>
          )}
        </div>
        <Link onClick={guard} to={`/car/${car.id}`}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md font-semibold text-sm transition-colors shadow-lg shadow-blue-500/25 inline-block text-center">
          Rent Now
        </Link>
      </div>
    </div>
  );
};

// ─── Pickup / Drop-off Form ───────────────────────────────────────────────────
const BookingForm = ({ onAction }) => (
  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 mb-10">
    {/* Pick-up */}
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-4 h-4 rounded-full border-2 border-blue-600 flex items-center justify-center flex-shrink-0">
          <span className="w-2 h-2 rounded-full bg-blue-600 block" />
        </span>
        <span className="font-bold text-gray-900">Pick – Up</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {['Locations', 'Date', 'Time'].map((label) => (
          <div key={label}>
            <p className="text-xs font-bold text-gray-900 mb-1">{label}</p>
            <select onClick={onAction}
              className="w-full text-xs text-gray-400 bg-transparent border-none outline-none cursor-pointer font-medium">
              <option>Select your {label.toLowerCase()}</option>
            </select>
          </div>
        ))}
      </div>
    </div>

    {/* Swap button */}
    <div className="flex items-center justify-center">
      <button className="w-12 h-12 rounded-xl bg-blue-600 hover:bg-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30 transition-all hover:rotate-180 duration-300">
        <ArrowLeftRight size={20} className="text-white" />
      </button>
    </div>

    {/* Drop-off */}
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-4 h-4 rounded-full border-2 border-blue-600 flex items-center justify-center flex-shrink-0">
          <span className="w-2 h-2 rounded-full bg-blue-600 block" />
        </span>
        <span className="font-bold text-gray-900">Drop – Off</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {['Locations', 'Date', 'Time'].map((label) => (
          <div key={label}>
            <p className="text-xs font-bold text-gray-900 mb-1">{label}</p>
            <select onClick={onAction}
              className="w-full text-xs text-gray-400 bg-transparent border-none outline-none cursor-pointer font-medium">
              <option>Select your {label.toLowerCase()}</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer className="bg-white border-t border-gray-100 mt-8">
    <div className="max-w-7xl mx-auto px-8 py-14">
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 mb-12">
        <div>
          <p className="text-2xl font-extrabold text-blue-600 mb-4">MORENT</p>
          <p className="text-sm text-gray-500 leading-relaxed max-w-[220px]">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>
        {[
          { title: 'About', links: ['How it works', 'Featured', 'Partnership', 'Business Relation'] },
          { title: 'Community', links: ['Events', 'Blog', 'Podcast', 'Invite a friend'] },
          { title: 'Socials', links: ['Discord', 'Instagram', 'Twitter', 'Facebook'] },
        ].map(({ title, links }) => (
          <div key={title}>
            <p className="font-bold text-gray-900 mb-5">{title}</p>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-100 gap-4">
        <p className="text-sm font-semibold text-gray-900">©2022 MORENT. All rights reserved</p>
        <div className="flex gap-8">
          <a href="#" className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors">Privacy & Policy</a>
          <a href="#" className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors">Terms & Condition</a>
        </div>
      </div>
    </div>
  </footer>
);

// ─── Guest Page ───────────────────────────────────────────────────────────────
const GuestPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAction = (e) => {
    if (!user) { e.preventDefault(); navigate('/login'); }
  };

  const popularCars = cars.slice(0, 4);
  const recCars = cars.slice(0, 8);

  return (
    <div className="min-h-screen bg-[#F6F7F9]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 py-8">

        {/* ── Hero Banners ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Banner 1 */}
          <div className="relative bg-blue-500 rounded-2xl p-8 overflow-hidden min-h-[360px] flex flex-col justify-between">
            {/* Decorative circles */}
            <div className="absolute top-[-60px] right-[60px] w-56 h-56 rounded-full bg-white/15 pointer-events-none" />
            <div className="absolute top-5 right-[-20px] w-40 h-40 rounded-full bg-white/10 pointer-events-none" />

            <div className="relative z-10 max-w-[260px]">
              <h2 className="text-3xl font-bold text-white leading-tight mb-3">
                The Best Platform for Car Rental
              </h2>
              <p className="text-blue-100/80 text-sm mb-6 leading-relaxed">
                Ease of doing a car rental safely and reliably. Of course at a low price.
              </p>
              <button onClick={handleAction}
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold text-sm transition-colors">
                Rental Car
              </button>
            </div>

            <img
              src="https://images.unsplash.com/photo-1544839800-4f51e3da07d3?auto=format&fit=crop&w=800&q=80"
              alt="Car"
              className="absolute right-0 bottom-4 w-[60%] object-contain opacity-90 scale-x-[-1]"
            />
          </div>

          {/* Banner 2 */}
          <div className="relative bg-blue-400 rounded-2xl p-8 overflow-hidden min-h-[360px] flex-col justify-between hidden md:flex">
            <div className="absolute top-[-60px] right-[60px] w-56 h-56 rounded-full bg-white/15 pointer-events-none" />
            <div className="absolute top-5 right-[-20px] w-40 h-40 rounded-full bg-white/10 pointer-events-none" />

            <div className="relative z-10 max-w-[260px]">
              <h2 className="text-3xl font-bold text-white leading-tight mb-3">
                Easy way to rent a car at a low price
              </h2>
              <p className="text-blue-100/80 text-sm mb-6 leading-relaxed">
                Providing cheap car rental services and safe and comfortable facilities.
              </p>
              <button onClick={handleAction}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold text-sm transition-colors">
                Rental Car
              </button>
            </div>

            <img
              src="https://images.unsplash.com/photo-1623812705597-2a5494d93026?auto=format&fit=crop&w=800&q=80"
              alt="Car"
              className="absolute right-0 bottom-4 w-[60%] object-contain opacity-90"
            />
          </div>
        </div>

        {/* ── Booking Form ─────────────────────────────────────────────── */}
        <BookingForm onAction={handleAction} />

        {/* ── Popular Cars ─────────────────────────────────────────────── */}
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-base font-semibold text-gray-400">Popular Car</h3>
          <button onClick={handleAction} className="text-base font-semibold text-blue-600 hover:underline">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
          {popularCars.map((car) => <CarCard key={`popular-${car.id}`} car={car} />)}
        </div>

        {/* ── Recommendation Cars ──────────────────────────────────────── */}
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-base font-semibold text-gray-400">Recommendation Car</h3>
          <button onClick={handleAction} className="text-base font-semibold text-blue-600 hover:underline">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
          {recCars.map((car) => <CarCard key={`rec-${car.id}`} car={car} />)}
        </div>

        {/* ── Show More ────────────────────────────────────────────────── */}
        <div className="flex items-center justify-center relative pb-10">
          <button onClick={handleAction}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3.5 rounded-md font-semibold text-sm transition-colors shadow-lg shadow-blue-500/25">
            Show more car
          </button>
          <span className="absolute right-0 text-sm font-bold text-gray-400">120 Car</span>
        </div>
      </div>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
};

export default GuestPage;