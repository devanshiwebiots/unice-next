"use client";
import Layout from "../../../../containers/common/common-layout";
import Subscribe1 from "../../../../containers/layouts/sections/index/subscribe";
import Subscribe2 from "../../../../containers/layouts/sections/modern-sass/subscribe";

const Subscribe = () => (
  <Layout pathList={["elements", "subscribe"]} pathTitle="elements with subscribe">
    <Subscribe1 />
    <Subscribe2 />
  </Layout>
);
export default Subscribe;
