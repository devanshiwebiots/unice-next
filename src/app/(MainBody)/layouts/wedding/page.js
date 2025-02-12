"use client";
import React, { useEffect } from "react";
import Head from "next/head";
// import Custom Components
import CenterLogoHeader from "../../../../containers/common/center-logo-header";
import HeaderSection from "../../../../containers/layouts/sections/wedding/header";
import AboutSection from "../../../../containers/layouts/sections/wedding/about";
import BannerSection from "../../../../containers/layouts/sections/wedding/banner";
import GallerySection from "../../../../containers/layouts/sections/wedding/gallery";
import CountdownSection from "../../../../containers/layouts/sections/wedding/countdown";
import BlogSection from "../../../../containers/layouts/sections/wedding/blog";
import DestinationSection from "../../../../containers/layouts/sections/wedding/destination";
import CounterSection from "../../../../containers/layouts/sections/wedding/counter";
import TestimonialSection from "../../../../containers/layouts/sections/wedding/testimonial";
import BrandSection from "../../../../containers/layouts/sections/wedding/brand";
import SubscribeSection from "../../../../containers/layouts/sections/wedding/subscribe";
import FooterSection from "../../../../containers/layouts/sections/wedding/footer";

const Wedding = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#c0882f");
    document.body.style.setProperty("--secondary", "#595959");
    document.body.style.setProperty("--light", "#BF862D");
    document.body.style.setProperty("--dark", "#ECC878");
  });

  return (
    <div>
      <Head>
        <title>Wedding Layout </title>
      </Head>
      <CenterLogoHeader themeClass="wedding" />
      <HeaderSection />
      <AboutSection />
      <BannerSection />
      <GallerySection />
      <CountdownSection />
      <BlogSection />
      <DestinationSection />
      <CounterSection />
      <TestimonialSection />
      <BrandSection />
      <SubscribeSection />
      <FooterSection />
    </div>
  );
};

export default Wedding;
