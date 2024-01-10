import { PayloadAction } from "@reduxjs/toolkit";
import { Song, StudioState } from "types/studio";

const updateSongUseCase = (
  state: StudioState,
  action: PayloadAction<Partial<Song>>,
) => {
  const { id, name, bpm, blocks, tracks, kit } = action.payload;
  if (id) state.song.id = id;
  if (name) state.song.name = name;
  if (bpm) state.song.bpm = bpm;
  if (blocks) state.song.blocks = blocks;
  if (tracks) state.song.tracks = tracks;
  if (kit) state.song.kit = kit;
};

export default updateSongUseCase;
