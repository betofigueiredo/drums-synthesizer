import { PayloadAction } from "@reduxjs/toolkit";
import { StudioState } from "types/studio";

const updateSongNameUseCase = (
  state: StudioState,
  action: PayloadAction<string>,
) => {
  state.songName = action.payload;
};

export default updateSongNameUseCase;
