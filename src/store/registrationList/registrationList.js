import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  entities: [],
  status: "idle",
};

export const registrationListSlice = createSlice({
  name: "registrationList",
  initialState,
  reducers: {
    startLoading: () => {
      return {
        entities: [],
        status: "loading",
      };
    },
    successLoading: (_, action) => {
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
    // addUser: (state, action) => {
    //   const {adress, name, email} = action.payload
    //   const id = nanoid()
    //   return { ...state, entities: [ ...state.entities, {id, adress, name, email} ] };
    // },
  },
});

export const registrationListSliceActions = registrationListSlice.actions;