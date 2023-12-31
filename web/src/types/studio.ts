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

export type StudioState = {
  songId?: string;
  songName: string;
  bpm: number;
  blocks: number;
  stepLocation: number;
  isPlaying: boolean;
  tracks: { [key: string]: StudioTrack };
  selectedKit: Kit | null;
};
