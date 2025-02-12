"use client";
import Head from "next/head";
import React, { useEffect } from "react";
// import Custom Components
import BannerSection from "../../../../containers/layouts/sections/portfolio-layout/banner";
import Copyright from "../../../../containers/layouts/sections/portfolio-layout/copyright";
import FooterSection from "../../../../containers/layouts/sections/portfolio-layout/footer";
import Section from "../../../../containers/layouts/sections/portfolio-layout/section";
import Header from "../../../../containers/common/header";

const PortfolioLayout = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#000000");
    document.body.style.setProperty("--secondary", "#434345");
    document.body.style.setProperty("--light", "#6851DF");
    document.body.style.setProperty("--dark", "#000000");
  });

  return (
    <div className="agency">
      <Head>
        <title>Portfolio Layout </title>
      </Head>
      <Header className="dark" />
      <BannerSection />
      <Section />
      <FooterSection />
      <Copyright />
    </div>
  );
};

export default PortfolioLayout;
