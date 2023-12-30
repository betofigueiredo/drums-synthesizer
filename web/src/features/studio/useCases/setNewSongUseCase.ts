import { PayloadAction } from "@reduxjs/toolkit";
import { Kit, KitTrack } from "types/kits";
import { StudioTrack, StudioState } from "types/studio";

const setNewSongUseCase = (
  state: StudioState,
  action: PayloadAction<{ selectedKit: Kit }>,
) => {
  const songBeats = {
    CRASH: [],
    RIDE: [15],
    OPEN_HI_HAT: [],
    CLOSED_HI_HAT: [1, 5, 9, 13],
    HIGH_TOM: [],
    MIDDLE_TOM: [],
    FLOOR_TOM: [],
    SNARE: [5, 13],
    KICK: [1, 3, 4, 7, 11],
  };

  const tracks = action.payload.selectedKit.tracks.reduce(
    (acc: { [key: string]: StudioTrack }, cur: KitTrack, idx: number) => {
      acc[cur.id] = {
        id: cur.id,
        order: idx + 1,
        name: cur.name,
        type: cur.type,
        audio: cur.audio,
        volume: 1,
        muted: false,
        steps: songBeats[cur.type].reduce((acc, cur) => {
          acc[cur] = true;
          return acc;
        }, {}),
      };
      return acc;
    },
    {},
  );
  state.selectedKit = action.payload.selectedKit;
  state.tracks = tracks;
};

export default setNewSongUseCase;
