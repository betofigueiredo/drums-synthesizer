import { configureStore } from "@reduxjs/toolkit";
import kitsReducer from "features/kits/kitsSlice";
import userReducer from "features/user/userSlice";
import studioReducer from "features/studio/studioSlice";

export const store = configureStore({
  reducer: {
    kits: kitsReducer,
    studio: studioReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
