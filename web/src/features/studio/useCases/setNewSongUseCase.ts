import { PayloadAction } from "@reduxjs/toolkit";
import { Kit, KitTrack } from "types/kits";
import { StudioTrack, StudioState } from "types/studio";

const setNewSongUseCase = (
  state: StudioState,
  action: PayloadAction<{ kit: Kit }>,
) => {
  const kitTracks = action.payload.kit.tracks.reduce(
    (acc: { [k: string]: KitTrack }, cur) => {
      acc[cur.type] = cur;
      return acc;
    },
    {},
  );

  const song = {
    tracks: [
      { type: "CRASH", beats: [] },
      { type: "RIDE", beats: [15] },
      { type: "OPEN_HI_HAT", beats: [] },
      { type: "CLOSED_HI_HAT", beats: [1, 5, 9, 13] },
      { type: "HIGH_TOM", beats: [] },
      { type: "MIDDLE_TOM", beats: [] },
      { type: "FLOOR_TOM", beats: [] },
      { type: "SNARE", beats: [5, 13] },
      { type: "KICK", beats: [1, 3, 4, 7, 11] },
    ],
  };

  const tracks = song.tracks.reduce(
    (acc: { [k: string]: StudioTrack }, cur, idx: number) => {
      const kitTrack = kitTracks[cur.type];
      acc[kitTrack.id] = {
        id: kitTrack.id,
        order: idx + 1,
        name: kitTrack.name,
        type: kitTrack.type,
        audio: kitTrack.audio,
        volume: 1,
        muted: false,
        steps: cur.beats.reduce((acc: { [k: string]: boolean }, cur) => {
          acc[cur] = true;
          return acc;
        }, {}),
      };
      return acc;
    },
    {},
  );

  state.song.kit = action.payload.kit;
  state.song.tracks = tracks;
};

export default setNewSongUseCase;
