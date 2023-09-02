import { PayloadAction } from "@reduxjs/toolkit";
import { ITrackType, MachineState } from "types/machine";

const addTrackUseCase = (
  state: MachineState,
  action: PayloadAction<{ trackType: ITrackType }>
) => {
  const trackType = action.payload.trackType;
  const newTrack = {
    type: trackType,
    audioFile: "/audio/acoustic-snare-06.wav",
    volume: 1,
    muted: false,
    steps: {},
  };
  state.tracks[trackType] = newTrack;
};

export default addTrackUseCase;
