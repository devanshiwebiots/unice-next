"use client";
import React from "react";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";
import { Col, Container, Row } from "reactstrap";
// import Custom Components
import Layout from "../../../../containers/common/common-layout";

const FAQ = () => {
  const DummyContent1 = () => <p>No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is. No one cares about products. People care about ideas.</p>;

  return (
    <Layout pathList={["pages", "faqs"]} pathTitle="Pages With FAQS">
      <section className="saas1 faq testimonial-bg inner-container" id="faq">
        <Container>
          <Row>
            <Col md="8">
              <div className="faq-block">
                <div>
                  <h3 className="frequent-text">Frequently Asked Questions</h3>
                  <h6>{"Our users are impatient. They're probably distracted too. Keep it simple and beautiful, fun and functional. Clean aesthetics supported by a strong concept is what we stand for."}</h6>
                  <Accordion atomic={true}>
                    <AccordionItem className="card-header bg-primary accordion-item" title="Do I need to make a payment?">
                      <DummyContent1 />
                    </AccordionItem>
                    <AccordionItem className="card-header bg-primary accordion-item" title="Do I need to make a payment?">
                      <DummyContent1 />
                    </AccordionItem>
                    <AccordionItem className="card-header bg-primary accordion-item" title="Do I need to make a payment?">
                      <DummyContent1 />
                    </AccordionItem>
                    <AccordionItem className="card-header bg-primary accordion-item" title="Do I need to make a payment?">
                      <DummyContent1 />
                    </AccordionItem>
                    <AccordionItem className="card-header bg-primary" title="Do I need to make a payment?">
                      <DummyContent1 />
                    </AccordionItem>
                  </Accordion>
                  <h6 className="link">
                    Still have a question? Reach out to us: <a>demo@123.com</a>
                  </h6>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="faq-img-block">
                <img alt="faq-person" className="img-fluid" src="/assets/images/saas1/faq-img.png" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default FAQ;
