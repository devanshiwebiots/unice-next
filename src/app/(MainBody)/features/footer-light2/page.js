"use client";
import React, { Fragment, useEffect } from "react";
import Header from "../../../../containers/common/header";
import BreadcrumbSection from "../../../../containers/features/breadcrumb-comon-sections/breadcrumb-section";
import Light2Section from "../../../../containers/features/footer/light2";
import DownloadSection from "../../../../containers/features/footer/common/download";
import CopyrightSection from "../../../../containers/features/footer/common/copyright";

const FooterLight2 = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#000");
    document.body.style.setProperty("--secondary", "#000");
    document.body.style.setProperty("--light", "#252525");
    document.body.style.setProperty("--dark", "#000");
  });

  return (
    <Fragment>
      <Header className="dark" />
      <BreadcrumbSection className="col-12" textRight="text-center" justifyContent="justify-content-center" classDiv="col-12" path="Footer Style" title="Footer dark Light" style="Footer dark Light" />
      <DownloadSection />
      <Light2Section />
      <CopyrightSection />
    </Fragment>
  );
};

export default FooterLight2;
