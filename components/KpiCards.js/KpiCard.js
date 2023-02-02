import { Skeleton } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const KpiCard = (props) => {
  const { name, prefix, value, percentChange, isLoading } = props;
  if (isLoading) {
    return (
      <div className="rounded-lg w-auto h-25 p-2 bg-gradient-to-br from-kpi-card-from to to-kpi-card-to backdrop-blur-{20px}">
        <Skeleton active paragraph={{ rows: 2, width: "100%" }} />
      </div>
    );
  }
  return (
    <div className="font-poppins rounded-lg w-auto h-24 p-2 bg-gradient-to-br from-kpi-card-from to to-kpi-card-to backdrop-blur-{20px}">
      <h4 className="text-xs font-bold">{name}</h4>
      <h2 className="mb-1.5 mt-1.5 text-lg font-black">{`${prefix} ${value}`}</h2>
      <p className="text-[#d1d1d1] text-xs font-normal">
        <span
          className={`px-2 py-1 text-sm font-black ${
            percentChange.isIncrease
              ? "text-kpi-text-increase bg-kpi-bg-increase"
              : "text-kpi-text-decrease bg-kpi-bg-decrease"
          } rounded-full`}
        >
          {percentChange?.isIncrease ? (
            <ArrowUpOutlined className="rotate-45" />
          ) : (
            <ArrowDownOutlined className="rotate-45" />
          )}{" "}
          {percentChange?.value}%
        </span>{" "}
        from yesterday
      </p>
    </div>
  );
};

export default KpiCard;
