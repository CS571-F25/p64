import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./AboutMeWork.css";

function AboutMeWork({ id, title, description, image, tags, category }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/work/${id}`);
  };

  return (
    <Card 
      className="work-card h-100" 
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      <div className="work-image-container">
        <Card.Img 
          variant="top" 
          src={image} 
          alt={title}
          className="work-image"
        />
        <div className="work-overlay">
          <span className="work-overlay-text">View Project</span>
        </div>
      </div>
      
      <Card.Body className="d-flex flex-column">
        {category && (
          <span className="work-category">{category}</span>
        )}
        
        <Card.Title className="work-title">{title}</Card.Title>
        
        <Card.Text className="work-description flex-grow-1">
          {description}
        </Card.Text>
        
        {tags && tags.length > 0 && (
          <div className="work-tags mt-auto">
            {tags.map((tag, index) => (
              <span key={index} className="work-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default AboutMeWork;