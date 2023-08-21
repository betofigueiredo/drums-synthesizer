export type ITrackType = "snare" | "kick";

export type ITrack = {
  type: ITrackType;
  audioFile: string;
  volume: number;
  muted: boolean;
  steps: { [key: number]: boolean };
};

export type MachineState = {
  bpm: number;
  blocks: number;
  stepLocation: number;
  isPlaying: boolean;
  tracks: { [key in ITrackType]: ITrack };
};
