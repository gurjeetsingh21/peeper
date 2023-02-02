import { Layout, Menu } from "antd";
import { FileOutlined, PieChartOutlined } from "@ant-design/icons";
import Image from "next/image";
import Logo from "@/assets/images/Logo.png";
import { createMenuItem } from "@/utils/helper";

const { Sider } = Layout;

const items = [
  createMenuItem("/", "Overview", "1", <PieChartOutlined />),
  createMenuItem("/", "Analytics", "2", <PieChartOutlined />),
  createMenuItem("/", "Products", "3", <FileOutlined />),
  createMenuItem("/", "Transactions", "4", <FileOutlined />),
  createMenuItem("/", "Reports", "5", <FileOutlined />),
];

const Sidebar = () => {
  return (
    <Sider
      className="overflow-auto h-[100vh] !sticky top-0 left-0 bottom-0"
      collapsible={false}
      width={220}
      breakpoint="lg"
      collapsedWidth={0}
    >
      <div className="px-4 py-4 flex items-center text-white text-[30px] font-medium">
        <Image alt="logo" src={Logo} height="32" />
        <span className="mb-2">Peeper</span>
      </div>
      <div className="text-sidebar-color px-5">Menu</div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        className="px-4"
      />
    </Sider>
  );
};

export default Sidebar;
