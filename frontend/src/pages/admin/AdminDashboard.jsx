import React from 'react';
import Navbar from '../../components/Navbar';
import { LayoutDashboard, Car, Calendar, CreditCard, ChevronRight, MoreHorizontal, Fuel, Settings2, Users, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';

const StatCard = ({ title, value, subtext, color }) => (
  <div className="bg-white p-6 rounded-[10px] shadow-sm flex-1">
    <p className="text-gray-400 text-sm font-bold mb-2 uppercase tracking-wider">{title}</p>
    <div className="flex items-center gap-3">
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
      <span className={`text-xs font-bold px-2 py-1 rounded ${color}`}>+12.5%</span>
    </div>
    <p className="text-xs text-gray-300 mt-2">{subtext}</p>
  </div>
);

const BookingItem = ({ car, date, price, status }) => (
  <div className="flex items-center justify-between p-4 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
    <div className="flex items-center gap-4">
      <div className="w-16 h-12 bg-gray-100 rounded-[4px] flex items-center justify-center p-2">
        <img src={car.image} alt={car.name} className="max-w-full max-h-full object-contain" />
      </div>
      <div>
        <h4 className="font-bold text-gray-900 text-sm">{car.name}</h4>
        <p className="text-gray-400 text-xs font-medium">{date}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="font-bold text-gray-900 text-sm">${price.toFixed(2)}</p>
      <p className={`text-[10px] font-bold uppercase tracking-widest ${status === 'Completed' ? 'text-green-500' : 'text-blue-500'}`}>{status}</p>
    </div>
  </div>
);

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/");
  };


  // Mock data for the admin dashboard
  const recentBookings = [
    { id: 1, car: { name: 'Nissan GT - R', image: 'https://images.unsplash.com/photo-1544839800-4f51e3da07d3?auto=format&fit=crop&w=400&q=80' }, date: '20 July 2023', price: 80.00, status: 'Completed' },
    { id: 2, car: { name: 'Koenigsegg', image: 'https://images.unsplash.com/photo-1623812705597-2a5494d93026?auto=format&fit=crop&w=400&q=80' }, date: '18 July 2023', price: 99.00, status: 'Completed' },
    { id: 3, car: { name: 'Rolls-Royce', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=400&q=80' }, date: '15 July 2023', price: 96.00, status: 'In Progress' },
  ];

  return (
    <div className="min-h-screen bg-[#F6F7F9]">
      <Navbar />
      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <aside className="w-72 bg-white hidden lg:block p-8 min-h-[calc(100vh-100px)] sticky top-[100px]">
          <div className="mb-10">
            <h3 className="text-gray-300 text-[10px] uppercase font-bold tracking-widest mb-6">Admin Panel</h3>
            <nav className="space-y-4">
              <a href="#" className="flex items-center gap-3 bg-blue-600 text-white p-3 rounded-[10px] font-semibold text-sm shadow-lg shadow-blue-500/20">
                <LayoutDashboard size={22} /> Summary
              </a>
              <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-blue-600 p-3 rounded-[10px] font-medium text-sm transition-colors">
                <Car size={22} /> Car Management
              </a>
              <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-blue-600 p-3 rounded-[10px] font-medium text-sm transition-colors">
                <Calendar size={22} /> Bookings
              </a>
              <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-blue-600 p-3 rounded-[10px] font-medium text-sm transition-colors">
                <CreditCard size={22} /> Payments
              </a>
            </nav>
          </div>
          
          <div>
            <h3 className="text-gray-300 text-[10px] uppercase font-bold tracking-widest mb-6">Settings</h3>
            <nav className="space-y-4">
              <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-blue-600 p-3 rounded-[10px] font-medium text-sm transition-colors">
                <Settings2 size={22} /> System Status
              </a>
              <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-3 text-red-500 hover:bg-red-50 p-3 rounded-[10px] font-medium text-sm transition-colors mt-2"
              >
                <LogOut size={22} /> Log Out
              </button>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Details Rental */}
            <div className="bg-white p-6 rounded-[10px] shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Details Rental</h3>
              <div className="bg-gray-50 rounded-[10px] p-4 mb-8">
                 <img 
                  src="https://images.unsplash.com/photo-1544839800-4f51e3da07d3?auto=format&fit=crop&w=400&q=80" 
                  alt="Nissan GT-R" 
                  className="w-full h-48 object-contain"
                />
              </div>
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">Nissan GT - R</h4>
                  <p className="text-sm font-bold text-gray-400">Sport Car</p>
                </div>
                <span className="text-gray-400 text-xs font-bold">#7652</span>
              </div>
              
              <div className="space-y-6">
                 <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm font-bold">Pick-Up Location</span>
                    <span className="text-gray-900 text-sm font-bold">Jakarta South</span>
                 </div>
                 <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm font-bold">Date</span>
                    <span className="text-gray-900 text-sm font-bold">20 July 2023</span>
                 </div>
                 <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                    <div className="text-gray-900">
                      <p className="text-sm font-bold">Total Rental Price</p>
                      <p className="text-xs text-gray-400">Overall price and includes rental tax</p>
                    </div>
                    <span className="text-3xl font-bold text-gray-900">$80.00</span>
                 </div>
              </div>
            </div>

            {/* Right Column: Mini Stats & Recent Transactions */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col md:flex-row gap-8">
                <StatCard 
                  title="Total Revenue" 
                  value="$1,240.00" 
                  subtext="Updated since 2 hrs ago"
                  color="bg-green-100 text-green-600"
                />
                <StatCard 
                  title="Total Bookings" 
                  value="12" 
                  subtext="Updated 1 min ago"
                  color="bg-blue-100 text-blue-600"
                />
              </div>

              <div className="bg-white p-6 rounded-[10px] shadow-sm flex-1">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Recent Transaction</h3>
                  <button className="text-blue-600 text-sm font-bold hover:underline">View All</button>
                </div>
                <div className="flex flex-col gap-2">
                  {recentBookings.map((booking) => (
                    <BookingItem key={booking.id} {...booking} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
