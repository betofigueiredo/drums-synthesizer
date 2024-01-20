import { Kit } from "types/kits";

export type StudioTrack = {
  id: string;
  order: number;
  type: string;
  name: string;
  audio: string;
  volume: number;
  muted: boolean;
  steps: { [key: number]: boolean };
};

export type Song = {
  id?: string;
  name: string;
  bpm: number;
  blocks: number;
  tracks: { [key: string]: StudioTrack };
  kit: Kit | null;
};

export type StudioState = {
  song: Song;
  stepLocation: number;
  isPlaying: boolean;
};

export type SongResponse = {
  data: { song: Song };
};

export type SongsResponse = {
  data: { songs: Song[] };
};
