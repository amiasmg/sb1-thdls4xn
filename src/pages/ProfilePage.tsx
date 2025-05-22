import React from 'react';
import { MobileLayout } from '../components/MobileLayout';
import { Settings, CreditCard, Music2 } from 'lucide-react';

export function ProfilePage() {
  return (
    <MobileLayout>
      <div className="p-4">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-20 h-20 bg-zinc-800 rounded-full"></div>
          <div>
            <h1 className="text-2xl font-bold">Guest User</h1>
            <p className="text-zinc-400">@guest</p>
          </div>
        </div>

        <div className="space-y-4">
          <button className="w-full flex items-center justify-between p-4 bg-zinc-800 rounded-lg">
            <div className="flex items-center space-x-3">
              <CreditCard size={24} />
              <span>Subscription</span>
            </div>
            <span className="text-zinc-400">Free Plan</span>
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-zinc-800 rounded-lg">
            <div className="flex items-center space-x-3">
              <Music2 size={24} />
              <span>Artist Profile</span>
            </div>
            <span className="text-zinc-400">Become an Artist</span>
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-zinc-800 rounded-lg">
            <div className="flex items-center space-x-3">
              <Settings size={24} />
              <span>Settings</span>
            </div>
          </button>
        </div>
      </div>
    </MobileLayout>
  );
}