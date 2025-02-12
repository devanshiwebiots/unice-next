"use client";
import React from "react";
import Layout from "../../../../containers/common/common-layout";
import Service4 from "../../../../containers/layouts/sections/agency/service";
import Service3 from "../../../../containers/layouts/sections/app/services";
import Service1 from "../../../../containers/layouts/sections/index/services";
import Service2 from "../../../../containers/layouts/sections/modern-sass/feature";

const Service = () => (
  <Layout pathList={["elements", "service"]} pathTitle="elements with service">
    <Service1 />
    <div className="inner-service">
      <Service2 />
    </div>
    <Service3 />
    <Service4 />
  </Layout>
);

export default Service;
