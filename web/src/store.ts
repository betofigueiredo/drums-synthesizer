import { configureStore } from "@reduxjs/toolkit";
import kitsReducer from "modules/kits/features/kits/kitsSlice";
import userReducer from "modules/shared/features/user/userSlice";
import studioReducer from "modules/studio/features/studio/studioSlice";

export const store = configureStore({
  reducer: {
    kits: kitsReducer,
    studio: studioReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
