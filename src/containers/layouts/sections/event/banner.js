import { Col, Container, Row } from "reactstrap";
import { Typewriter } from "react-simple-typewriter";
import CountdownComponent from "../../../../containers/common/countdown";

const Banner = ({ router }) => {
  const scrollToRef = (val) => {
    document.querySelector(`#${val}`).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="event header" id="home">
      <div className="header3 bg">
        <div className="event-content">
          <Container>
            <Row>
              <Col xl="6" md="10" className="offset-xl-3 offset-md-1">
                <div className="center-text">
                  <div className="text-center w-100">
                    <div className="h1-margin">
                      <h1>
                        come&nbsp;
                        <span className="typed">
                          <Typewriter words={["unice"]} loop={true} cursor />
                        </span>
                      </h1>
                    </div>
                    <div className="wedding-time">
                      <div>
                        <div className="event-countdown">
                          <CountdownComponent />
                        </div>
                      </div>
                    </div>
                    <h4 className="text-white">
                      <i className="fa fa-map-marker m-r-10 text-white"></i>
                      Zexson Pro, New York, NY 254
                    </h4>
                    <h5 className="header-sub-text text-white">
                      <i className="fa fa-calendar m-r-10"></i>
                      01-04 March 2023
                    </h5>
                    <div className="text-center link-horizontal">
                      <a className=" btn btn-default back-white text-uppercase border-not" href="#">
                        view event details
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {router ? (
          <div className="set-bottom set-abs">
            <a className="center-content down" onClick={() => scrollToRef("booking")}>
              <img alt="" className="scroll-down" src="/assets/images/event/image-down.png" />
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Banner;
