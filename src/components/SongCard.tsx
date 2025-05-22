import React from 'react';
import { Play, Pause } from 'lucide-react';
import { Database } from '../types/database.types';

interface SongCardProps {
  song: Database['public']['Tables']['songs']['Row'];
  isPlaying?: boolean;
  onPlay?: () => void;
}

export function SongCard({ song, isPlaying, onPlay }: SongCardProps) {
  return (
    <div className="flex items-center space-x-3 p-3 bg-zinc-900/50 rounded-lg">
      <div className="relative w-14 h-14 flex-shrink-0">
        <img
          src={song.cover_url || 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg'}
          alt={song.title}
          className="w-full h-full object-cover rounded-md"
        />
        <button
          onClick={onPlay}
          className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-md"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-white truncate">{song.title}</h3>
        <p className="text-xs text-zinc-400">
          ${song.price_per_stream} per stream
        </p>
      </div>
    </div>
  );
}