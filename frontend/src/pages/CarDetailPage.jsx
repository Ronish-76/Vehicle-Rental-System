import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { cars } from '../data/cars';
import { Heart, Star, StarHalf } from 'lucide-react';

const ReviewCard = ({ name, role, date, text, rating }) => (
  <div className="bg-white p-6 rounded-[10px] mb-6 last:mb-0">
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-100 rounded-full overflow-hidden">
          <img src={`https://i.pravatar.cc/150?u=${name}`} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
          <p className="text-gray-400 text-xs font-medium">{role}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-gray-400 text-xs font-medium mb-2">{date}</p>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
  </div>
);

const CarDetailPage = () => {
  const { id } = useParams();
  const car = cars.find(c => c.id === parseInt(id));
  const [activeImage, setActiveImage] = useState(car?.image);
  const [isFavorite, setIsFavorite] = useState(car?.favorite);

  useEffect(() => {
    if (car) {
      setActiveImage(car.image);
      setIsFavorite(car.favorite);
    }
    window.scrollTo(0, 0);
  }, [car]);

  if (!car) return <div className="p-20 text-center text-2xl font-bold">Car not found</div>;

  return (
    <div className="min-h-screen bg-[#F6F7F9]">
      <Navbar />
      
      <main className="max-w-[1440px] mx-auto p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* LEFT COLUMN: Visuals */}
          <div className="flex flex-col gap-6">
            <div className="bg-blue-600 rounded-[10px] p-8 text-white relative overflow-hidden min-h-[360px] flex flex-col justify-start">
              <div className="relative z-10 max-w-[320px]">
                <h2 className="text-3xl font-semibold mb-4 leading-tight">
                  Sports car with the best design and acceleration
                </h2>
                <p className="text-white/80 font-medium leading-relaxed">
                  Safety and comfort while driving a futuristic and elegant sports car
                </p>
              </div>
              <div className="mt-auto relative z-10 flex justify-center">
                <img src={activeImage} alt={car.name} className="max-h-[160px] object-contain" />
              </div>
              {/* Abstract Background patterns */}
              <div className="absolute top-[-50px] left-[-50px] w-64 h-64 border-2 border-white/5 rounded-full"></div>
              <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 border-4 border-white/5 rounded-full"></div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {car.thumbnails?.map((thumb, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(thumb)}
                  className={`bg-white rounded-[10px] p-2 h-[124px] flex items-center justify-center overflow-hidden border-2 transition-all ${activeImage === thumb ? 'border-blue-600 p-0' : 'border-transparent'}`}
                >
                  <img src={thumb} alt="thumbnail" className="w-full h-full object-cover rounded-[6px]" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Details */}
          <div className="bg-white rounded-[10px] p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{car.name}</h1>
                <button 
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`${isFavorite ? 'text-red-500' : 'text-gray-300'} transition-colors`}
                >
                  <Heart size={28} fill={isFavorite ? 'currentColor' : 'none'} />
                </button>
              </div>

              <div className="flex items-center gap-2 mb-8">
                <div className="flex gap-0.5">
                   {[...Array(4)].map((_, i) => <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />)}
                   <Star size={20} className="text-gray-300" />
                </div>
                <span className="text-gray-400 text-sm font-medium">{car.reviews}+ Reviewer</span>
              </div>

              <p className="text-gray-500 text-lg font-medium leading-[200%] mb-8">
                {car.description}
              </p>

              <div className="grid grid-cols-2 gap-y-6 gap-x-12 mb-10">
                <div className="flex justify-between items-center text-lg">
                  <span className="text-gray-300 font-medium">Type Car</span>
                  <span className="text-gray-500 font-bold">{car.type}</span>
                </div>
                <div className="flex justify-between items-center text-lg">
                  <span className="text-gray-300 font-medium">Capacity</span>
                  <span className="text-gray-500 font-bold">{car.capacity}</span>
                </div>
                <div className="flex justify-between items-center text-lg">
                  <span className="text-gray-300 font-medium">Steering</span>
                  <span className="text-gray-500 font-bold">{car.transmission}</span>
                </div>
                <div className="flex justify-between items-center text-lg">
                  <span className="text-gray-300 font-medium">Gasoline</span>
                  <span className="text-gray-500 font-bold">{car.fuel}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p>
                  <span className="text-3xl font-bold text-gray-900">${car.price.toFixed(2)}/</span>
                  <span className="text-base text-gray-400 font-bold ml-1">days</span>
                </p>
                {car.oldPrice && (
                    <p className="text-gray-400 font-bold line-through text-base">${car.oldPrice.toFixed(2)}</p>
                )}
              </div>
              <button className="bg-blue-600 text-white px-10 py-5 rounded-[4px] font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                Rent Now
              </button>
            </div>
          </div>
        </div>

        {/* REVIEWS SECTION */}
        <section className="bg-white rounded-[10px] p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-xl font-bold text-gray-900">Reviews</h2>
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-[4px]">13</span>
          </div>

          <div className="space-y-6">
            <ReviewCard 
              name="Alex Stanton"
              role="CEO at Bukalapak"
              date="21 July 2022"
              rating={4}
              text="We are very happy with the service from the MORENT app. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service from the person on duty is also very friendly and very polite."
            />
            <ReviewCard 
              name="Skylar Dias"
              role="CEO at Amazon"
              date="20 July 2022"
              rating={4}
              text="We are greatly helped by the services of the MORENT application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service from the staff is also very friendly and very polite."
            />
          </div>

          <button className="flex items-center gap-2 mx-auto mt-8 text-gray-400 font-bold text-base hover:text-blue-600 transition-colors">
            Show All <Star size={16} />
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CarDetailPage;
