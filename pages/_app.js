import "@/styles/globals.scss";
import { Button, ConfigProvider, theme } from "antd";

export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,

        token: {
          colorPrimary: "red",
        },
        components: {
          Radio: {
            colorPrimary: "#00b96b",
          },
          Button: {
            colorPrimary: "blue-1",
            colorBgBase: "blue-1",
            colorBgContainer: "blue-1",
          },
        },
      }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
