import { PayloadAction } from "@reduxjs/toolkit";
import { Kit, Track } from "modules/kits/features/kits/kitsSlice";
import { ITrack, StudioState } from "types/studio";

const setNewSongUseCase = (
  state: StudioState,
  action: PayloadAction<{ selectedKit: Kit }>,
) => {
  const tracks = action.payload.selectedKit.tracks.reduce(
    (acc: { [key: string]: ITrack }, cur: Track) => {
      acc[cur.id] = {
        id: cur.id,
        name: cur.name,
        type: cur.type,
        audio: cur.audio,
        volume: 1,
        muted: false,
        steps: {},
      };
      return acc;
    },
    {},
  );
  state.selectedKit = action.payload.selectedKit;
  state.tracks = tracks;
};

export default setNewSongUseCase;
