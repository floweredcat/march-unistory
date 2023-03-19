import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
  status: "idle",
};

export const registrationListSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    startLoading: () => {
      return {
        entities: [],
        status: "loading",
      };
    },
    successLoading: (state, action) => {
      const { entities, ids } = action.payload;
      return {
        entities,
        ids,
        status: "success",
      };
    },
    failLoading: () => {
      return {
        entities: [],
        status: "fail",
      };
    },
    addUser: (state) => {
      return { ...state, entities: { ...state.entities } };
    },
  },
});

export const registrationListSliceActions = registrationListSlice.actions;