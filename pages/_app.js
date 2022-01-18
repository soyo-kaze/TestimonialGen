import Layout from "../components/Layout";
import "../public/global.css";

const myApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default myApp;
