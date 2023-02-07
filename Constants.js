export const REQUEST_GRAPH_URL =
  "https://api.thegraph.com/subgraphs/name/saurabhburade/ref-v2";

export const GRAPH_QUERY = {
  registryDayDatas: `{
    registeryDayDatas(orderBy:date, orderDirection: desc, first: 15) {
      id,
      date,
      dailyTxns,
      dailyVolumeETH,
      dailyVolumeUSD,
      dailyRegistersCount,
      dailyReferralsCount,
      dailyUniqueCount,
      dailyContinuousUniqueCounts,
      priceUSD
    }
  }`,
  registerReferralEntities: `{
    registerReferralEntities(orderBy: date, orderDirection: desc, first: 5) {
      id,
      referredTo,
      referredBy,
      commission,
      commissionUSD,
      domainName,
      date
    }
  }`,
  registeryContracts: `{
   registeryContracts {
    totalMintsCount
    totalReferralsCount
    totalUniqueRegistrationCount
    totalCommissionGeneratedETH
    totalCommissionGeneratedUSD
    totalVolumeGeneratedETH
    totalVolumeGeneratedUSD
  }
  }`,
};

export const QUERY_NAMES = {
  REGISTRY_DAY_DATAS: "registryDayDatas",
  REGISTER_REFERRAL_ENTITIES: "registerReferralEntities",
  REGISTERY_CONTRACT: "registeryContracts",
};
