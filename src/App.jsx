import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Listings from './pages/Listings';
import PropertyDetail from './pages/PropertyDetail';
import DashboardLayout from './layouts/DashboardLayout';
import Bookings from './pages/Bookings';
import Contact from './pages/Contact';

function App() {
  const navigate = useNavigate();

  const navLinkClass = ({ isActive }) => 
    `px-4 py-2 rounded-lg transition-colors ${
      isActive ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
    }`;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-blue-600 cursor-pointer" onClick={() => navigate('/')}>
              Mathura Realtors
            </h1>
            <div className="hidden md:flex gap-2">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/listings" className={navLinkClass}>Browse</NavLink>
              <NavLink to="/dashboard" className={navLinkClass}>My Account</NavLink>
              <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            </div>
          </div>
          <button 
            onClick={() => navigate('/listings')}
            className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition"
          >
            Book Now
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/listings/:id" element={<PropertyDetail />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="bookings" element={<Bookings />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;