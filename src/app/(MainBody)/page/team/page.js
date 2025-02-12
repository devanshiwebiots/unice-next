"use client";
// import Custom Components
import Layout from "../../../../containers/common/common-layout";
import ArtistSection from "../../../../containers/layouts/sections/music/artist";
import AgencySection from "../../../../containers/page/team/team-section/agency";
import AppSection from "../../../../containers/page/team/team-section/app";
import SpeakerSection from "../../../../containers/page/team/team-section/speaker";

const TeamSection = () => {
  return (
    <div>
      <Layout pathList={["pages", "team", "team"]} pathTitle="pages with team">
        <SpeakerSection />
        <ArtistSection />
        <AppSection />
        <AgencySection />
      </Layout>
    </div>
  );
};

export default TeamSection;
