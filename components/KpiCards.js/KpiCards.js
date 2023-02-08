import { Row, Col } from "antd";
import KpiCard from "@/atoms/Card/KpiCard";
import { calculateValue, calculatePercentChange } from "@/utils/helper";
import { useSelector } from "react-redux";
import BigNumber from "bignumber.js";

const KpiCards = () => {
  const { data } = useSelector((state) => state.registryData);
  var { registeryDayDatas } = data;

  const { data: registeryContractData } = useSelector(
    (state) => state.registeryContractData
  );
  const { registeryContracts } = registeryContractData;
  console.log("====================================");
  console.log({
    registeryContractData: registeryContractData?.registeryContracts,
    registeryContracts,
  });
  console.log("====================================");
  const isLoading = registeryDayDatas && registeryContracts ? false : true;

  return (
    <Row className="gap-x-4 gap-y-4 mb-3 justify-between">
      <Col xs={24} md={11} lg={5}>
        <KpiCard
          name="MATIC Price"
          isLoading={isLoading}
          value={calculateValue(registeryDayDatas, "priceUSD", 1)}
          prefix=""
          percentChange={calculatePercentChange(registeryDayDatas, "priceUSD")}
        />
      </Col>
      <Col xs={24} md={11} lg={5}>
        <KpiCard
          name="Today's Revenue"
          isLoading={isLoading}
          value={calculateValue(registeryDayDatas, "dailyVolumeETH", 1e18)}
          prefix=""
          postfix="MATIC"
          percentChange={calculatePercentChange(
            registeryDayDatas,
            "dailyVolumeETH"
          )}
        />
      </Col>
      <Col xs={24} md={11} lg={5}>
        <KpiCard
          name="Today's Orders"
          isLoading={isLoading}
          value={calculateValue(registeryDayDatas, "dailyUniqueCount", 1)}
          prefix=""
          percentChange={calculatePercentChange(
            registeryDayDatas,
            "dailyUniqueCount"
          )}
        />
      </Col>

      <Col xs={24} md={11} lg={5}>
        <KpiCard
          name="Today's Referrals"
          isLoading={isLoading}
          value={calculateValue(registeryDayDatas, "dailyReferralsCount", 1)}
          prefix=""
          percentChange={calculatePercentChange(
            registeryDayDatas,
            "dailyReferralsCount"
          )}
        />
      </Col>
      <Col xs={24} md={11} lg={5}>
        <KpiCard
          name="Total Mints"
          isLoading={isLoading}
          value={
            (registeryContracts?.length &&
              registeryContracts[0]["totalMintsCount"]) ||
            "0"
          }
          prefix=""
        />
      </Col>
      <Col xs={24} md={11} lg={5}>
        <KpiCard
          name="Total Referrals"
          isLoading={isLoading}
          value={
            (registeryContracts?.length &&
              registeryContracts[0]["totalReferralsCount"]) ||
            "0"
          }
          prefix=""
        />
      </Col>
      <Col xs={24} md={11} lg={5}>
        <KpiCard
          name="Unique Registers"
          isLoading={isLoading}
          value={
            (registeryContracts?.length &&
              registeryContracts[0]["totalUniqueRegistrationCount"]) ||
            "0"
          }
          prefix=""
        />
      </Col>
      <Col xs={24} md={11} lg={5}>
        <KpiCard
          name="Total Volume [ Matic ]"
          isLoading={isLoading}
          value={
            (registeryContracts?.length &&
              new BigNumber(registeryContracts[0]["totalVolumeGeneratedETH"])
                ?.div(1e18)
                ?.toFormat(2)) ||
            "0"
          }
          prefix=""
        />
      </Col>
    </Row>
  );
};

export default KpiCards;
