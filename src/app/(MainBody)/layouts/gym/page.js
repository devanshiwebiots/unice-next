"use client";
import Head from "next/head";
import { useEffect } from "react";
// import Custom Components
import Header from "../../../../containers/common/header";
import AboutSection from "../../../../containers/layouts/sections/gym/about";
import BannerSection from "../../../../containers/layouts/sections/gym/banner";
import BrandSection from "../../../../containers/layouts/sections/gym/brand";
import CalculateSection from "../../../../containers/layouts/sections/gym/calculate";
import CounterSection from "../../../../containers/layouts/sections/gym/counter";
import FooterSection from "../../../../containers/layouts/sections/gym/footer";
import FormatSection from "../../../../containers/layouts/sections/gym/format";
import PricingSection from "../../../../containers/layouts/sections/gym/pricing";
import ScheduleSection from "../../../../containers/layouts/sections/gym/schedule";
import TestimonialSection from "../../../../containers/layouts/sections/gym/testimonial";
import TrainerSection from "../../../../containers/layouts/sections/gym/trainer";

const Gym = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#000");
    document.body.style.setProperty("--secondary", "#000");
    document.body.style.setProperty("--light", "#000");
    document.body.style.setProperty("--dark", "#000");
  });

  return (
    <div>
      <Head>
        <title>Gym Layout </title>
      </Head>
      <Header className="gym nav-lg" />
      <BannerSection />
      <AboutSection />
      <ScheduleSection />
      <FormatSection />
      <CounterSection />
      <TrainerSection />
      <TestimonialSection />
      <PricingSection />
      <CalculateSection />
      <BrandSection />
      <FooterSection />
    </div>
  );
};
export default Gym;
