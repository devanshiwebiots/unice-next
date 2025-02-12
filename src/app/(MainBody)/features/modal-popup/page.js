"use client";
import React, { Fragment, useEffect } from "react";
import Header from "../../../../containers/common/header";
import BreadcrumbSection from "../../../../containers/features/breadcrumb-comon-sections/breadcrumb-section";
import CopyrightSection from "../../../../containers/features/footer/common/copyright";
import DefaultFooter from "../../../../containers/features/footer/default-footer";
import ModalSection from "../../../../containers/features/gallery/modal-section";

const ModalPopup = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#000");
    document.body.style.setProperty("--secondary", "#000");
    document.body.style.setProperty("--light", "#252525");
    document.body.style.setProperty("--dark", "#000");
  });

  return (
    <Fragment>
      <Header className="dark" />
      <BreadcrumbSection className="col-12" textRight="text-center" justifyContent="justify-content-center" classDiv="col-12" path="Gallery" title="Modal Popup" style="Modal Popup" />
      <ModalSection />
      <DefaultFooter />
      <CopyrightSection />
    </Fragment>
  );
};

export default ModalPopup;
