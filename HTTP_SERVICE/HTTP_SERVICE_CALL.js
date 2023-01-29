import axios from "axios";
import * as Constants from "@/Constants";

const HTTP_SERVICE_CALL = async (graphQuery) => {
  return axios.post(Constants.REQUEST_GRAPH_URL, {
    query: Constants.GRAPH_QUERY[graphQuery],
  });
};

export default HTTP_SERVICE_CALL;
