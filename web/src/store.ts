import { configureStore } from "@reduxjs/toolkit";
import machineReducer from "./features/machine/machineSlice";

export const store = configureStore({
  reducer: {
    machine: machineReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
