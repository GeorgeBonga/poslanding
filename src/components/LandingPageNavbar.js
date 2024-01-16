import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function LandingPageNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
              href="#pablo"
              id="navbarDropdown"
              tag="a"
              onClick={(e) => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby="navbarDropdown">
              <DropdownItem header tag="a">
                POSMUTABLE
              </DropdownItem>
              <DropdownItem href="https://pos.mutabletech.co.ke/login" >
                Request Demo
              </DropdownItem>
              <DropdownItem href="https://mutabletech.co.ke/" >
                Desktop version
              </DropdownItem>
              <DropdownItem href="https://pos.mutabletech.co.ke/login" >
                Amazing features
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="https://mutabletech.co.ke/" >
                Contact us
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="https://mutabletech.co.ke/">
                Become Partner
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <div className="navbar-translate">
            <NavbarBrand
              href="https://mutabletech.co.ke/"
              target="_blank"
              id="navbar-brand"
            >
              Mutable tech
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Go to mutable main website for other amazing products.
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="https://pos.mutabletech.co.ke/"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   document
                  //     .getElementById("download-section")
                  //     .scrollIntoView();
                  // }}
                >
                  <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                  <p>Download</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>FEATURES</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="https://pos.mutabletech.co.ke/login" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    GET TEST CREDENTIALS
                  </DropdownItem>
                  <DropdownItem
                    href="https://pos.mutabletech.co.ke/signup"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    CREATE ACCOUNT
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="https://pos.mutabletech.co.ke/login"
                  id="upgrade-to-pro"
                  target="_blank"
                >
                  <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                  <p>LOGIN</p>
                </Button>
                <UncontrolledTooltip target="#upgrade-to-pro">
                  Gain access
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://twitter.com/MutableTechEnt?t=Ayzz__Lem62tPpLNDAkU0A&s=09"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://twitter.com/MutableTechEnt?t=Ayzz__Lem62tPpLNDAkU0A&s=09"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.whatsapp.com/product/6953656348088712/254794784462/"
                  target="_blank"
                  id="whatsapp-tooltip"
                >
                  <i className="fab fa-whatsapp"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#whatsapp-tooltip">
                  Chat with us via whatsapp
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default LandingPageNavbar;
