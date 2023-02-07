import { createSlice } from "@reduxjs/toolkit";

export const registryDatas = createSlice({
  name: "registry data",
  initialState: {
    data: [],
  },
  reducers: {
    updateRegistry: (state, action) => {
      state.data = action.payload?.data;
    },
  },
});

export const referralData = createSlice({
  name: "referral entities",
  initialState: {
    data: [],
  },
  reducers: {
    updateReferralEntities: (state, action) => {
      state.data = action.payload?.data;
    },
  },
});
export const registeryData = createSlice({
  name: "registery entities",
  initialState: {
    data: [],
  },
  reducers: {
    updateRegisteryEntities: (state, action) => {
      state.data = action.payload?.data;
    },
  },
});
export const error = createSlice({
  name: "error",
  initialState: {
    err: "",
    isError: false,
  },
  reducers: {
    throwError: (state, action) => {
      state.err = action.payload.err;
      state.isError = true;
    },
  },
});
