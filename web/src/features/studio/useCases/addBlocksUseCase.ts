import { PayloadAction } from "@reduxjs/toolkit";
import { StudioState } from "types/studio";

const addBlocksUseCase = (
  state: StudioState,
  action: PayloadAction<{ blocks: number }>,
) => {
  state.song.blocks = state.song.blocks + action.payload.blocks;
};

export default addBlocksUseCase;
