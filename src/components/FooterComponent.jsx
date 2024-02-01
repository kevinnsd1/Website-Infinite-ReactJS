import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div
      className="footer py-5
    "
    >
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold">Infinite Learning</h3>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nihil
              tempore numquam odio deleniti error deserunt, natus amet alias ut?
            </p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 123-4567-8912</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">peson-email@gmail.com</p>
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by{" "}
              <span className="fw-bold">Kevin Satria Darmawan</span> , All Right
              Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
