import { Skeleton } from "antd";

const KpiCard = (props) => {
  const { name, prefix, value, percentChange, isIncrease, isLoading } = props;
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
      <h2 className="mb-2.5 text-lg font-black">{`${prefix} ${value}`}</h2>
      <p className="text-[#d1d1d1] text-xs font-normal">
        <span className="px-4 py-1 text-sm font-black text-[#6BEBA4] rounded-full bg-[#26666333]">
          4.8%
        </span>{" "}
        from yesterday
      </p>
    </div>
  );
};

export default KpiCard;
