import { PayloadAction } from "@reduxjs/toolkit";
import { Kits, Kit } from "../kitsSlice";

const setKitsUseCase = (state: Kits, action: PayloadAction<Kit[]>) => {
  state.list = action.payload;
  state.loading = false;
};

export default setKitsUseCase;
