"use client";
import React from "react";
import Layout from "../../../../containers/common/common-layout";
import BorderSection from "../../../../containers/elements/buttons/border";
import DefaultSection from "../../../../containers/elements/buttons/deault";
import SquareSection from "../../../../containers/elements/buttons/square";
import SquareBorderSection from "../../../../containers/elements/buttons/square-border";

const Button = () => (
  <Layout pathList={["elements", "buttons"]} pathTitle="elements with buttons">
    <DefaultSection />
    <BorderSection />
    <SquareSection />
    <SquareBorderSection />
  </Layout>
);

export default Button;
