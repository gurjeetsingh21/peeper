import LineChart from "@/atoms/Charts/LineChart";
import BarChart from "@/atoms/Charts/BarChart";
import { useSelector } from "react-redux";
import moment from "moment";
import { Row, Col } from "antd";
import Card from "@/atoms/Card/Card";
import ReferralDetails from "../ReferralDetails/ReferralDetails";

const Body = () => {
  const registryData = useSelector((state) => state.registryData);
  var { registeryDayDatas } = registryData?.data;
  const isLoading = registeryDayDatas ? false : true;

  if (!isLoading) {
    registeryDayDatas = registeryDayDatas
      .map((dayData) => {
        return {
          ...dayData,
          date: moment(dayData.date * 1000).format("DD MMM YY"),
          dailyRegistersCount: parseInt(dayData.dailyRegistersCount),
          dailyUniqueCount: parseInt(dayData.dailyUniqueCount),
          dailyTxns: parseInt(dayData.dailyTxns),
        };
      })
      .reverse();
  }

  return (
    <>
      <Row className="gap-x-4 gap-y-4 mb-3 justify-between">
        <Col xs={24} md={24} lg={15}>
          <Card title="Sales Analytics">
            <LineChart
              isLoading={isLoading}
              data={!isLoading && registeryDayDatas}
              xField="date"
              yField="dailyRegistersCount"
            />
          </Card>
        </Col>
        <Col xs={24} md={24} lg={8}>
          <Card title="Daily Transactions">
            <BarChart
              isLoading={isLoading}
              data={!isLoading && registeryDayDatas.slice(-7)}
              xField="date"
              yField="dailyTxns"
            />
          </Card>
        </Col>
      </Row>
      <Row className="gap-x-4 gap-y-4 mb-3 justify-between">
        <Col xs={24} md={24} lg={12}>
          <ReferralDetails />
        </Col>
      </Row>
      <Row className="gap-x-4 gap-y-4 mb-3">
        <Col xs={24} md={24} lg={24}>
          <Card title="Unique Owners">
            <LineChart
              isLoading={isLoading}
              data={!isLoading && registeryDayDatas}
              xField="date"
              yField="dailyUniqueCount"
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Body;
