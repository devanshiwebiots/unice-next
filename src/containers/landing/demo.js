import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
const Demo = () => (
  <section className="app-preview-section" id="pages">
    <Container fluid={true}>
      <div className="position-relative o-hidden">
        <div className="title">
          <h2>+13 Pre Define </h2>
          <h6>demolayouts</h6>
          <hr className="bottom-border" />
        </div>
      </div>
      <Container>
        <Row>
          <Col xl="4" sm="6" className="text-center demo-effects">
            <Link href="/layouts/agency" className="app-preview demo-layouts">
              <div className="trans-section">
                <h4 className="preview-header">Agency Landing </h4>
              </div>
              <div className="layout-images">
                <div className="layout-container image-1"></div>
              </div>
            </Link>
          </Col>
          <Col xl="4" sm="6" className="text-center demo-effects">
            <Link href="/layouts/app1" className="app-preview demo-layouts">
              <div className="trans-section">
                <h4 className="preview-header">Enterprise App Landing </h4>
              </div>
              <div className="layout-images">
                <div className="layout-container image-2"></div>
              </div>
            </Link>
          </Col>
          <Col xl="4" sm="6" className="text-center demo-effects">
            <Link href="/layouts/app2" className="app-preview demo-layouts">
              <div className="trans-section">
                <h4 className="preview-header">Morden App Landing</h4>
              </div>
              <div className="layout-images">
                <div className="layout-container image-3"></div>
              </div>
            </Link>
          </Col>
          <Col xl="4" sm="6" className="text-center demo-effects">
            <Link href="/layouts/event" className="app-preview demo-layouts">
              <div className="trans-section">
                <h4 className="preview-header">Event Landing</h4>
              </div>
              <div className="layout-images">
                <div className="layout-container image-4"></div>
              </div>
            </Link>
          </Col>
          <Col xl="4" sm="6" className="text-center demo-effects">
            <Link href="/layouts/gym" className="app-preview demo-layouts">
              <div className="trans-section">
                <h4 className="preview-header">Gym Landing</h4>
              </div>
              <div className="layout-images">
                <div className="layout-container image-5"></div>
              </div>
            </Link>
          </Col>
          <Col xl="4" sm="6" className="text-center demo-effects">
            <Link href="/layouts/music" className="app-preview demo-layouts">
              <div className="trans-section">
                <h4 className="preview-header">music Landing</h4>
              </div>
              <div className="layout-images">
                <div className="layout-container image-6"></div>
              </div>
            </Link>
          </Col>
          <Col xl="4" sm="6" className="text-center demo-effects">
            <Link href="/layouts/resume" className="app-preview demo-layouts">
              <div className="trans-section">
                <h4 className="preview-header">Resume Landing</h4>
              </div>
              <div className="layout-images">
                <div className="layout-container image-7"></div>
              </div>
            </Link>
          </Col>
          <Col xl="4" sm="6" className="text-center demo-effects">
            <Link href="/layouts/modern-sass" className="app-preview demo-layouts">
              <div className="trans-section">
                <h4 className="preview-header">Enterprise sass Landing</h4>
              </div>
              <div className="layout-images">
                <div className="layout-container image-8"></div>
              </div>
            </Link>
          </Col>
          <Col xl="4" sm="6" className="text-center demo-effects">
            <Link href="/layouts/enterprice-sass" className="app-preview demo-layouts">
              <div className="trans-section">
                <h4 className="preview-header">Modern Sass Landing</h4>
              </div>
              <div className="layout-images">
                <div className="layout-container image-9"></div>
              </div>
            </Link>
          </Col>
          <Col xl="4" sm="6" className="text-center demo-effects">
            <Link href="/layouts/wedding" className="app-preview demo-layouts">
              <div className="trans-section">
                <h4 className="preview-header">Wedding Landing </h4>
              </div>
              <div className="layout-images">
                <div className="layout-container image-10"></div>
              </div>
            </Link>
          </Col>
          <Col xl="4" sm="6" className="text-center demo-effects">
            <Link href="/layouts/yoga" className="app-preview demo-layouts">
              <div className="trans-section">
                <h4 className="preview-header">Yoga Landing</h4>
              </div>
              <div className="layout-images">
                <div className="layout-container image-11"></div>
              </div>
            </Link>
          </Col>
          <Col xl="4" sm="6" className="text-center demo-effects">
            <Link href="/layouts/portfolioLayouts" className="app-preview demo-layouts">
              <div className="trans-section">
                <h4 className="preview-header">Portfolio Metro Landing</h4>
              </div>
              <div className="layout-images">
                <div className="layout-container image-13"></div>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>

    <div className="animat-demo">
      <img src="assets/images/landing/animate-icon/ract.png" className="img-fluid demo-ract1" alt="" />
      <img src="assets/images/landing/animate-icon/squar.png" className="img-fluid demo-squar" alt="" />
      <img src="assets/images/landing/animate-icon/sib-1.png" className="img-fluid demo-sib1" alt="" />
      <img src="assets/images/landing/animate-icon/ract.png" className="img-fluid demo-ract3" alt="" />
    </div>
  </section>
);

export default Demo;
