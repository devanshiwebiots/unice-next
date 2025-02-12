"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Layout from "../../../../containers/common/common-layout";
import { CreativeWrapperData } from "../../../../database/portfolio/database";
const Creative1 = () => (
  <Layout pathList={["portfolio", "trending layout 1"]} pathTitle="trending layout 1">
    <section className="portfolio-creative portfolio-section p-0">
      <Container fluid={true}>
        {CreativeWrapperData.map((data, i) => {
          return (
            <Row key={i}>
              <Col md="6" className="p-0 isotopeSelector mb-0">
                <img alt="" className="img-fluid" src={data.img} />
              </Col>
              <Col md="6" className="p-0 h-100 my-auto">
                <div className="portfolio-text m-auto text-center">
                  <h2 className="head-text">{data.title}</h2>
                  <p className="head-sub-text">{data.desc}</p>
                  <a className="btn btn-default primary-btn rounded-0" href="#">
                    view more
                  </a>
                </div>
              </Col>
            </Row>
          );
        })}
      </Container>
    </section>
  </Layout>
);

export default Creative1;
