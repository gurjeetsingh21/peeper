import { createSlice } from "@reduxjs/toolkit";

export const registryDatas = createSlice({
  name: "registry data",
  initialState: {
    data: [],
  },
  reducers: {
    updateRegistry: (state, action) => {
      state.data = action.payload?.data;
      state.isSuccess = action.payload?.isSuccess;
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
      state.isSuccess = action.payload?.isSucces;
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
