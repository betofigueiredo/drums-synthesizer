import { PayloadAction } from "@reduxjs/toolkit";
import { MachineState } from "types/machine";

const muteTrackUseCase = (
  state: MachineState,
  action: PayloadAction<{ trackType: string }>,
) => {
  state.tracks[action.payload.trackType].muted =
    !state.tracks[action.payload.trackType].muted;
};

export default muteTrackUseCase;
