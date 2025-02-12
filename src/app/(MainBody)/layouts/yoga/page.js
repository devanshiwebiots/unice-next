"use client";
import React, { useEffect } from "react";
import Head from "next/head";
// import Custom Components
import Header from "../../../../containers/common/center-logo-header";
import BannerSection from "../../../../containers/layouts/sections/yoga/banner";
import ExperienceSection from "../../../../containers/layouts/sections/yoga/experience";
import ScheduleSection from "../../../../containers/layouts/sections/yoga/schedule";
import TestimonialSection from "../../../../containers/layouts/sections/yoga/testimonial";
import ExpertSection from "../../../../containers/layouts/sections/yoga/expert";
import PricingSection from "../../../../containers/layouts/sections/yoga/pricing";
import SubscribeSection from "../../../../containers/layouts/sections/yoga/subscribe";
import BlogSection from "../../../../containers/layouts/sections/yoga/blog";
import EventSection from "../../../../containers/layouts/sections/yoga/event";
import BrandSection from "../../../../containers/layouts/sections/yoga/brand";
import FooterSection from "../../../../containers/layouts/sections/yoga/footer";

const Yoga = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#774ddd");
    document.body.style.setProperty("--secondary", "#434345");
    document.body.style.setProperty("--light", "#6851DF");
    document.body.style.setProperty("--dark", "#BA38D2");
  });

  return (
    <div>
      <Head>
        <title>Yoga Layout </title>
      </Head>
      <Header themeClass="yoga" />
      <BannerSection />
      <ExperienceSection />
      <ScheduleSection />
      <ExpertSection />
      <TestimonialSection />
      <PricingSection />
      <SubscribeSection />
      <BlogSection />
      <EventSection />
      <BrandSection />
      <FooterSection />
    </div>
  );
};

export default Yoga;
