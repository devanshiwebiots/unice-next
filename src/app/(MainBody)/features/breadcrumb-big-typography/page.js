"use client";
import React from "react";
import Layout from "../../../../containers/common/common-layout";
import Breadcrubs1 from "../../../../containers/features/breadcrumbs/breadcrumb1";
import Breadcrubs2 from "../../../../containers/features/breadcrumbs/breadcrumb2";
import Breadcrubs3 from "../../../../containers/features/breadcrumbs/breadcrumb3";
import Breadcrubs4 from "../../../../containers/features/breadcrumbs/breadcrumb4";

const BreadcrumbBigTypography = () => (
  <Layout pathList={["home", "elements", "breadcrumb"]} pathTitle="breadcrumb">
    <Breadcrubs1 />
    <Breadcrubs2 />
    <Breadcrubs3 />
    <Breadcrubs4 />
  </Layout>
);

export default BreadcrumbBigTypography;
