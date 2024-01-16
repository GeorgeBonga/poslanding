/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function Footer() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="https://mutabletech.co.ke/"
                  target="_blank"
                >
                 MUTABLE TECH
                </a>
              </li>
              <li>
                <a
                  href="https://mutabletech.co.ke/"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://mutabletech.co.ke/"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()},All Rights{" "}
            <a
              href="https://mutabletech.co.ke/"
              target="_blank"
            >
             Mutable Tech
            </a>
            . Designed and Developed by {" "}
            <a
              href="https://mutabletech.co.ke/"
              target="_blank"
            >
             Mutable Tech
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
