"use client";
import { Fragment, useEffect } from "react";
import FooterSection from "../../../../containers/common/footer";
import Header from "../../../../containers/common/header";
import BreadcrumbSection from "../../../../containers/features/breadcrumb-comon-sections/breadcrumb-section";
import CounterSection from "../../../../containers/features/breadcrumb-comon-sections/counter-section";
import TeamSection from "../../../../containers/features/breadcrumb-comon-sections/team-section";
import Faq from "../../../../containers/layouts/sections/modern-sass/faq";

const BreadcrumbBg = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#000");
    document.body.style.setProperty("--secondary", "#000");
    document.body.style.setProperty("--light", "#252525");
    document.body.style.setProperty("--dark", "#000");
  });

  return (
    <Fragment>
      <Header />
      <BreadcrumbSection className="col-12" bgDark="bg1 bg-dark" textRight="text-center" justifyContent="justify-content-center" classDiv="col-12" path="Breadcrumb Style" title="With Background" style="FEATURES WITH BACKGROUND" />
      <TeamSection />
      <CounterSection />
      <Faq />
      <FooterSection />
    </Fragment>
  );
};

export default BreadcrumbBg;
