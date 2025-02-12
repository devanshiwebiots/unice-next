"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import DetailSecion from "../../../../../containers/blog/card/detail-wrapper";
import CommonLayout from "../../../../../containers/common/common-layout";

const DetailNoSidebar = () => (
  <CommonLayout pathList={["blog", "blog details", "no sidebar"]} pathTitle="BLOG WITH no-sidebar">
    <section className="agency blog-sec blog-sidebar single_blog_item">
      <Container>
        <Row>
          <DetailSecion className="col-12" />
        </Row>
      </Container>
    </section>
  </CommonLayout>
);

export default DetailNoSidebar;
