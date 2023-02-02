import React from "react";
import { Layout } from "antd";
const { Content, Footer } = Layout;
import Sidebar from "../Sidebar/Sidebar";
import KpiCards from "../KpiCards.js/KpiCards";
import Body from "../Body/Body";

const AppLayout = () => {
  return (
    <Layout hasSider>
      <Sidebar />
      <Layout className="site-layout">
        <Content className="bg-sidebar-background">
          <div className="text-white">
            <div className="p-4 bg-gradient-to-r from-header-from to-header-to h-[8rem]">
              <div className="heading flex text-[28px] mb-5">
                Dashboard Overview
              </div>
              <KpiCards />
            </div>
            <div className="p-4 pt-16">
              <Body />
            </div>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;

// // <Layout hasSider className="h-[1200px]">
// <Sidebar />
// <Layout>
//   <Content className="bg-sidebar-background">
//     <div className="container text-white">
//       <div className="header p-4 bg-gradient-to-r from-header-from to-header-to h-[8rem]">
//         <div className="heading flex text-[28px] mb-5">
//           Dashboard Overview
//         </div>
//         <KpiCards />
//         <Body />
//       </div>
//     </div>
//   </Content>
//   <Footer style={{ textAlign: "center" }}>Peeper ©2023</Footer>
// </Layout>
// </Layout>
