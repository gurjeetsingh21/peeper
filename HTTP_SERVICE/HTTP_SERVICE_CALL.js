import axios from "axios";
import * as Constants from "@/Constants";

const HTTP_SERVICE_CALL = async (graphQuery) => {
  try {
    const res = await axios.post(Constants.REQUEST_GRAPH_URL, {
      query: Constants.GRAPH_QUERY[graphQuery],
    });
    return [res.data.data, true];
  } catch (err) {
    return [err, false];
  }
};

export default HTTP_SERVICE_CALL;
