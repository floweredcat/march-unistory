import { combineReducers, configureStore } from "@reduxjs/toolkit";

const appReducer = combineReducers({
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
