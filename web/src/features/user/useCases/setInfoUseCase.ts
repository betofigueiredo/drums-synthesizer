import { PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../userSlice";
import { User } from "types/user";

const setInfoUseCase = (state: UserState, action: PayloadAction<User>) => {
  state.id = action.payload?.id || "";
  state.name = action.payload.name;
  state.email = action.payload.email;
  state.loading = false;
};

export default setInfoUseCase;
