"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { BlogsList } from "../../../../../database/blog/database";
// import Custom Components
import CardWrapper from "../../../../../containers/blog/card/list-wrapper";
import Categories from "../../../../../containers/blog/categories";
import Instagram from "../../../../../containers/blog/instagram";
import NewsLetter from "../../../../../containers/blog/newsletter";
import PopularPosts from "../../../../../containers/blog/posts";
import CommonLayout from "../../../../../containers/common/common-layout";

const ListLeftSidebar = ({}) => (
  <>
    <CommonLayout pathList={["blog", "blog list view", "left sidebar"]} pathTitle="BLOG WITH LEFT-SIDEBAR">
      <section className="agency blog blog-sec blog-sidebar  blog-list sider">
        <Container>
          <Row className="ps-0 pe-0">
            <Col lg="9" className="order-lg-2">
              <div>{BlogsList.length > 0 ? BlogsList.map((item, index) => <CardWrapper key={`grid-no-sidebar-${index}`} className="col-12 blog-sec blog-list" image={item.image} blogDate={item.createdAt} place={item.place} title={item.title} description={item.description} readUrl={item.readUrl} />) : "!! No Blogs Found"}</div>
            </Col>
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
  </>
);

export default ListLeftSidebar;
