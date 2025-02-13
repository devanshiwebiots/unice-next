"use client";
import { Component, useEffect } from "react";
import { unstable_batchedUpdates } from "react-dom";
import { Col, Container, Row } from "reactstrap";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../../../../containers/common/header";
unstable_batchedUpdates(() => (console.error = () => {}));
class ErrorBoundary extends Component {
  componentDidCatch(error) {
    if (error.message.includes("ToastContainer")) return;
  }
  render() {
    return this.props.children;
  }
}
const VerticalSlide = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#000");
    document.body.style.setProperty("--secondary", "#000");
    document.body.style.setProperty("--light", "#252525");
    document.body.style.setProperty("--dark", "#000");
  });
  return (
    <ErrorBoundary>
      <Header className="dark position-relative ecommerce" />
      <section className="portfolio multiple-carousel p-0">
        <Container fluid={true} className="p-0">
          <Row>
            <Col xs="12">
              <div className="vertical-slider">
                <Swiper direction={"vertical"} pagination={{ clickable: true }} slidesPerView={1} spaceBetween={0} autoplay={{ delay: 3000 }} modules={[Pagination, Autoplay]} className="mySwiper">
                  {[...Array(4)].map((_, index) => (
                    <SwiperSlide key={index}>
                      <section className="prtfolio-full-screen p-0">
                        <img alt="" className="img-fluid img-to-bg" src={`../assets/images/portfolio/multiple-carousel/${index + 2}.jpg`} />
                      </section>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </ErrorBoundary>
  );
};

export default VerticalSlide;
