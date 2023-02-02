import useHttp from "@/hooks/useHttp";
import { Row, Col } from "antd";
import KpiCard from "./KpiCard";
import { calculateValue, calculatePercentChange } from "@/utils/helper";
import Error from "../Error/Error";
import { fetchRegistryDatas } from "@/store/actions";
import { useSelector } from "react-redux";

const KpiCards = () => {
  const { data, isSuccess } = useSelector((state) => state.registryData);
  useHttp(fetchRegistryDatas);
  if (isSuccess) {
    var { registeryDayDatas } = data;
  } else {
    return <Error />;
  }
  const isLoading = registeryDayDatas ? false : true;
  if (
    !isLoading &&
    new Date(registeryDayDatas[0].date * 1000).getDate() !==
      new Date().getDate()
  ) {
    registeryDayDatas = [...registeryDayDatas];
    registeryDayDatas.unshift({
      dailyVolumeUSD: "0",
      dailyUniqueCount: "0",
      dailyRegistersCount: "0",
      dailyReferralsCount: "0",
    });
  }
  return (
    <Row className="gap-x-4 gap-y-4 mb-3">
      <Col xs={24} md={11} lg={5}>
        <KpiCard
          name="Today's Revenue"
          isLoading={isLoading}
          value={calculateValue(registeryDayDatas, "dailyVolumeUSD", 10e18)}
          prefix="₹"
          percentChange={calculatePercentChange(
            registeryDayDatas,
            "dailyVolumeUSD"
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
          name="Today's Visitors"
          isLoading={isLoading}
          value={calculateValue(registeryDayDatas, "dailyRegistersCount", 1)}
          prefix=""
          percentChange={calculatePercentChange(
            registeryDayDatas,
            "dailyRegistersCount"
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
    </Row>
  );
};

export default KpiCards;
