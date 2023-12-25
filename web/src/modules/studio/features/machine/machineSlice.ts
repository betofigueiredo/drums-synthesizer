import { createSlice } from "@reduxjs/toolkit";
import { MachineState } from "types/machine";
import addTrackUseCase from "./useCases/addTrackUseCase";
import updateStepLocationUseCase from "./useCases/updateStepLocationUseCase";
import updateStepUseCase from "./useCases/updateStepUseCase";
import updateBpmUseCase from "./useCases/updateBpmUseCase";
import muteTrackUseCase from "./useCases/muteTrackUseCase";

const initialState: MachineState = {
  selectedKit: {
    id: "83174715-8da1-4269-abc3-dab0e4656e24",
    name: "Basic Kit",
    tracks: [
      {
        id: "29d41dc9-c89c-4187-99eb-746a2fda4faf",
        type: "snare",
        name: "Snare",
        audio: "/audio/file.mp3",
      },
    ],
  },
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
