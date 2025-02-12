"use client";
import Head from "next/head";
import React, { useEffect } from "react";
// import Custom Components
import Header from "../../../../containers/common/header";
import BannerSection from "../../../../containers/layouts/sections/enterprice-sass/banner";
import BrandSection from "../../../../containers/layouts/sections/enterprice-sass/brand";
import BusinessSection from "../../../../containers/layouts/sections/enterprice-sass/business";
import FeatureSection from "../../../../containers/layouts/sections/enterprice-sass/feature";
import FooterSection from "../../../../containers/layouts/sections/enterprice-sass/footer";
import PricingSection from "../../../../containers/layouts/sections/enterprice-sass/pricing";
import ServiceSection from "../../../../containers/layouts/sections/enterprice-sass/service";
import SliderSection from "../../../../containers/layouts/sections/enterprice-sass/slider";
import TestimonialSection from "../../../../containers/layouts/sections/enterprice-sass/testimonial";

const EnterpriceSass = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#844adb");
    document.body.style.setProperty("--secondary", "#071828");
    document.body.style.setProperty("--light", "#5E57EA");
    document.body.style.setProperty("--dark", "#9647DB");
  });

  return (
    <div>
      <Head>
        <title>Enterprise Sass Layout </title>
      </Head>
      <Header className="saas2" />
      <BannerSection />
      <FeatureSection />
      <BusinessSection />
      <ServiceSection />
      <SliderSection />
      <PricingSection />
      <TestimonialSection />
      <BrandSection />
      <FooterSection />
    </div>
  );
};

export default EnterpriceSass;
