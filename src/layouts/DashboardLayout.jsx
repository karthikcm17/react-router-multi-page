import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const linkClass = ({ isActive }) => 
    `block p-3 rounded-lg mb-2 transition-all ${
      isActive ? 'bg-blue-50 text-blue-700 font-bold border-l-4 border-blue-600' : 'text-gray-600 hover:bg-gray-50'
    }`;

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <aside className="w-full md:w-64">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <NavLink to="bookings" className={linkClass}>My Bookings</NavLink>
        </div>
      </aside>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;