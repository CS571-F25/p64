import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./SideBar";
import Chatbox from "./Chatbox";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <Container fluid className="p-0 m-0">
      <Row className="g-0">
        <Sidebar />

        <Col 
          xs={9} 
          md={10} 
          className="p-4 d-flex flex-column justify-content-center align-items-center home-content" 
          style={{ marginLeft: "16.666%", minHeight: "100vh" }}
        >
          <Chatbox>
            <div className="home-container-wrapper">
              <Col className="home-container">
                <h1>Hi! This is ALICE :)</h1>
                <h2>Welcome to my personal website</h2>
                <p>I share my projects, thoughts, and experiences on this website.</p>
                  <p>Feel free to explore and <a href="#/messages">leave a message</a> if you have something to share or comment on!</p>
                <br />
                <br />
                <p>Feel free to visit my <a href="https://github.com/REDY-a" target="_blank" rel="noopener noreferrer"> github profile</a> here.</p>
              </Col>
            </div>
          </Chatbox>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
