"use client";
import Head from "next/head";
import { useEffect } from "react";
// import Custom Components
import Header from "../../../../containers/common/header";
import AboutSection from "../../../../containers/layouts/sections/event/about";
import BannerSection from "../../../../containers/layouts/sections/event/banner";
import BlogSection from "../../../../containers/layouts/sections/event/blog";
import BookingSection from "../../../../containers/layouts/sections/event/booking";
import CounterSection from "../../../../containers/layouts/sections/event/counter";
import FooterSection from "../../../../containers/layouts/sections/event/footer";
import GallerySection from "../../../../containers/layouts/sections/event/gallery";
import PricingSection from "../../../../containers/layouts/sections/event/pricing";
import ScheduleSection from "../../../../containers/layouts/sections/event/schedule";
import SpeakerSection from "../../../../containers/layouts/sections/event/speaker";
import SponserSection from "../../../../containers/layouts/sections/event/sponsor";
import SubscribeSection from "../../../../containers/layouts/sections/event/subscribe";
import TestimonialSection from "../../../../containers/layouts/sections/event/testimonial";


const Event = () => {

  useEffect(() => {
    document.body.style.setProperty("--primary", "#e3154f");
    document.body.style.setProperty("--secondary", "#321575");
    document.body.style.setProperty("--light", "#321575");
    document.body.style.setProperty("--dark", "#e3154f");
  });
  return (
    <div>
      <Head>
        <title>Events Layout </title>
      </Head>
      <Header className="event nav-lg" />
      <BannerSection router/>
      <BookingSection />
      <AboutSection />
      <SpeakerSection />
      <SponserSection />
      <ScheduleSection />
      <TestimonialSection />
      <GallerySection />
      <CounterSection />
      <SubscribeSection />
      <PricingSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
};

export default Event;
