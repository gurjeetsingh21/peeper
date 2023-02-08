import dynamic from "next/dynamic";
import { Skeleton } from "antd";
const Column = dynamic(
  () => import("@ant-design/plots").then(({ Column }) => Column),
  { ssr: false }
);

const BarChart = ({ isLoading, data, xField, yField }) => {
  if (isLoading) {
    return (
      <div className="rounded-lg p-2 bg-gradient-to-br from-kpi-card-from to to-kpi-card-to backdrop-blur-{20px}">
        <Skeleton active paragraph={{ rows: 5, width: "100%" }} />
      </div>
    );
  }

  const config = {
    data,
    height: 200,
    xField: xField,
    yField: yField,

    columnStyle: {
      fill: "l(0) 0:#92FE9D 1:#00C9FF",
      stroke: "l(0) 0:#92FE9D 1:#00C9FF",
      strokeOpacity: 1,
      fillOpacity: 2,
      borderRadius: 10,
      shadowColor: "#92FE9D",
      shadowBlur: 5,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      cursor: "pointer",
      radius: [5, 5, 0, 0],
    },
    yAxis: {
      grid: {
        line: {
          style: {
            stroke: "gray",
            lineWidth: 0.3,
            lineDash: [5, 5],
          },
        },
      },
      axisLine: false,
    },
    tooltip: {
      customContent: (title, data) => {
        return `<div class="p-2 text-[14px]">
        
        <p>${title}</p>
        <div class="flex justify-between gap-5 mt-2">

        <p >${data[0] ? data[0].name : ""}</p>
        
        <p>${data[0] ? data[0].value : ""}</p>
        
        </div>
        
        </div>`;
      },
    },
  };
  return <Column {...config} theme={"dark"} />;
};

export default BarChart;
