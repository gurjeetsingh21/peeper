import HTTP_SERVICE_CALL from "@/HTTP_SERVICE/HTTP_SERVICE_CALL";
import { registryDatas, referralData, error } from "./slices";
import * as Constants from "@/Constants";

const registryDataActions = registryDatas.actions;
const referralDataActions = referralData.actions;
const errorActions = error.actions;

export const fetchRegistryDatas = () => {
  return async (dispatch) => {
    const [data, isSuccess] = await HTTP_SERVICE_CALL(
      Constants.QUERY_NAMES.REGISTRY_DAY_DATAS
    );
    if (isSuccess) {
      dispatch(
        registryDataActions.updateRegistry({
          data,
        })
      );
    } else {
      dispatch(
        errorActions.throwError({
          err: data,
        })
      );
    }
  };
};

export const fetchReferralData = () => {
  return async (dispatch) => {
    const [data, isSuccess] = await HTTP_SERVICE_CALL(
      Constants.QUERY_NAMES.REGISTER_REFERRAL_ENTITIES
    );
    if (isSuccess) {
      dispatch(
        referralDataActions.updateReferralEntities({
          data,
        })
      );
    } else {
      dispatch(
        errorActions.throwError({
          err: data,
        })
      );
    }
  };
};
