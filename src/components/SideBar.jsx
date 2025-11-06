import React, { useEffect, useState } from "react";
import { Col, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaAddressBook, FaEnvelopeOpenText, FaQuestionCircle } from "react-icons/fa";
import { FaCompassDrafting, FaHouse } from "react-icons/fa6";
import "./Sidebar.css";

export default function Sidebar() {
  const [isScrollable, setIsScrollable] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", icon: FaHouse, label: "Home" },
    { to: "/aboutme", icon: FaAddressBook, label: "About Me" },
    { to: "/messages", icon: FaEnvelopeOpenText, label: "Messages" },
    { to: "/faq", icon: FaQuestionCircle, label: "FAQ" },
    { to: "/tryme", icon: FaCompassDrafting, label: "Try Me" },
  ];

  useEffect(() => {
    const handleResize = () => {
      const winH = window.innerHeight;
      const TARGET_ITEM_PX = 120;
      const EDGE_MARGIN_PX = 30;
      const need = links.length * TARGET_ITEM_PX + EDGE_MARGIN_PX * 2;
      setIsScrollable(winH < need);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [links.length]);

  return (
    <Col
      xs={2}
      md={2}
      xl={2}
      className={`p-0 d-flex flex-column align-items-center sidebar-container ${isScrollable ? 'scrollable' : ''}`}
    >
      <div
        className={`w-100 d-flex flex-column sidebar-content ${isScrollable ? 'scrollable' : ''}`}
      >
        {links.map(({ to, icon: Icon, label }) => {
          const isActive = location.pathname === to;
          return (
            <div key={label} className="sidebar-item">
              <Nav.Link
                as={Link}
                to={to}
                className={`sidebar-link ${isActive ? 'active' : ''}`}
                title={label}
              >
                <Icon className="sidebar-icon" />
              </Nav.Link>
            </div>
          );
        })}
      </div>
    </Col>
  );
}