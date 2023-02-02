import LineChart from "../Charts/LineChart";
import { useSelector } from "react-redux";
import Error from "../Error/Error";
import moment from "moment";
import { Row, Col } from "antd";

const Body = () => {
  const { data, isSuccess } = useSelector((state) => state.registryData);
  if (isSuccess) {
    var { registeryDayDatas } = data;
  } else {
    return <Error />;
  }
  const isLoading = registeryDayDatas ? false : true;
  if (!isLoading) {
    registeryDayDatas = registeryDayDatas
      .map((dayData) => {
        return {
          ...dayData,
          date: moment(dayData.date * 1000).format("DD MMM YY"),
          dailyRegistersCount: parseInt(dayData.dailyRegistersCount),
          dailyUniqueCount: parseInt(dayData.dailyUniqueCount),
        };
      })
      .reverse();
  }

  return (
    <>
      <Row className="gap-x-4 gap-y-4 mb-3">
        <Col xs={24} md={24} lg={15}>
          <div className="rounded-lg h-[270px] p-4 bg-gradient-to-br from-kpi-card-from to to-kpi-card-to backdrop-blur-{20px}">
            <div className="">
              <h2 className="font-poppins text-base font-extrabold mb-3">
                Sales Analytics
              </h2>
              <LineChart
                isLoading={isLoading}
                data={!isLoading && registeryDayDatas}
                xField="date"
                yField="dailyRegistersCount"
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="gap-x-4 gap-y-4 mb-3">
        <Col xs={24} md={24} lg={24}>
          <div className="rounded-lg h-[270px] p-4 bg-gradient-to-br from-kpi-card-from to to-kpi-card-to backdrop-blur-{20px}">
            <div className="">
              <h2 className="font-poppins text-base font-extrabold mb-3">
                Unique Owners
              </h2>
              <LineChart
                isLoading={isLoading}
                data={!isLoading && registeryDayDatas}
                xField="date"
                yField="dailyUniqueCount"
              />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Body;
