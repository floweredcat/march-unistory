import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { registrationListSlice } from "./registrationList/registrationList";

const appReducer = combineReducers({
  registrationList: registrationListSlice.reducer
});

export const store = configureStore({
  reducer: appReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware: any) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export type AppDispatch = typeof store.dispatch
