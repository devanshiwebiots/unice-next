"use client";
import { Fragment, useEffect } from "react";
import Header from "../../../../containers/common/header";
import BreadcrumbSection from "../../../../containers/features/breadcrumb-comon-sections/breadcrumb-section";
import CopyrightSection from "../../../../containers/features/footer/common/copyright";
import DefaultFooter from "../../../../containers/features/footer/default-footer";
import Portfolio from "../../../../containers/portfolio/basic";

const ZoomGallery = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#000");
    document.body.style.setProperty("--secondary", "#000");
    document.body.style.setProperty("--light", "#252525");
    document.body.style.setProperty("--dark", "#000");
  });

  return (
    <Fragment>
      <Header className="dark" />
      <BreadcrumbSection className="col-12" textRight="text-center" justifyContent="justify-content-center" classDiv="col-12" path="Gallery" title="Zoom Gallery" style="Zoom Gallery" />
      <Portfolio className="col-lg-3 col-md-4 col-sm-6 isotopeSelector" />
      <DefaultFooter />
      <CopyrightSection />
    </Fragment>
  );
};
export default ZoomGallery;
