"use client";
import React from "react";
import Layout from "../../../../containers/common/common-layout";
import Counter1 from "../../../../containers/layouts/sections/resume/counter";
import Counter2 from "../../../../containers/layouts/sections/gym/counter";
import Counter3 from "../../../../containers/layouts/sections/wedding/counter";
import Counter4 from "../../../../containers/layouts/sections/event/counter";

const Counter = () => (
  <Layout pathList={["elements", "counter"]} pathTitle="elements with counter">
    <Counter1 />
    <Counter2 />
    <Counter3 />
    <Counter4 />
  </Layout>
);

export default Counter;
