import React from 'react';
import { MobileLayout } from '../components/MobileLayout';
import { SongCard } from '../components/SongCard';

export function HomePage() {
  return (
    <MobileLayout>
      <div className="px-4 py-6 space-y-6">
        <h1 className="text-xl font-bold">Discover Music</h1>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-base font-semibold mb-3">Trending Songs</h2>
            <div className="space-y-2">
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
              <SongCard
                song={{
                  id: '2',
                  title: 'Night Drive',
                  artist_id: '2',
                  audio_url: '',
                  cover_url: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg',
                  price_per_stream: 0.02,
                  created_at: '',
                  updated_at: ''
                }}
                onPlay={() => console.log('Play clicked')}
              />
            </div>
          </div>

          <div>
            <h2 className="text-base font-semibold mb-3">New Releases</h2>
            <div className="space-y-2">
              <SongCard
                song={{
                  id: '3',
                  title: 'Mountain High',
                  artist_id: '3',
                  audio_url: '',
                  cover_url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
                  price_per_stream: 0.015,
                  created_at: '',
                  updated_at: ''
                }}
                onPlay={() => console.log('Play clicked')}
              />
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}