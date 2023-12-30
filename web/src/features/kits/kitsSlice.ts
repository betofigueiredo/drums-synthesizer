import { createSlice } from "@reduxjs/toolkit";
import setKitsUseCase from "./useCases/setKitsUseCase";
import { KitsState } from "types/kits";

const initialState: KitsState = {
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
