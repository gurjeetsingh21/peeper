import Head from 'next/head'
import AppLayout from "@/components/Layouts/AppLayout";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function Home() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
