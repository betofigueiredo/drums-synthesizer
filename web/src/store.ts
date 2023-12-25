import { configureStore } from "@reduxjs/toolkit";
import kitsReducer from "modules/kits/features/kits/kitsSlice";
import userReducer from "modules/shared/features/user/userSlice";
import machineReducer from "modules/studio/features/machine/machineSlice";

export const store = configureStore({
  reducer: {
    kits: kitsReducer,
    machine: machineReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
