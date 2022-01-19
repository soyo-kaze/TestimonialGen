import Layout from "../components/Layout";
import "../public/global.css";
import { DataProvider } from "../components/dataContext";

const myApp = ({ Component, pageProps }) => {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  );
};

export default myApp;
