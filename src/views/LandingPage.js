import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import LandingPageNavbar from "../components/LandingPageNavbar";
import LandingPageHeader from "../components/LandingPageHeader";
import Footer from "../components/Footer";
import CarouselSection from "../components/CarouselSection";
function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <LandingPageNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">
                  Revolutionize Your Retail Experience with Mutable Tech
                  Enterprises POS Prodigy: The Ultimate Point of Sale Solution
                </h2>
                <h5 className="description">
                  Unlock a new era of retail excellence with 'POS Prodigy' from
                  Mutable Tech Enterprises. This cutting-edge Point of Sale
                  software seamlessly integrates fast transactions, real-time
                  inventory tracking, and insightful analytics. Tailored for
                  diverse businesses, it elevates the customer experience and
                  streamlines operations. Join the ranks of thriving businesses,
                  and step into the future of retail with Mutable Tech
                  Enterprises innovation at your fingertips.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/landing2.jpg") + ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Thrilled with Mutable Tech's POS! Seamless transactions
                      enhanced our hotel operations. The innovative system
                      simplified sales and transformed our checkout experience.
                      "{""}
                      <br></br>
                      <small className=" text-dark">
                        <bold>Jesse Samson Osundwa</bold>
                      </small>
                      <br></br>
                      <small>The Herb Restaurant, Sekenani Narok</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/landing.jpg") + ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/landing.jpg") + ")",
                    }}
                  ></div>
                  <h3>
                    Mutable Tech Enterprises Supermarket & Minimart Point Of
                    Sale Solutions
                  </h3>
                  <p>
                    Discover the future of seamless retail transactions with
                    Mutable Tech Enterprises' innovative Minimart and
                    Supermarket Point of Sale (POS) solution. Our cutting-edge
                    software effortlessly integrates card, M-Pesa, and cash
                    transactions, offering businesses a comprehensive and
                    user-friendly platform to streamline their operations. Say
                    goodbye to complex and disjointed payment systems – our POS
                    solution provides a unified and efficient approach to
                    handling diverse transactions. Whether you run a bustling
                    minimart or a thriving supermarket, our software is designed
                    to meet your needs, ensuring a smooth and secure checkout
                    experience for your customers. Elevate your business with
                    Mutable Tech's POS solution – the epitome of convenience,
                    reliability, and sophistication in the world of retail
                    technology.
                  </p>
                  <p>
                    The Mutable Tech POS Software for restaurants is tailor made
                    to help you easily MANAGE & GROW your restaurant business.
                    The POS Software in Kenya is ideal for normal Restaurants,
                    Bars/Lounges/Clubs, Hotels, Fastfood joints, Cafeterias and
                    all types of Hospitality Business. We have customized the
                    restaurant POS system in Kenya to allow efficient and quick
                    ordering by integrating order tokens so that orders print
                    automatically at the Kitchen/Counter/Prep area.
                    Inventory/Stocks management including recipes is also
                    integrated in the system. The POS System is secured to
                    eliminate theft & ensure that staff cannot manipulate sales
                    and gives accurate reports. The POS System is stable to
                    guarantee smooth operations and we also provide ongoing
                    support.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">FEATURES</h2>
            <CarouselSection />
          </Container>
        </div>
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title " md="12">
              CONTACT US
            </h2>

            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
