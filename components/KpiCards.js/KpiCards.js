import useHttp from "@/hooks/useHttp";
import { Row, Col } from "antd";
import KpiCard from "./KpiCard";
import { calculateValue } from "@/utils/helper";
import Error from "../Error/Error";

const KpiCards = (props) => {
  const [isSuccess, data] = useHttp();
  if (isSuccess) {
    var { registeryDayDatas } = data;
  } else {
    return <Error />;
  }
  const isLoading = registeryDayDatas ? false : true;
  return (
    <Row className="gap-x-4 gap-y-4">
      <Col xs={24} md={11} lg={4}>
        <KpiCard
          name="Today's Revenue"
          isLoading={isLoading}
          value={calculateValue(registeryDayDatas, "dailyVolumeUSD", 10e8)}
          prefix="₹"
          percentChange={4.8}
          isIncrease={true}
        />
      </Col>
      <Col xs={24} md={11} lg={4}>
        <KpiCard
          name="Today's Orders"
          isLoading={isLoading}
          value={calculateValue(registeryDayDatas, "dailyUniqueCount", 1)}
          prefix=""
          percentChange={4.8}
          isIncrease={true}
        />
      </Col>
      <Col xs={24} md={11} lg={4}>
        <KpiCard
          name="Today's Visitors"
          isLoading={isLoading}
          value={calculateValue(registeryDayDatas, "dailyRegistersCount", 1)}
          prefix=""
          percentChange={4.8}
          isIncrease={true}
        />
      </Col>
      <Col xs={24} md={11} lg={4}>
        <KpiCard
          name="Today's Referrals"
          isLoading={isLoading}
          value={calculateValue(registeryDayDatas, "dailyReferralsCount", 1)}
          prefix=""
          percentChange={4.8}
          isIncrease={true}
        />
      </Col>
    </Row>
  );
};

export default KpiCards;
