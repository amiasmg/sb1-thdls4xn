export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          username: string
          full_name: string | null
          avatar_url: string | null
          is_artist: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username: string
          full_name?: string | null
          avatar_url?: string | null
          is_artist?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string
          full_name?: string | null
          avatar_url?: string | null
          is_artist?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      songs: {
        Row: {
          id: string
          title: string
          artist_id: string
          audio_url: string
          cover_url: string | null
          price_per_stream: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          artist_id: string
          audio_url: string
          cover_url?: string | null
          price_per_stream?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          artist_id?: string
          audio_url?: string
          cover_url?: string | null
          price_per_stream?: number
          created_at?: string
          updated_at?: string
        }
      }
      subscriptions: {
        Row: {
          id: string
          user_id: string
          amount: number
          period: 'monthly' | 'yearly'
          stripe_subscription_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          amount: number
          period: 'monthly' | 'yearly'
          stripe_subscription_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          amount?: number
          period?: 'monthly' | 'yearly'
          stripe_subscription_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      streams: {
        Row: {
          id: string
          song_id: string
          user_id: string
          price_paid: number
          created_at: string
        }
        Insert: {
          id?: string
          song_id: string
          user_id: string
          price_paid: number
          created_at?: string
        }
        Update: {
          id?: string
          song_id?: string
          user_id?: string
          price_paid?: number
          created_at?: string
        }
      }
    }
  }
}