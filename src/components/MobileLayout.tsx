import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Library, User } from 'lucide-react';

interface MobileLayoutProps {
  children: React.ReactNode;
}

export function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <div className="fixed inset-0 flex flex-col bg-black text-white">
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="bg-zinc-900 border-t border-zinc-800">
        <div className="flex justify-around items-center h-14 px-2 safe-area-inset-bottom">
          <Link to="/" className="flex flex-col items-center justify-center flex-1 py-1">
            <Home size={20} />
            <span className="text-xs mt-0.5">Home</span>
          </Link>
          <Link to="/search" className="flex flex-col items-center justify-center flex-1 py-1">
            <Search size={20} />
            <span className="text-xs mt-0.5">Search</span>
          </Link>
          <Link to="/library" className="flex flex-col items-center justify-center flex-1 py-1">
            <Library size={20} />
            <span className="text-xs mt-0.5">Library</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center justify-center flex-1 py-1">
            <User size={20} />
            <span className="text-xs mt-0.5">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}