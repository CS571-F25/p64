import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ChevronDown, ChevronUp } from "lucide-react";
import Sidebar from "./SideBar";
import AboutMeWork from "./AboutMeWork";
import "./AboutMe.css";

function AboutMe() {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortIntro = "Hi, I'm Alice. I'm an UW Madison student majoring in Computer Science. On this page, I'll share some of the personal projects I've made, including modeling, programming, and design.";
  
  const fullIntro = "Hi, I'm Alice. I'm an UW Madison student majoring in Computer Science. On this page, I'll share some of the personal projects I've made, including modeling, programming, and design. I specialize in web development and enjoy working with modern technologies like React, Node.js, and more. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying curious about the ever-evolving world of technology.";

  // Your projects data - customize with your actual projects
  const works = [
    {
      id: "project-1",
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration and real-time inventory management.",
      image: "https://via.placeholder.com/400x300",
      tags: ["React", "Node.js", "MongoDB"],
      category: "Web Development"
    },
    {
      id: "project-2",
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team collaboration features.",
      image: "https://via.placeholder.com/400x300",
      tags: ["React", "Firebase", "Material-UI"],
      category: "Full Stack"
    },
    {
      id: "project-3",
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts and historical data visualization.",
      image: "https://via.placeholder.com/400x300",
      tags: ["JavaScript", "API", "Charts.js"],
      category: "Frontend"
    },
    {
      id: "project-4",
      title: "Portfolio Website",
      description: "Modern portfolio website with smooth animations and responsive design.",
      image: "https://via.placeholder.com/400x300",
      tags: ["React", "CSS", "Bootstrap"],
      category: "Design"
    },
    {
      id: "project-5",
      title: "Social Media Analytics",
      description: "Analytics dashboard for tracking social media metrics and engagement rates.",
      image: "https://via.placeholder.com/400x300",
      tags: ["Python", "Django", "D3.js"],
      category: "Data Science"
    },
    {
      id: "project-6",
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and transaction history.",
      image: "https://via.placeholder.com/400x300",
      tags: ["React Native", "Redux", "REST API"],
      category: "Mobile"
    }
  ];

  return (
    <Container fluid className="p-0 m-0">
      <Row className="g-0">
        <Sidebar />

        <Col 
          xs={9} 
          md={10} 
          className="p-4 about-me-container" 
          style={{ marginLeft: "16.666%", minHeight: "100vh" }}
        >
          <h1 className="text-center mb-4" style={{ marginTop: "2rem" }}>About me</h1>
          
          {/* Introduction Section */}
          <div className="intro-container" style={{ maxWidth: "900px", margin: "0 auto 4rem" }}>
            <p className="intro-text" style={{ 
              fontSize: "1.1rem", 
              lineHeight: "1.6",
              textAlign: "justify" 
            }}>
              {isExpanded ? fullIntro : shortIntro}
            </p>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="btn btn-link p-0 mt-2 d-flex align-items-center justify-content-center"
              style={{ 
                textDecoration: "none",
                color: "#007bff",
                fontWeight: "500",
                width: "40px",
                height: "40px"
              }}
              aria-label={isExpanded ? "Show less" : "Show more"}
            >
              {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>
          </div>

          {/* Works Section */}
          <div className="works-section" style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2 className="section-title text-center mb-4">My Projects & Works</h2>
            
            <Row xs={1} sm={2} lg={3} className="g-4">
              {works.map((work) => (
                <Col key={work.id}>
                  <AboutMeWork
                    id={work.id}
                    title={work.title}
                    description={work.description}
                    image={work.image}
                    tags={work.tags}
                    category={work.category}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;