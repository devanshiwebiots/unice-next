"use client"
import Head from "next/head";
import React, { useEffect } from "react";
// import Custom Components
import AlbumSection from "../../../../containers/layouts/sections/music/album";
import ArtistSection from "../../../../containers/layouts/sections/music/artist";
import BannerSection from "../../../../containers/layouts/sections/music/banner";
import BlogSection from "../../../../containers/layouts/sections/music/blog";
import BookingSection from "../../../../containers/layouts/sections/music/booking";
import CopyrightSection from "../../../../containers/layouts/sections/music/copyright";
import FooterSection from "../../../../containers/layouts/sections/music/footer";
import GallerySection from "../../../../containers/layouts/sections/music/gallery";
import SideSection from "../../../../containers/layouts/sections/music/sideSection";
import SponsorSection from "../../../../containers/layouts/sections/music/sponsor";
import SubscribeSection from "../../../../containers/layouts/sections/music/subscribe";
import TestimonialSection from "../../../../containers/layouts/sections/music/testimonial";
import VideoSection from "../../../../containers/layouts/sections/music/video";
import Header from "../../../../containers/common/header";

const Music = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#223b7b");
    document.body.style.setProperty("--secondary", "#fff");
    document.body.style.setProperty("--light", "#2245a0");
    document.body.style.setProperty("--dark", "#213672");
  });

  return (
    <div>
      <Head>
        <title>Music Layout </title>
      </Head>
      <Header className="music loding-header" />
      <BannerSection />
      <SideSection />
      <AlbumSection />
      <ArtistSection />
      <SponsorSection />
      <GallerySection />
      <VideoSection />
      <BookingSection />
      <BlogSection />
      <SubscribeSection />
      <TestimonialSection />
      <FooterSection />
      <CopyrightSection />
    </div>
  );
};

export default Music;
