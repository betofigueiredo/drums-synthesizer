import { PayloadAction } from "@reduxjs/toolkit";
import { StudioState } from "types/studio";

const updateStepUseCase = (
  state: StudioState,
  action: PayloadAction<{ trackId: string; step: number }>,
) => {
  const isStepActive =
    !!state.tracks[action.payload.trackId].steps[action.payload.step];
  if (isStepActive) {
    delete state.tracks[action.payload.trackId].steps[action.payload.step];
  } else {
    state.tracks[action.payload.trackId].steps[action.payload.step] = true;
  }
};

export default updateStepUseCase;
