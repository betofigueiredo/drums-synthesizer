import { createSlice } from "@reduxjs/toolkit";
import setKitsUseCase from "./useCases/setKitsUseCase";

export type Track = {
  id: string;
  type: string;
  name: string;
  audio: string;
};

export type Kit = {
  id: string;
  name: string;
  tracks: Track[];
};

export type Kits = {
  list: Kit[];
  loading?: boolean;
};

const initialState: Kits = {
  list: [],
  loading: true,
};

export const kitsSlice = createSlice({
  name: "kits",
  initialState,
  reducers: {
    setKits: setKitsUseCase,
  },
});

export const { setKits } = kitsSlice.actions;

export default kitsSlice.reducer;
