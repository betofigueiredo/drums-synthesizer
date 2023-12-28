import { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../userSlice";

const setInfoUseCase = (state: User, action: PayloadAction<User>) => {
  state.id = action.payload.id;
  state.name = action.payload.name;
  state.email = action.payload.email;
  state.loading = false;
};

export default setInfoUseCase;
