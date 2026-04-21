import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, SlidersHorizontal, Bell, Heart, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white border-b border-gray-100 py-6 px-10 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-16 w-full max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-blue-600 font-bold text-3xl tracking-tight hover:opacity-80 transition-opacity">
          MORENT
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl relative flex items-center">
          <div className="absolute left-4 text-gray-500">
            <Search size={20} />
          </div>
          <input
            type="text"
            onClick={!user ? () => navigate('/login') : undefined}
            placeholder="Search something here"
            className="w-full bg-white border border-gray-200 rounded-full py-3.5 pl-12 pr-12 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
          />
          <div 
            onClick={!user ? () => navigate('/login') : undefined}
            className="absolute right-4 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors"
          >
            <SlidersHorizontal size={20} />
          </div>
        </div>

        {/* Action Icons / Login */}
        <div className="flex items-center gap-5 ml-auto">
          {!user ? (
            <Link 
              to="/login" 
              className="bg-blue-600 text-white px-8 py-2.5 rounded-[4px] font-semibold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
            >
              Login
            </Link>
          ) : (
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-gray-700 hidden md:block">Hello, {user.name}</span>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <Heart size={24} />
              </button>
              <button className="text-gray-400 hover:text-gray-600 transition-colors relative">
                <Bell size={24} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <button 
                onClick={handleLogout}
                className="text-gray-400 hover:text-red-500 transition-colors"
                title="Logout"
              >
                <LogOut size={24} />
              </button>
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
                <img 
                  src={user.profileImage === 'default-profile.png' 
                    ? "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" 
                    : `http://localhost:5000/uploads/users/${user.profileImage}`} 
                  alt="User avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};



export default Navbar;
