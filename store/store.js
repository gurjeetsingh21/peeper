import { configureStore } from "@reduxjs/toolkit";
import { registryDatas } from "./slices";

const store = configureStore({
  reducer: {
    registryData: registryDatas.reducer,
  },
});

export default store;
