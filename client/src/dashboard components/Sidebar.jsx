import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, UsersIcon, FolderIcon, CalendarIcon, ChartBarIcon, CogIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Dashboard', icon: HomeIcon, path: '/dashboard' }, // පාඨ "/" සිට "/dashboard" ලෙස වෙනස් කරන්න
  { name: 'Food Menu', icon: UsersIcon, path: '/foodmenu' },
  { name: 'Chefs Manage', icon: FolderIcon, path: '/chefsmanage' },
  { name: 'Table Booking', icon: CalendarIcon, path: '/tablebooking' },
  { name: 'Blog Manage', icon: ChartBarIcon, path: '/blogmanage' },
  { name: 'Contact Show', icon: CogIcon, path: '/contactshow' },
];

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  const location = useLocation();

  return (
    <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-blue-700 text-white transition-all duration-300 ease-in-out h-screen flex flex-col`}>
      <div className="p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">{sidebarOpen ? 'Dashboard' : 'D'}</h1>
        <button onClick={toggleSidebar} className="p-1 rounded-md hover:bg-blue-600">
          {sidebarOpen ? '←' : '→'}
        </button>
      </div>
      <nav className="mt-6 flex-1">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-2">
              <Link
                to={item.path}
                className={`flex items-center w-full p-3 ${location.pathname === item.path ? 'bg-blue-800' : 'hover:bg-blue-600'} rounded-lg transition-colors`}
              >
                <item.icon className={`h-5 w-5 ${sidebarOpen ? 'mr-3' : 'mx-auto'}`} />
                {sidebarOpen && <span>{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-full p-4">
        <button className="flex items-center w-full p-3 hover:bg-blue-600 rounded-lg transition-colors">
          <CogIcon className={`h-5 w-5 ${sidebarOpen ? 'mr-3' : 'mx-auto'}`} />
          {sidebarOpen && <span>Settings</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar; // මෙය පමණක් තබන්න
