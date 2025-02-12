"use client";
import React from "react";
import Layout from "../../../../containers/common/common-layout";
import Video4 from "../../../../containers/layouts/sections/agency/video";
import Video1 from "../../../../containers/layouts/sections/index/video";
import Video2 from "../../../../containers/layouts/sections/modern-sass/testimonial";
import Video3 from "../../../../containers/layouts/sections/music/video";

const Video = () => (
  <Layout pathList={["elements", "video"]} pathTitle="elements with video">
    <Video1 />
    <Video2 />
    <Video3 />
    <Video4 />
  </Layout>
);

export default Video;
