export type TrackType = "snare" | "kick";

export type ITrack = {
  type: TrackType;
  audioFile: string;
  volume: number;
  muted: boolean;
  ticks: { [key: number]: boolean };
};

export type MachineState = {
  bpm: number;
  blocks: number;
  tracks: { [key in TrackType]: ITrack };
};
