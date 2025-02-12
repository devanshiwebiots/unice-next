"use client";
import Head from "next/head";
import React, { useEffect } from "react";
// import Custom Components
import BannerSection from "../../../../containers/layouts/sections/modern-sass/banner";
import BuildSection from "../../../../containers/layouts/sections/modern-sass/build";
import ClientSection from "../../../../containers/layouts/sections/modern-sass/client";
import Copyright from "../../../../containers/layouts/sections/modern-sass/copyright";
import FaqSection from "../../../../containers/layouts/sections/modern-sass/faq";
import FeatureSection from "../../../../containers/layouts/sections/modern-sass/feature";
import FooterSection from "../../../../containers/layouts/sections/modern-sass/footer";
import PriceSection from "../../../../containers/layouts/sections/modern-sass/price";
import SubscribeSection from "../../../../containers/layouts/sections/modern-sass/subscribe";
import TestimonialSection from "../../../../containers/layouts/sections/modern-sass/testimonial";
import WorkSection from "../../../../containers/layouts/sections/modern-sass/work";
import Header from "../../../../containers/common/header";

const ModernSass = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#fb3b64");
    document.body.style.setProperty("--secondary", "#071828");
    document.body.style.setProperty("--light", "#071828");
    document.body.style.setProperty("--dark", "#fb3b64");
  });

  return (
    <div>
      <Head>
        <title>Modern Sass Layout </title>
      </Head>
      <Header className="saas1" />
      <BannerSection />
      <FeatureSection />
      <BuildSection />
      <WorkSection />
      <PriceSection />
      <TestimonialSection />
      <SubscribeSection />
      <FaqSection />
      <ClientSection />
      <FooterSection />
      <Copyright />
    </div>
  );
};

export default ModernSass;
