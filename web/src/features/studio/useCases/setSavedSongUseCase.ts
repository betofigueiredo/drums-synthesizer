import { PayloadAction } from "@reduxjs/toolkit";
import { Kit } from "types/kits";
import { StudioTrack, StudioState } from "types/studio";

const setSavedSongUseCase = (
  state: StudioState,
  action: PayloadAction<{
    songName: string;
    blocks: number;
    bpm: number;
    selectedKit: Kit;
    tracks: { [k: string]: StudioTrack };
  }>,
) => {
  state.songName = action.payload.songName;
  state.blocks = action.payload.blocks;
  state.bpm = action.payload.bpm;
  state.selectedKit = action.payload.selectedKit;
  state.tracks = action.payload.tracks;
};

export default setSavedSongUseCase;
