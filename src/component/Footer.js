import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-3">
      <Container>
        <Row>
          <Col lg={3}>
            <h5>Company Name</h5>
            <p className="text-muted">1234 Street Name, City, State ZIP Code</p>
            <p className="text-muted">Phone: +1-555-1234</p>
            <p className="text-muted">Email: info@companyname.com</p>
          </Col>
          <Col lg={3}>
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Laptops</a>
              </li>
              <li>
                <a href="#">Desktops</a>
              </li>
              <li>
                <a href="#">Monitors</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <h5>Information</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <h5>Connect with Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </Col>
          <Col lg={12} className="text-center ">
            <p className="text-light">© 2021 ECOM. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
