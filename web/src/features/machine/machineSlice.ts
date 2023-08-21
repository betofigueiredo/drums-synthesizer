import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITrackType, MachineState } from "types/machine";

const initialState: MachineState = {
  bpm: 146,
  blocks: 4,
  isPlaying: false,
  stepLocation: 0,
  tracks: {
    snare: {
      type: "snare",
      audioFile: "/audio/acoustic-snare-06.wav",
      volume: 1,
      muted: false,
      steps: { 5: true, 13: true },
    },
    kick: {
      type: "kick",
      audioFile: "/audio/acoustic-kick-03.wav",
      volume: 1,
      muted: false,
      steps: { 1: true, 4: true, 7: true, 11: true },
    },
  },
};

export const machineSlice = createSlice({
  name: "machine",
  initialState,
  reducers: {
    updateStepLocation: (
      state,
      action: PayloadAction<{ isPlaying: boolean; stepLocation: number }>
    ) => {
      state.stepLocation = action.payload.stepLocation;
      state.isPlaying = action.payload.isPlaying;
    },
    updateStep: (
      state,
      action: PayloadAction<{ trackType: ITrackType; step: number }>
    ) => {
      const isStepActive =
        !!state.tracks[action.payload.trackType].steps[action.payload.step];
      if (isStepActive) {
        delete state.tracks[action.payload.trackType].steps[
          action.payload.step
        ];
      } else {
        state.tracks[action.payload.trackType].steps[action.payload.step] =
          true;
      }
    },
    updateBpm: (state, action: PayloadAction<number>) => {
      state.bpm = action.payload;
    },
  },
});

export const { updateStepLocation, updateStep } = machineSlice.actions;

export const isStepActiveSelector = (
  state: MachineState,
  track: ITrackType,
  step: number
): boolean => {
  return state?.tracks[track]?.steps[step] ?? false;
};

export default machineSlice.reducer;
