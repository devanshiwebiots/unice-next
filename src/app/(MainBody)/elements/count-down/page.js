"use client";
import Layout from "../../../../containers/common/common-layout";
import CountDownSection from "../../../../containers/layouts/sections/event/banner";

const CountDown = () => (
  <Layout pathList={["elements", "countdown"]} pathTitle="elements with countdown">
    <CountDownSection />
  </Layout>
);

export default CountDown;
