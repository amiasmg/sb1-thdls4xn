/*
  # Initial Schema Setup for Music Streaming Platform

  1. New Tables
    - users
      - Extended user profile information
    - songs
      - Stores song metadata and pricing
    - subscriptions
      - User subscription details
    - streams
      - Track song plays and payments

  2. Security
    - RLS enabled on all tables
    - Policies for proper data access control
*/

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  username TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  is_artist BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create songs table
CREATE TABLE IF NOT EXISTS songs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  artist_id UUID REFERENCES users(id) NOT NULL,
  audio_url TEXT NOT NULL,
  cover_url TEXT,
  price_per_stream DECIMAL(10,2) NOT NULL DEFAULT 0.01,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  period TEXT NOT NULL CHECK (period IN ('monthly', 'yearly')),
  stripe_subscription_id TEXT UNIQUE,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create streams table
CREATE TABLE IF NOT EXISTS streams (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  song_id UUID REFERENCES songs(id) NOT NULL,
  user_id UUID REFERENCES users(id) NOT NULL,
  price_paid DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE songs ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE streams ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can read all profiles"
  ON users FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can update own profile"
  ON users FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Anyone can read songs"
  ON songs FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Artists can create songs"
  ON songs FOR INSERT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid()
      AND is_artist = true
    )
  );

CREATE POLICY "Artists can update own songs"
  ON songs FOR UPDATE
  TO authenticated
  USING (artist_id = auth.uid());

CREATE POLICY "Users can read own subscriptions"
  ON subscriptions FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "System can manage subscriptions"
  ON subscriptions FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Users can read own streams"
  ON streams FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Artists can read streams of their songs"
  ON streams FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM songs
      WHERE songs.id = streams.song_id
      AND songs.artist_id = auth.uid()
    )
  );