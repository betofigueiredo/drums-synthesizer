import { PayloadAction } from "@reduxjs/toolkit";
import { StudioState } from "types/studio";

const updateStepLocationUseCase = (
  state: StudioState,
  action: PayloadAction<{ isPlaying: boolean; stepLocation?: number }>,
) => {
  if (action.payload.stepLocation !== undefined) {
    state.stepLocation = action.payload.stepLocation;
  }
  state.isPlaying = action.payload.isPlaying;
};

export default updateStepLocationUseCase;
