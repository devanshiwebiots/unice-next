"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import DetailSecion from "../../../../../containers/blog/card/detail-wrapper";
import Categories from "../../../../../containers/blog/categories";
import Instagram from "../../../../../containers/blog/instagram";
import NewsLetter from "../../../../../containers/blog/newsletter";
import PopularPosts from "../../../../../containers/blog/posts";
import CommonLayout from "../../../../../containers/common/common-layout";

const Detail = () => (
  <CommonLayout pathList={["blog", "blog details", "right sidebar"]} pathTitle="BLOG WITH right-sidebar">
    <section className="agency blog-sec blog-sidebar single_blog_item">
      <Container>
        <Row>
          <DetailSecion className="col-lg-9" />
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

export default Detail;
