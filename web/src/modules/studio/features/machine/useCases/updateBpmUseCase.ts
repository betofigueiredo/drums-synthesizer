import { PayloadAction } from "@reduxjs/toolkit";
import { MachineState } from "types/machine";

const updateBpmUseCase = (
  state: MachineState,
  action: PayloadAction<{ bpm: number }>,
) => {
  state.bpm = action.payload.bpm;
};

export default updateBpmUseCase;
