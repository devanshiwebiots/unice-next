"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import Header from "../../../../containers/common/header";
import BannerSection from "../../../../containers/layouts/sections/agency/banner";
import AboutSection from "../../../../containers/layouts/sections/agency/about";
import ServiceSection from "../../../../containers/layouts/sections/agency/service";
import VideoSection from "../../../../containers/layouts/sections/agency/video";
import WorkSection from "../../../../containers/layouts/sections/agency/work";
import PricingSection from "../../../../containers/layouts/sections/agency/pricing";
import ExpertSection from "../../../../containers/layouts/sections/agency/expert";
import TestimonialSection from "../../../../containers/layouts/sections/agency/testimonial";
import BlogSection from "../../../../containers/layouts/sections/agency/blog";
import FooterSection from "../../../../containers/layouts/sections/agency/footer";

const Agency = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#10266b");
    document.body.style.setProperty("--secondary", "#464545");
    document.body.style.setProperty("--light", "#1F357D");
    document.body.style.setProperty("--dark", "#04185B");
  });

  return (
    <div className="theme-color">
      <Head>
        <title>Agency </title>
        <meta name="Agency Layout" content="" />
      </Head>
      <Header className="agency" />
      <BannerSection />
      <AboutSection />
      <ServiceSection />
      <VideoSection />
      <WorkSection />
      <PricingSection />
      <ExpertSection />
      <TestimonialSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
};

export default Agency;
