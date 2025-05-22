import React from 'react';
import { MobileLayout } from '../components/MobileLayout';
import { Search as SearchIcon } from 'lucide-react';

export function SearchPage() {
  return (
    <MobileLayout>
      <div className="p-4">
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search songs..."
            className="w-full bg-zinc-800 text-white rounded-full py-3 px-12 focus:outline-none focus:ring-2 focus:ring-zinc-600"
          />
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400" size={20} />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Popular Categories</h2>
          <div className="grid grid-cols-2 gap-3">
            {['Hip Hop', 'Electronic', 'Rock', 'Jazz', 'Pop', 'Classical'].map((genre) => (
              <button
                key={genre}
                className="bg-zinc-800 text-white p-4 rounded-lg text-left hover:bg-zinc-700 transition"
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}