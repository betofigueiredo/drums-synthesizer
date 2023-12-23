import { createSlice } from "@reduxjs/toolkit";
import { MachineState } from "types/machine";
import addTrackUseCase from "./useCases/addTrackUseCase";
import updateStepLocationUseCase from "./useCases/updateStepLocationUseCase";
import updateStepUseCase from "./useCases/updateStepUseCase";
import updateBpmUseCase from "./useCases/updateBpmUseCase";
import muteTrackUseCase from "./useCases/muteTrackUseCase";

const initialState: MachineState = {
  bpm: 146,
  blocks: 4,
  isPlaying: false,
  stepLocation: 0,
  tracks: {
    crash: {
      type: "crash",
      name: "Crash",
      audioFile: "/audio/acoustic-ride-02.wav",
      volume: 1,
      muted: false,
      steps: {},
    },
    ride: {
      type: "ride",
      name: "Ride",
      audioFile: "/audio/acoustic-ride-02.wav",
      volume: 1,
      muted: false,
      steps: {},
    },
    "open-hi-hat": {
      type: "open-hi-hat",
      name: "Open Hi Hat",
      audioFile: "/audio/acoustic-closed-hat-12.wav",
      volume: 1,
      muted: true,
      steps: {},
    },
    "closed-hi-hat": {
      type: "closed-hi-hat",
      name: "Closed Hi Hat",
      audioFile: "/audio/acoustic-closed-hat-12.wav",
      volume: 1,
      muted: true,
      steps: {},
    },
    "high-tom": {
      type: "high-tom",
      name: "High tom",
      audioFile: "/audio/acoustic-high-tom-12.wav",
      volume: 1,
      muted: false,
      steps: {},
    },
    "low-tom": {
      type: "low-tom",
      name: "Low tom",
      audioFile: "/audio/acoustic-tom-low-06.wav",
      volume: 1,
      muted: false,
      steps: {},
    },
    "medium-tom": {
      type: "medium-tom",
      name: "Medium tom",
      audioFile: "/audio/acoustic-mid-tom-12.wav",
      volume: 1,
      muted: false,
      steps: {},
    },
    snare: {
      type: "snare",
      name: "Snare",
      audioFile: "/audio/acoustic-snare-06.wav",
      volume: 1,
      muted: false,
      steps: { 5: true, 13: true },
    },
    kick: {
      type: "kick",
      name: "Kick",
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
    addTrack: addTrackUseCase,
    updateStepLocation: updateStepLocationUseCase,
    updateStep: updateStepUseCase,
    updateBpm: updateBpmUseCase,
    muteTrack: muteTrackUseCase,
  },
});

export const {
  addTrack,
  updateStepLocation,
  updateStep,
  updateBpm,
  muteTrack,
} = machineSlice.actions;

export const isStepActiveSelector = (
  state: MachineState,
  track: string,
  step: number,
): boolean => {
  return state?.tracks[track]?.steps[step] ?? false;
};

export default machineSlice.reducer;
