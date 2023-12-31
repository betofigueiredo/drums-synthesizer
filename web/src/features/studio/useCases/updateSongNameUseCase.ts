import { PayloadAction } from "@reduxjs/toolkit";
import { StudioState } from "types/studio";

const updateSongNameUseCase = (
  state: StudioState,
  action: PayloadAction<{ name: string }>,
) => {
  state.songName = action.payload.name;
};

export default updateSongNameUseCase;
