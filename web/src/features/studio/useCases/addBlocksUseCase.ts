import { PayloadAction } from "@reduxjs/toolkit";
import { StudioState } from "types/studio";

const addBlocksUseCase = (
  state: StudioState,
  action: PayloadAction<{ blocks: number }>,
) => {
  state.blocks = state.blocks + action.payload.blocks;
};

export default addBlocksUseCase;
