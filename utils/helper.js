import Link from "next/link";

export function createMenuItem(menuItemLink, label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label: <Link href={menuItemLink}>{label}</Link>,
  };
}

export const calculateValue = (registryDayDatas, key, reduce) =>
  registryDayDatas && parseInt(registryDayDatas[0][key]) / reduce;

export const calculatePercentChange = (registryDayDatas, key) => {
  if (registryDayDatas && parseInt(registryDayDatas[1][key]) === 0) {
    return {
      value: parseInt(registryDayDatas[0][key]) * 100,
      isIncrease: true,
    };
  }
  const value =
    registryDayDatas &&
    (
      ((parseInt(registryDayDatas[0][key]) -
        parseInt(registryDayDatas[1][key])) /
        parseInt(registryDayDatas[1][key])) *
      100
    ).toFixed(2);
  return { value: Math.abs(value), isIncrease: value > 0 };
};
