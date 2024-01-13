import { createSlice } from "@reduxjs/toolkit";
import setInfoUseCase from "./useCases/setInfoUseCase";

export type UserState = {
  id: string;
  name: string;
  email: string;
  loading?: boolean;
};

const initialState: UserState = {
  id: "",
  name: "",
  email: "",
  loading: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setInfo: setInfoUseCase,
  },
});

export const { setInfo } = userSlice.actions;

export default userSlice.reducer;
