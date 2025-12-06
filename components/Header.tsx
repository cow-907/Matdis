import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const base = "px-4 py-2 rounded-full font-medium transition-colors duration-200";
    return location.pathname === path
      ? `${base} bg-white text-blue-600 shadow-sm`
      : `${base} text-blue-800 hover:bg-blue-300/50`;
  };

  return (
    <header className="bg-blue-200 text-blue-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
            <span className="text-xl font-bold tracking-tight">Ojek<span className="text-blue-600">Finder</span></span>
          </div>
          <nav className="flex space-x-2">
            <Link to="/" className={getLinkClass('/')}>Dashboard</Link>
            <Link to="/about" className={getLinkClass('/about')}>Tentang</Link>
            <Link to="/users" className={getLinkClass('/users')}>Info</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;