import { PayloadAction } from "@reduxjs/toolkit";
import { MachineState } from "types/machine";

const updateBpmUseCase = (
  state: MachineState,
  action: PayloadAction<number>
) => {
  state.bpm = action.payload;
};

export default updateBpmUseCase;
