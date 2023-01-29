import Head from 'next/head'
import AppLayout from "@/components/Layouts/AppLayout";
import { ConfigProvider } from "antd";

export default function Home() {
  return (
    <>
      <Head>
        <title>Peeper</title>
      </Head>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "green",
          },
        }}
      >
        <AppLayout />
      </ConfigProvider>
    </>
  );
}
