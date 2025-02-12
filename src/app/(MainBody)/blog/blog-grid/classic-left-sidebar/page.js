"use client";
import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { useQuery } from '@tanstack/react-query';
import CardWrapper from "../../../../../containers/blog/card/grid-wrapper";
import Categories from "../../../../../containers/blog/categories";
import Instagram from "../../../../../containers/blog/instagram";
import NewsLetter from "../../../../../containers/blog/newsletter";
import PopularPosts from "../../../../../containers/blog/posts";
import CommonLayout from "../../../../../containers/common/common-layout";
import request from "../../../../../../Utils/AxiosUtils";


const ClassicLeftSidebar = () => {
  const { data, isLoading, refetch } = useQuery(["/blog"], () => request({ url: "/blogs", }), {
    enabled: false,
    refetchOnWindowFocus: false,
    select: (res) => res.data.data,
  });
useEffect(() => {
  isLoading && refetch()
}, [isLoading])

  return (
    <>
      <CommonLayout pathList={["blog", "blog grid view", "full width left sidebar"]} pathTitle="BLOG FULL WIDTH WITH left-SIDEBAR">
        <section className="agency blog blog-sec blog-sidebar">
          <Container>
            <Row>
              <Col lg="9" className="order-lg-2">
                <Row>{data !== undefined ? data.slice(0, 3).map((item, index) => <CardWrapper key={`grid-no-sidebar-${index}`} className="col-12" image={item.image} blogDate={item.createdAt} place={item.place} title={item.title} description={item.description} readUrl={item.readUrl} />) : "!! No Blogs Found"}</Row>
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
};

export default ClassicLeftSidebar;
