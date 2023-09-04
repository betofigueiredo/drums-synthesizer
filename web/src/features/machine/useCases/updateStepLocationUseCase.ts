import { PayloadAction } from "@reduxjs/toolkit";
import { MachineState } from "types/machine";

const updateStepLocationUseCase = (
  state: MachineState,
  action: PayloadAction<{ isPlaying: boolean; stepLocation?: number }>,
) => {
  if (action.payload.stepLocation !== undefined) {
    state.stepLocation = action.payload.stepLocation;
  }
  state.isPlaying = action.payload.isPlaying;
};

export default updateStepLocationUseCase;
