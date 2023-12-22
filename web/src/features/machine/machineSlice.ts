import { createSlice } from "@reduxjs/toolkit";
import { ITrackType, MachineState } from "types/machine";
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
      audioFile: "/audio/acoustic-ride-02.wav",
      volume: 1,
      muted: false,
      steps: {},
    },
    ride: {
      type: "ride",
      audioFile: "/audio/acoustic-ride-02.wav",
      volume: 1,
      muted: false,
      steps: {},
    },
    "open-hi-hat": {
      type: "open-hi-hat",
      audioFile: "/audio/acoustic-closed-hat-12.wav",
      volume: 1,
      muted: true,
      steps: {},
    },
    "closed-hi-hat": {
      type: "closed-hi-hat",
      audioFile: "/audio/acoustic-closed-hat-12.wav",
      volume: 1,
      muted: true,
      steps: {},
    },
    "high-tom": {
      type: "high-tom",
      audioFile: "/audio/acoustic-high-tom-12.wav",
      volume: 1,
      muted: false,
      steps: {},
    },
    "low-tom": {
      type: "low-tom",
      audioFile: "/audio/acoustic-tom-low-06.wav",
      volume: 1,
      muted: false,
      steps: {},
    },
    "medium-tom": {
      type: "medium-tom",
      audioFile: "/audio/acoustic-mid-tom-12.wav",
      volume: 1,
      muted: false,
      steps: {},
    },
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
  track: ITrackType,
  step: number,
): boolean => {
  return state?.tracks[track]?.steps[step] ?? false;
};

export default machineSlice.reducer;
