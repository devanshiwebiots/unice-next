"use client";
import { useEffect } from "react";
import BlogSection from "../../containers/landing/blog";
import DemoSection from "../../containers/landing/demo";
import ElementSection from "../../containers/landing/elements";
import FeaturesSection from "../../containers/landing/features";
import FooterSection from "../../containers/landing/footer";
import GiftSection from "../../containers/landing/git-section";
import Header from "../../containers/landing/header";
import PortfolioSection from "../../containers/landing/portfolio";
import RatSection from "../../containers/landing/rat";
import TestimonialSection from "../../containers/landing/testimonial";
import WhatinsideSection from "../../containers/landing/whatinside";

const Portfolio = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#10266b");
    document.body.style.setProperty("--secondary", "#464545");
    document.body.style.setProperty("--light", "#1F357D");
    document.body.style.setProperty("--dark", "#04185B");
  });
  return (
    <div className="landing-page">
      <Header />
      <GiftSection />
      <DemoSection />
      <PortfolioSection />
      <WhatinsideSection />
      <BlogSection />
      <ElementSection />
      <FeaturesSection />
      <TestimonialSection />
      <RatSection />
      <FooterSection />
    </div>
  );
};

export default Portfolio;
