import React from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "antd";
const Line = dynamic(
  () => import("@ant-design/plots").then(({ Line }) => Line),
  { ssr: false }
);

const LineChart = ({ isLoading, data, xField, yField }) => {
  if (isLoading) {
    return (
      <div className="rounded-lg p-2 bg-gradient-to-br from-kpi-card-from to to-kpi-card-to backdrop-blur-{20px}">
        <Skeleton active paragraph={{ rows: 5, width: "100%" }} />
      </div>
    );
  }

  const config = {
    data: data,
    withInnerLines: false,
    height: 200,
    padding: "auto",
    xField: xField,
    yField: yField,
    smooth: true,

    lineStyle: {
      stroke: "l(0) 0:#92FE9D 1:#00C9FF",
      lineWidth: 4,
      strokeOpacity: 1,
      shadowColor: "#92FE9D",
      shadowBlur: 20,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      cursor: "pointer",
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

  return (
    <Line
      {...config}
      theme={"dark"}
      // tooltip={{
      //   container: (title, data) => {
      //     return <div className="p-3 ">${title}</div>;
      //   },
      // }}
    />
  );
};

export default LineChart;
