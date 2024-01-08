import { PayloadAction } from "@reduxjs/toolkit";
import { StudioState } from "types/studio";

const updateSongIdUseCase = (
  state: StudioState,
  action: PayloadAction<string>,
) => {
  state.songId = action.payload;
};

export default updateSongIdUseCase;
