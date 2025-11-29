import { Category, Song } from './types';

export const MOCK_CURRENT_SONG: Song = {
  id: '1',
  title: 'Neon Nights',
  artist: 'Cyber Dreams',
  album: 'Future City',
  cover: 'https://picsum.photos/seed/neon/200/200',
  duration: 214,
};

export const CATEGORIES: Category[] = [
  {
    id: 'featured',
    title: 'Featured Playlists',
    items: [
      {
        id: 'p1',
        title: 'Deep Focus',
        description: 'Keep calm and focus with ambient and post-rock music.',
        cover: 'https://picsum.photos/seed/focus/300/300',
        songCount: 142,
      },
      {
        id: 'p2',
        title: 'Neon Drive',
        description: 'Synthwave beats for your late night drives.',
        cover: 'https://picsum.photos/seed/synth/300/300',
        songCount: 85,
      },
      {
        id: 'p3',
        title: 'Alternative 90s',
        description: 'The best grunge and alternative hits from the 1990s.',
        cover: 'https://picsum.photos/seed/grunge/300/300',
        songCount: 50,
      },
      {
        id: 'p4',
        title: 'Jazz Vibes',
        description: 'Smooth jazz for relaxing evenings.',
        cover: 'https://picsum.photos/seed/jazz/300/300',
        songCount: 120,
      },
      {
        id: 'p5',
        title: 'Workout Pump',
        description: 'High energy hits to keep you moving.',
        cover: 'https://picsum.photos/seed/gym/300/300',
        songCount: 65,
      },
    ],
  },
  {
    id: 'made-for-you',
    title: 'Made For You',
    items: [
      {
        id: 'a1',
        title: 'Daily Mix 1',
        artist: 'Sprinkest Mix',
        cover: 'https://picsum.photos/seed/mix1/300/300',
        year: 2023,
      },
      {
        id: 'a2',
        title: 'Discover Weekly',
        artist: 'Sprinkest Mix',
        cover: 'https://picsum.photos/seed/discover/300/300',
        year: 2023,
      },
      {
        id: 'a3',
        title: 'Release Radar',
        artist: 'Sprinkest Mix',
        cover: 'https://picsum.photos/seed/radar/300/300',
        year: 2023,
      },
      {
        id: 'a4',
        title: 'On Repeat',
        artist: 'Sprinkest Mix',
        cover: 'https://picsum.photos/seed/repeat/300/300',
        year: 2023,
      },
    ],
  },
  {
    id: 'recently-played',
    title: 'Recently Played',
    items: [
      {
        id: 'a5',
        title: 'Midnight Memories',
        artist: 'One Direction',
        cover: 'https://picsum.photos/seed/1d/300/300',
        year: 2013,
      },
      {
        id: 'a6',
        title: 'AM',
        artist: 'Arctic Monkeys',
        cover: 'https://picsum.photos/seed/am/300/300',
        year: 2013,
      },
      {
        id: 'a7',
        title: 'Currents',
        artist: 'Tame Impala',
        cover: 'https://picsum.photos/seed/tame/300/300',
        year: 2015,
      },
       {
        id: 'a8',
        title: 'After Hours',
        artist: 'The Weeknd',
        cover: 'https://picsum.photos/seed/weeknd/300/300',
        year: 2020,
      },
    ],
  },
];