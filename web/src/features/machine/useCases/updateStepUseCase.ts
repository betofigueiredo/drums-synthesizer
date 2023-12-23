import { PayloadAction } from "@reduxjs/toolkit";
import { MachineState } from "types/machine";

const updateStepUseCase = (
  state: MachineState,
  action: PayloadAction<{ trackType: string; step: number }>,
) => {
  const isStepActive =
    !!state.tracks[action.payload.trackType].steps[action.payload.step];
  if (isStepActive) {
    delete state.tracks[action.payload.trackType].steps[action.payload.step];
  } else {
    state.tracks[action.payload.trackType].steps[action.payload.step] = true;
  }
};

export default updateStepUseCase;
