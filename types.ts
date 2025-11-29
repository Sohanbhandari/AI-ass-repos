export interface Song {
  id: string;
  title: string;
  artist: string;
  cover: string;
  duration: number; // in seconds
  album: string;
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  cover: string;
  songCount: number;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  cover: string;
  year: number;
}

export interface Category {
  id: string;
  title: string;
  items: (Playlist | Album)[];
}