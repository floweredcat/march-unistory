import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  isAuthenticated: false,
  status: "idle",
};

export const connectWalletSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  }
});

export const connectWalletSliceActions = connectWalletSlice.actions;
