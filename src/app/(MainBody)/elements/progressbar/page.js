"use client";
import Layout from "../../../../containers/common/common-layout";
import AboutSection from "../../../../containers/layouts/sections/resume/about";
import ExperienceSection from "../../../../containers/layouts/sections/yoga/experience";

const Progressbar = () => {
  return (
    <div>
      <Layout pathList={["elements", "progress bar"]} pathTitle="elements with progress bar">
        <ExperienceSection />
        <AboutSection />
      </Layout>
    </div>
  );
};

export default Progressbar;
