"use client";
import { Fragment, useEffect } from "react";
import Header from "../../../../containers/common/header";
import BreadcrumbSection from "../../../../containers/features/breadcrumb-comon-sections/breadcrumb-section";
import DownloadSection from "../../../../containers/features/footer/common/download";
import Dark3Section from "../../../../containers/features/footer/dark3";
import Copyright from "../../../../containers/layouts/sections/app/copyright";

const FooterDark3 = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#000");
    document.body.style.setProperty("--secondary", "#000");
    document.body.style.setProperty("--light", "#252525");
    document.body.style.setProperty("--dark", "#000");
  });
  return (
    <Fragment>
      <Header className="dark" />
      <BreadcrumbSection className="col-12" textRight="text-center" justifyContent="justify-content-center" classDiv="col-12" path="Footer Style" title="Footer Creative" style="Footer Creative" />
      <DownloadSection />
      <Dark3Section />
      <Copyright />
    </Fragment>
  );
};

export default FooterDark3;
