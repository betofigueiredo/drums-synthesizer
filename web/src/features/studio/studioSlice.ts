import { createSlice } from "@reduxjs/toolkit";
import { StudioState } from "types/studio";
import addTrackUseCase from "./useCases/addTrackUseCase";
import updateStepLocationUseCase from "./useCases/updateStepLocationUseCase";
import updateStepUseCase from "./useCases/updateStepUseCase";
import muteTrackUseCase from "./useCases/muteTrackUseCase";
import setNewSongUseCase from "./useCases/setNewSongUseCase";
import addBlocksUseCase from "./useCases/addBlocksUseCase";
import removeLastBlockUseCase from "./useCases/removeLastBlockUseCase";
import updateSongUseCase from "./useCases/updateSongUseCase";

const initialState: StudioState = {
  song: {
    id: "",
    name: "",
    bpm: 100,
    blocks: 4,
    tracks: {},
    kit: null,
  },
  isPlaying: false,
  stepLocation: 0,
};

export const studioSlice = createSlice({
  name: "studio",
  initialState,
  reducers: {
    addTrack: addTrackUseCase,
    addBlocks: addBlocksUseCase,
    removeLastBlock: removeLastBlockUseCase,
    updateStepLocation: updateStepLocationUseCase,
    updateStep: updateStepUseCase,
    muteTrack: muteTrackUseCase,
    updateSong: updateSongUseCase,
    setNewSong: setNewSongUseCase,
  },
});

export const {
  addTrack,
  addBlocks,
  removeLastBlock,
  updateStepLocation,
  updateStep,
  muteTrack,
  updateSong,
  setNewSong,
} = studioSlice.actions;

export const isStepActiveSelector = (
  state: StudioState,
  trackId: string,
  step: number,
): boolean => {
  return state?.song?.tracks[trackId]?.steps[step] ?? false;
};

export default studioSlice.reducer;
