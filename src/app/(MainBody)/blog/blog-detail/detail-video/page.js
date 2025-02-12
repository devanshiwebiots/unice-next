"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import DetailSecion from "../../../../../containers/blog/card/detail-wrapper";
import Categories from "../../../../../containers/blog/categories";
import Instagram from "../../../../../containers/blog/instagram";
import NewsLetter from "../../../../../containers/blog/newsletter";
import PopularPosts from "../../../../../containers/blog/posts";
import CommonLayout from "../../../../../containers/common/common-layout";

const DetailVideo = () => (
  <CommonLayout pathList={["blog", "blog details", "Video Layout"]} pathTitle="BLOG WITH Video-Layout">
    <section className="agency blog-sec blog-sidebar single_blog_item videos">
      <Container>
        <Row>
          <DetailSecion className="col-lg-9" showcaseType="Video" />
          <Col lg="3">
            <div className="blog-side">
              <Categories />
              <PopularPosts />
              <NewsLetter />
              <Instagram />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </CommonLayout>
);

export default DetailVideo;
