import { PayloadAction } from "@reduxjs/toolkit";
import { Kit, KitTrack } from "types/kits";
import { StudioTrack, StudioState } from "types/studio";

const setNewSongUseCase = (
  state: StudioState,
  action: PayloadAction<{ selectedKit: Kit }>,
) => {
  const selectedKitTracks = action.payload.selectedKit.tracks.reduce(
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
      const selectedKitTrack = selectedKitTracks[cur.type];
      acc[selectedKitTrack.id] = {
        id: selectedKitTrack.id,
        order: idx + 1,
        name: selectedKitTrack.name,
        type: selectedKitTrack.type,
        audio: selectedKitTrack.audio,
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

  state.selectedKit = action.payload.selectedKit;
  state.tracks = tracks;
};

export default setNewSongUseCase;
