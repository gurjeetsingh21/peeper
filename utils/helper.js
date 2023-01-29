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
