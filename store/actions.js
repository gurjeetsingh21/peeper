import HTTP_SERVICE_CALL from "@/HTTP_SERVICE/HTTP_SERVICE_CALL";
import { registryDatas } from "./slices";
import * as Constants from "@/Constants";

const registryDataActions = registryDatas.actions;

export const fetchRegistryDatas = () => {
  return async (dispatch) => {
    const [data, isSuccess] = await HTTP_SERVICE_CALL(
      Constants.QUERY_NAMES.REGISTRY_DAY_DATAS
    );
    if (isSuccess) {
      dispatch(
        registryDataActions.updateRegistry({
          data,
          isSuccess,
        })
      );
    } else {
      dispatch(
        registryDataActions.updateRegistry({
          data: [],
          isSuccess,
        })
      );
    }
  };
};
