import { createSlice } from "@reduxjs/toolkit";
import { StudioState } from "types/studio";
import addTrackUseCase from "./useCases/addTrackUseCase";
import updateStepLocationUseCase from "./useCases/updateStepLocationUseCase";
import updateStepUseCase from "./useCases/updateStepUseCase";
import updateBpmUseCase from "./useCases/updateBpmUseCase";
import muteTrackUseCase from "./useCases/muteTrackUseCase";
import setNewSongUseCase from "./useCases/setNewSongUseCase";
import addBlocksUseCase from "./useCases/addBlocksUseCase";
import removeLastBlockUseCase from "./useCases/removeLastBlockUseCase";
import updateSongNameUseCase from "./useCases/updateSongNameUseCase";
import setSavedSongUseCase from "./useCases/setSavedSongUseCase";
import updateSongIdUseCase from "./useCases/updateSongIdUseCase";

const initialState: StudioState = {
  songId: "",
  songName: "",
  selectedKit: null,
  bpm: 100,
  blocks: 4,
  isPlaying: false,
  stepLocation: 0,
  tracks: {},
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
    updateBpm: updateBpmUseCase,
    muteTrack: muteTrackUseCase,
    setNewSong: setNewSongUseCase,
    setSavedSong: setSavedSongUseCase,
    updateSongName: updateSongNameUseCase,
    updateSongId: updateSongIdUseCase,
  },
});

export const {
  addTrack,
  addBlocks,
  removeLastBlock,
  updateStepLocation,
  updateStep,
  updateBpm,
  muteTrack,
  setNewSong,
  setSavedSong,
  updateSongName,
  updateSongId,
} = studioSlice.actions;

export const isStepActiveSelector = (
  state: StudioState,
  trackId: string,
  step: number,
): boolean => {
  return state?.tracks[trackId]?.steps[step] ?? false;
};

export default studioSlice.reducer;
