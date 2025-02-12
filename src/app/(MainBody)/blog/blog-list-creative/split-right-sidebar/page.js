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

const ListRightSidebar = ({}) => (
  <>
    <CommonLayout pathList={["blog", "blog list creative", "right sidebar"]} pathTitle="BLOG WITH right-SIDEBAR">
      <section className="agency blog blog-sec blog-sidebar  blog-split sider">
        <Container>
          <Row className="ps-0 pe-0">
            <Col lg="9">
              <Row className="split m-0">{BlogsList.length > 0 ? BlogsList.map((item, index) => <CardWrapper key={`grid-no-sidebar-${index}`} className="col-12 blog-sec blog-list p-0" image={item.image} blogDate={item.createdAt} place={item.place} title={item.title} description={item.description} readUrl={item.readUrl} />) : "!! No Blogs Found"}</Row>
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

export default ListRightSidebar;
