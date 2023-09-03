import { PayloadAction } from "@reduxjs/toolkit";
import { ITrackType, MachineState } from "types/machine";

const muteTrackUseCase = (
  state: MachineState,
  action: PayloadAction<{ trackType: ITrackType }>,
) => {
  state.tracks[action.payload.trackType].muted =
    !state.tracks[action.payload.trackType].muted;
};

export default muteTrackUseCase;
