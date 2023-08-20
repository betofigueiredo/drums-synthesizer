import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { MachineState } from "../../types/machine";

const initialState: MachineState = {
  bpm: 80,
  blocks: 4,
  tracks: {
    snare: {
      type: "snare",
      audioFile: "/audio/acoustic-snare-06.wav",
      volume: 100,
      muted: false,
      ticks: { 3: true, 4: true },
    },
    kick: {
      type: "kick",
      audioFile: "/audio/acoustic-kick-03.wav",
      volume: 100,
      muted: false,
      ticks: { 3: true, 4: true },
    },
  },
};

export const machineSlice = createSlice({
  name: "machine",
  initialState,
  reducers: {
    updateBpm: (state, action: PayloadAction<number>) => {
      state.bpm = action.payload;
    },
  },
});

export const { updateBpm } = machineSlice.actions;

export default machineSlice.reducer;
