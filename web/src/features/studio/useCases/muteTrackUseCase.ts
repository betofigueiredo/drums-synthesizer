import { PayloadAction } from "@reduxjs/toolkit";
import { StudioState } from "types/studio";

const muteTrackUseCase = (
  state: StudioState,
  action: PayloadAction<{ trackId: string }>,
) => {
  state.tracks[action.payload.trackId].muted =
    !state.tracks[action.payload.trackId].muted;
};

export default muteTrackUseCase;
