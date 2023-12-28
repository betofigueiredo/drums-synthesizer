import { Kit } from "features/kits/kitsSlice";

export type ITrack = {
  id: string;
  type: string;
  name: string;
  audio: string;
  volume: number;
  muted: boolean;
  steps: { [key: number]: boolean };
};

export type StudioState = {
  bpm: number;
  blocks: number;
  stepLocation: number;
  isPlaying: boolean;
  tracks: { [key: string]: ITrack };
  selectedKit: Kit | null;
};
