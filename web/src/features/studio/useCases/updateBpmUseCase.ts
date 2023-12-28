import { PayloadAction } from "@reduxjs/toolkit";
import { StudioState } from "types/studio";

const updateBpmUseCase = (
  state: StudioState,
  action: PayloadAction<{ bpm: number }>,
) => {
  state.bpm = action.payload.bpm;
};

export default updateBpmUseCase;
