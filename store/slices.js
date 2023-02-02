import { createSlice } from "@reduxjs/toolkit";

export const registryDatas = createSlice({
  name: "registry data",
  initialState: {
    data: [],
    isSuccess: true,
  },
  reducers: {
    updateRegistry: (state, action) => {
      state.data = action.payload.data;
      state.isSuccess = action.payload.isSuccess;
    },
  },
});

export const error = createSlice({
  name: "error",
  initialState: {
    err: "",
  },
  reducers: {
    updateError: () => {},
  },
});
