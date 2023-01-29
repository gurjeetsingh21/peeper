import HTTP_SERVICE_CALL from "@/HTTP_SERVICE/HTTP_SERVICE_CALL";
import { useState, useEffect } from "react";
import * as Constants from "../Constants";

const useHttp = () => {
  const [data, setData] = useState({});
  const [isSuccess, setIsSuccess] = useState();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const res = await HTTP_SERVICE_CALL(
        Constants.QUERY_NAMES.REGISTRY_DAY_DATAS
      );
      setData(res.data.data);
      setIsSuccess(true);
    } catch (err) {
      setData(err);
      setIsSuccess(false);
    }
  }
  return [isSuccess, data];
};

export default useHttp;
