import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./SideBar";

function Faq (props) {
  return (
    <Container fluid className="p-0 m-0">
      <Row className="g-0">
        <Sidebar />

        <Col xs={9} md={10} className="p-4 d-flex flex-column justify-content-center align-items-center" 
          style={{ marginLeft: "16.666%", minHeight: "100vh" }}>
          <h1 className="text-center">Frequently Asked Questions</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Faq;