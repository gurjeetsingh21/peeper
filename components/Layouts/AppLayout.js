import { Layout } from "antd";
const { Content, Footer } = Layout;
import Sidebar from "../Sidebar/Sidebar";
import KpiCards from "../KpiCards.js/KpiCards";

const AppLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout className="site-layout">
        <Content>
          <div className="bg-sidebar-background container text-white">
            <div className="header p-4 bg-gradient-to-r from-header-from to-header-to h-[8rem]">
              <div className="heading flex text-[28px] mb-5">
                Dashboard Overview
              </div>
              <KpiCards />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Peeper ©2023</Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
