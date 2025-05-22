import React from 'react';
import { MobileLayout } from '../components/MobileLayout';
import { SongCard } from '../components/SongCard';

export function LibraryPage() {
  return (
    <MobileLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">Your Library</h1>
        
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-3">Recently Played</h2>
            <div className="space-y-3">
              <SongCard
                song={{
                  id: '1',
                  title: 'Summer Vibes',
                  artist_id: '1',
                  audio_url: '',
                  cover_url: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg',
                  price_per_stream: 0.01,
                  created_at: '',
                  updated_at: ''
                }}
                onPlay={() => console.log('Play clicked')}
              />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">Your Playlists</h2>
            <div className="space-y-3">
              <div className="p-4 bg-zinc-800 rounded-lg">
                <p className="text-zinc-400">Create your first playlist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}