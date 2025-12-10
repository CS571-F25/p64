import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Sidebar from "./SideBar";
import "./AboutMeWorkDetail.css";

function AboutMeWorkDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real app, fetch this data based on the id
  // For now, using sample data
  const workDetails = {
    "project-1": {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://via.placeholder.com/1200x600",
      description: "A comprehensive e-commerce solution built with modern web technologies.",
      fullDescription: `This full-stack e-commerce platform represents a complete online shopping solution with integrated payment processing, real-time inventory management, and user authentication.

The platform features a responsive design that works seamlessly across all devices, from mobile phones to desktop computers. Users can browse products, add items to their cart, and complete secure transactions through integrated payment gateways.

Key features include:
- User authentication and profile management
- Product search and filtering
- Shopping cart and wishlist functionality
- Secure payment processing
- Order tracking and history
- Admin dashboard for inventory management
- Real-time stock updates
- Customer reviews and ratings

The backend is built with Node.js and Express, using MongoDB for data storage. The frontend leverages React for a dynamic user interface, with Redux for state management. The application follows best practices for security, including encrypted passwords, secure session management, and protection against common vulnerabilities.`,
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe", "JWT"],
      demoLink: "https://example.com/demo",
      githubLink: "https://github.com/yourusername/project",
      completionDate: "December 2024"
    },
    "project-2": {
      title: "Task Management App",
      category: "Full Stack",
      image: "https://via.placeholder.com/1200x600",
      description: "Collaborative task management tool with real-time updates and team collaboration features.",
      fullDescription: `A comprehensive task management application designed to streamline team collaboration and project tracking. Built with real-time synchronization capabilities to ensure all team members stay updated on project progress.

The application provides an intuitive interface for creating, assigning, and tracking tasks across multiple projects. Team members can collaborate through comments, file attachments, and status updates.

Key features include:
- Real-time task updates using WebSockets
- Drag-and-drop task organization
- Team collaboration with comments and mentions
- File attachment support
- Customizable project boards
- Task priority and deadline management
- User notifications and reminders
- Activity timeline and audit logs

Built with Firebase for real-time database synchronization and authentication, ensuring data consistency across all devices and users.`,
      tags: ["React", "Firebase", "Material-UI"],
      technologies: ["React", "Firebase", "Material-UI", "WebSockets", "Cloud Functions"],
      demoLink: "https://example.com/demo",
      githubLink: "https://github.com/yourusername/project",
      completionDate: "November 2024"
    },
    "project-3": {
      title: "Weather Dashboard",
      category: "Frontend",
      image: "https://via.placeholder.com/1200x600",
      description: "Interactive weather dashboard with location-based forecasts and historical data visualization.",
      fullDescription: `An elegant weather dashboard that provides comprehensive weather information with beautiful data visualizations. Users can track weather conditions for multiple locations and view historical weather patterns.

The dashboard integrates with multiple weather APIs to provide accurate and up-to-date weather information, including current conditions, hourly forecasts, and extended forecasts.

Key features include:
- Current weather conditions with detailed metrics
- 7-day weather forecast
- Hourly forecast with temperature trends
- Interactive weather maps
- Historical weather data visualization
- Location-based weather alerts
- Multiple location tracking
- Customizable units (Metric/Imperial)
- Beautiful weather-themed animations

The frontend uses Chart.js for data visualization, creating intuitive graphs that make weather data easy to understand at a glance.`,
      tags: ["JavaScript", "API", "Charts.js"],
      technologies: ["JavaScript", "HTML5", "CSS3", "Chart.js", "Weather API", "Geolocation API"],
      demoLink: "https://example.com/demo",
      githubLink: "https://github.com/yourusername/project",
      completionDate: "October 2024"
    },
    "project-4": {
      title: "Portfolio Website",
      category: "Design",
      image: "https://via.placeholder.com/1200x600",
      description: "Modern portfolio website with smooth animations and responsive design.",
      fullDescription: `A stunning portfolio website showcasing creative work with emphasis on visual design and user experience. Features smooth animations and transitions that create an engaging browsing experience.

The website is fully responsive and optimized for all devices, ensuring the portfolio looks great whether viewed on mobile, tablet, or desktop.

Key features include:
- Smooth scroll animations
- Interactive project showcases
- Responsive image galleries
- Contact form with validation
- SEO optimized
- Fast loading times
- Cross-browser compatibility
- Accessible design (WCAG compliant)

Built with modern CSS techniques including Flexbox and Grid for layouts, and CSS animations for engaging visual effects. Bootstrap provides the responsive framework while custom CSS adds unique styling.`,
      tags: ["React", "CSS", "Bootstrap"],
      technologies: ["React", "Bootstrap", "CSS3", "SCSS", "React Router", "EmailJS"],
      demoLink: "https://example.com/demo",
      githubLink: "https://github.com/yourusername/project",
      completionDate: "September 2024"
    },
    "project-5": {
      title: "Social Media Analytics",
      category: "Data Science",
      image: "https://via.placeholder.com/1200x600",
      description: "Analytics dashboard for tracking social media metrics and engagement rates.",
      fullDescription: `A powerful analytics dashboard that helps businesses and influencers understand their social media performance. Provides comprehensive insights into engagement metrics, audience demographics, and content performance.

The platform aggregates data from multiple social media platforms, providing a unified view of social media presence and performance.

Key features include:
- Multi-platform integration (Twitter, Instagram, Facebook)
- Real-time engagement tracking
- Audience demographics analysis
- Content performance metrics
- Sentiment analysis of comments and mentions
- Competitor benchmarking
- Custom report generation
- Scheduled reporting via email
- Historical trend analysis
- Predictive analytics for optimal posting times

Built with Django for robust backend processing and D3.js for creating interactive, customizable data visualizations. Python libraries handle data processing and machine learning for sentiment analysis.`,
      tags: ["Python", "Django", "D3.js"],
      technologies: ["Python", "Django", "PostgreSQL", "D3.js", "Pandas", "NumPy", "REST API"],
      demoLink: "https://example.com/demo",
      githubLink: "https://github.com/yourusername/project",
      completionDate: "August 2024"
    },
    "project-6": {
      title: "Mobile Banking App",
      category: "Mobile",
      image: "https://via.placeholder.com/1200x600",
      description: "Secure mobile banking application with biometric authentication and transaction history.",
      fullDescription: `A secure and user-friendly mobile banking application that brings full banking functionality to users' fingertips. Emphasizes security with multiple authentication layers while maintaining ease of use.

The app provides complete banking services including account management, transfers, bill payments, and transaction tracking, all within a sleek mobile interface.

Key features include:
- Biometric authentication (fingerprint/face ID)
- Real-time account balance updates
- Money transfer between accounts
- Bill payment functionality
- Transaction history with search and filters
- Spending analytics and insights
- Card management (lock/unlock, set limits)
- ATM and branch locator
- Push notifications for transactions
- Secure messaging with bank support
- QR code payments
- Budget tracking tools

Built with React Native for cross-platform compatibility, ensuring the app works seamlessly on both iOS and Android devices. Redux manages application state, while secure API calls handle all banking transactions with end-to-end encryption.`,
      tags: ["React Native", "Redux", "REST API"],
      technologies: ["React Native", "Redux", "TypeScript", "Expo", "REST API", "JWT", "AsyncStorage"],
      demoLink: "https://example.com/demo",
      githubLink: "https://github.com/yourusername/project",
      completionDate: "July 2024"
    }
  };

  const work = workDetails[id] || workDetails["project-1"];

  return (
    <Container fluid className="p-0 m-0">
      <Row className="g-0">
        <Sidebar />

        <Col 
          xs={9} 
          md={10} 
          className="aboutme-work-detail-container" 
          style={{ marginLeft: "16.666%", minHeight: "100vh" }}
        >
          {/* Back Button */}
          <button 
            className="aboutme-back-button"
            onClick={() => navigate("/aboutme")}
            aria-label="Go back to About Me page"
          >
            <ArrowLeft size={20} />
            <span>Back to About Me</span>
          </button>

          {/* Hero Image */}
          <div className="aboutme-work-hero-image">
            <img src={work.image} alt={work.title} />
            <div className="aboutme-work-hero-overlay">
              <Badge bg="primary" className="aboutme-work-hero-category">
                {work.category}
              </Badge>
            </div>
          </div>

          {/* Content Section */}
          <div className="aboutme-work-content">
            <h1 className="aboutme-work-detail-title">{work.title}</h1>
            
            <p className="aboutme-work-detail-intro">{work.description}</p>

            {/* Tags */}
            <div className="aboutme-work-detail-tags mb-4">
              {work.tags.map((tag, index) => (
                <span key={index} className="aboutme-work-detail-tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Full Description */}
            <div className="aboutme-work-detail-description">
              {work.fullDescription.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Technologies Used */}
            <div className="aboutme-work-technologies">
              <h3>Technologies Used</h3>
              <div className="aboutme-tech-list">
                {work.technologies.map((tech, index) => (
                  <span key={index} className="aboutme-tech-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="aboutme-work-links">
              {work.demoLink && (
                <a 
                  href={work.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="aboutme-work-link-button primary"
                >
                  View Live Demo
                </a>
              )}
              {work.githubLink && (
                <a 
                  href={work.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="aboutme-work-link-button secondary"
                >
                  View on GitHub
                </a>
              )}
            </div>

            {/* Project Info */}
            <div className="aboutme-work-info">
              <div className="aboutme-work-info-item">
                <strong>Completion Date:</strong> {work.completionDate}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMeWorkDetail;