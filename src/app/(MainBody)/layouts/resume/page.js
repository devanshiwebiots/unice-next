"use client";
import Head from "next/head";
import React, { useEffect } from "react";
// import Custom Components
import Header from "../../../../containers/common/header";
import AboutSection from "../../../../containers/layouts/sections/resume/about";
import BannerSection from "../../../../containers/layouts/sections/resume/banner";
import CounterSection from "../../../../containers/layouts/sections/resume/counter";
import FooterSection from "../../../../containers/layouts/sections/resume/footer";
import PricingSection from "../../../../containers/layouts/sections/resume/pricing";
import ScheduleSection from "../../../../containers/layouts/sections/resume/schedule";
import Section from "../../../../containers/layouts/sections/resume/section";
import ServiceSection from "../../../../containers/layouts/sections/resume/services";
import SubscribeSection from "../../../../containers/layouts/sections/resume/subscribe";

const Resume = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#1f232c");
    document.body.style.setProperty("--secondary", "#676767");
    document.body.style.setProperty("--light", "#000");
    document.body.style.setProperty("--dark", "#000");
  });

  return (
    <div>
      <Head>
        <title>Resume Layout </title>
      </Head>
      <Header className="dark" />
      <BannerSection />
      <AboutSection />
      <ServiceSection />
      <Section />
      <CounterSection />
      <ScheduleSection />
      <PricingSection />
      <SubscribeSection />
      <FooterSection />
    </div>
  );
};

export default Resume;
