import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/img/header-img.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/gitttt.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/sumitsingh007/" target="_blank"><img src={navIcon1} alt="linkedin" /></a>
                {/* <a href="#" target="_blank"><img src={navIcon2} alt="facebook" /></a> */}
                <a href="https://www.instagram.com/sumitsingh007/?next=%2F" target="_blank"><img src={navIcon3} alt="instagram" /></a>
                <a href="https://github.com/sumitsingh00" target="_blank"><img src={navIcon4} alt="github" /></a>
            </div>
            <p>Copyright @sumit. THE CODING THUNDER</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
