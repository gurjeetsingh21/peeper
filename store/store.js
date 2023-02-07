import { configureStore } from "@reduxjs/toolkit";
import { registryDatas, referralData, error ,registeryData} from "./slices";

const store = configureStore({
  reducer: {
    registryData: registryDatas.reducer,
    referralData: referralData.reducer,
    registeryContractData: registeryData.reducer,
    error: error.reducer,
  },
});

export default store;
