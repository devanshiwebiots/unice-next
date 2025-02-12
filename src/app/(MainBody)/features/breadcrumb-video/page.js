"use client"
import React, { Fragment, useEffect } from "react";
import FooterSection from "../../../../containers/common/footer";
import Header from "../../../../containers/common/header";
import BreadcrumbSection from "../../../../containers/features/breadcrumb-comon-sections/breadcrumb-section";
import CounterSection from "../../../../containers/features/breadcrumb-comon-sections/counter-section";
import TeamSection from "../../../../containers/features/breadcrumb-comon-sections/team-section";
import Faq from "../../../../containers/layouts/sections/modern-sass/faq";

const BreadcrumbVideo = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#000");
    document.body.style.setProperty("--secondary", "#000");
    document.body.style.setProperty("--light", "#252525");
    document.body.style.setProperty("--dark", "#000");
  });

  return (
    <Fragment>
      <Header />
      <BreadcrumbSection className="col-12" bgDark="bg-dark video-sec breadcrumb-slider p-0" textRight="text-center" justifyContent="justify-content-center" classDiv="col-12" path="Breadcrumb Style" title="Video Background" style="FEATURES WITH VIDEO-BACKGROUND" setOver="set-over" showcaseType="Video" />
      <TeamSection />
      <CounterSection />
      <Faq />
      <FooterSection />
    </Fragment>
  );
};

export default BreadcrumbVideo;
