import { createSlice } from "@reduxjs/toolkit";
import { ITrackType, MachineState } from "types/machine";
import addTrackUseCase from "./useCases/addTrackUseCase";
import updateStepLocationUseCase from "./useCases/updateStepLocationUseCase";
import updateStepUseCase from "./useCases/updateStepUseCase";
import updateBpmUseCase from "./useCases/updateBpmUseCase";

const initialState: MachineState = {
  bpm: 146,
  blocks: 4,
  isPlaying: false,
  stepLocation: 0,
  tracks: {
    ride: {
      type: "ride",
      audioFile: "/audio/acoustic-ride-02.wav",
      volume: 1,
      muted: false,
      steps: {},
    },
    "hi-hat": {
      type: "hi-hat",
      audioFile: "/audio/acoustic-closed-hat-12.wav",
      volume: 1,
      muted: false,
      steps: {},
    },
    "tom-high": {
      type: "tom-high",
      audioFile: "/audio/acoustic-high-tom-12.wav",
      volume: 1,
      muted: false,
      steps: {},
    },
    "tom-low": {
      type: "tom-low",
      audioFile: "/audio/acoustic-tom-low-06.wav",
      volume: 1,
      muted: false,
      steps: {},
    },
    "tom-mid": {
      type: "tom-mid",
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
  },
});

export const { addTrack, updateStepLocation, updateStep } =
  machineSlice.actions;

export const isStepActiveSelector = (
  state: MachineState,
  track: ITrackType,
  step: number
): boolean => {
  return state?.tracks[track]?.steps[step] ?? false;
};

export default machineSlice.reducer;
