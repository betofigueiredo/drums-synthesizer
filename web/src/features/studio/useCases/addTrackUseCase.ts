import { PayloadAction } from "@reduxjs/toolkit";
import { StudioState } from "types/studio";

const addTrackUseCase = (
  state: StudioState,
  action: PayloadAction<{ trackType: string }>,
) => {
  const trackType = action.payload.trackType;
  const newTrack = {
    id: trackType,
    order: 1, // FIXME:
    type: trackType,
    name: trackType,
    audio: "/audio/acoustic-snare-06.wav",
    volume: 1,
    muted: false,
    steps: {},
  };
  state.song.tracks[trackType] = newTrack;
};

export default addTrackUseCase;
