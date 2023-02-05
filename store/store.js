import { configureStore } from "@reduxjs/toolkit";
import { registryDatas, referralData, error } from "./slices";

const store = configureStore({
  reducer: {
    registryData: registryDatas.reducer,
    referralData: referralData.reducer,
    error: error.reducer,
  },
});

export default store;
