"use client";
import { Fragment, useEffect } from "react";
import FooterSection from "../../../../containers/common/footer";
import Header from "../../../../containers/common/header";
import BreadcrumbSection from "../../../../containers/features/breadcrumb-comon-sections/breadcrumb-section";
import CounterSection from "../../../../containers/features/breadcrumb-comon-sections/counter-section";
import TeamSection from "../../../../containers/features/breadcrumb-comon-sections/team-section";
import Faq from "../../../../containers/layouts/sections/modern-sass/faq";

const BreadcrumbLeft = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#000");
    document.body.style.setProperty("--secondary", "#000");
    document.body.style.setProperty("--light", "#252525");
    document.body.style.setProperty("--dark", "#000");
  });
  return (
    <Fragment>
      <Header className="dark" />
      <BreadcrumbSection className="col-6" bgDark="breadcrumb-left" classDiv="col-6" path="Breadcrumb Style" title="Breadcrumb Left" style="Breadcrumb Left" />
      <TeamSection />
      <CounterSection />
      <Faq />
      <FooterSection />
    </Fragment>
  );
};

export default BreadcrumbLeft;
