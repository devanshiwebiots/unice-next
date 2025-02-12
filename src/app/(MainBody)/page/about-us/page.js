"use client";
// import Custom Components
import Layout from "../../../../containers/common/common-layout";
import Faq from "../../../../containers/layouts/sections/modern-sass/faq";
import AbouSection from "../../../../containers/page/about-us/about";
import CounterSection from "../../../../containers/page/about-us/counter";
import SpeakerSection from "../../../../containers/page/about-us/speaker";
import TestimonialSection from "../../../../containers/page/about-us/testimonial";

const AboutUs = () => (
  <Layout pathList={["pages", "about us"]} pathTitle="about us">
    <AbouSection />
    <TestimonialSection />
    <SpeakerSection />
    <CounterSection />
    <Faq />
  </Layout>
);

export default AboutUs;
