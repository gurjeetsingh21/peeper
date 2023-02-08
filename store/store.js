import { configureStore } from "@reduxjs/toolkit";
import {
  registryDatas,
  referralData,
  error,
  registeryContractData,
} from "./slices";

const store = configureStore({
  reducer: {
    registryData: registryDatas.reducer,
    referralData: referralData.reducer,
    registeryContractData: registeryContractData.reducer,
    error: error.reducer,
  },
});

export default store;
