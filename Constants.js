export const REQUEST_GRAPH_URL =
  "https://api.thegraph.com/subgraphs/name/saurabhburade/ref-v2";

export const GRAPH_QUERY = {
  registryDayDatas: `
  {
    registeryDayDatas(orderBy:date, orderDirection: desc) {
      id,
      date,
      dailyVolumeETH,
      dailyVolumeUSD,
      dailyRegistersCount,
      dailyReferralsCount,
      dailyUniqueCount,
      dailyContinuousUniqueCounts,
      priceUSD
    }
  }
    `,
};

export const QUERY_NAMES = {
  REGISTRY_DAY_DATAS: "registryDayDatas",
};
