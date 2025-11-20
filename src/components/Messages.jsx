import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPaperPlane, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import Sidebar from "./SideBar";
import "./Messages.css";

const API_URL = 'http://localhost:5000/api';

function Messages(props) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch(`${API_URL}/messages`);
      const data = await response.json();
      setMessages(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching messages:', error);
      showAlert('Failed to load messages', 'danger');
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const newMessage = await response.json();
        setMessages(prev => [newMessage, ...prev]);
        setFormData({ name: '', email: '', message: '' });
        showAlert('Message sent successfully!', 'success');
      } else {
        const error = await response.json();
        showAlert(error.error || 'Failed to send message', 'danger');
      }
    } catch (error) {
      console.error('Error submitting message:', error);
      showAlert('Failed to send message', 'danger');
    } finally {
      setSubmitting(false);
    }
  };

  const showAlert = (message, type) => {
    setAlert({ show: true, message, type });
    setTimeout(() => setAlert({ show: false, message: '', type: '' }), 5000);
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  const toggleEditor = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container fluid className="p-0 m-0 messages-container">
      <Row className="g-0">
        <Col xs={2} className="p-0">
          <Sidebar />
        </Col>

        <Col xs={10} className="messages-content">
          {alert.show && (
            <div className={`message-alert message-alert-${alert.type}`}>
              {alert.message}
              <button 
                onClick={() => setAlert({ show: false, message: '', type: '' })} 
                style={{ 
                  float: 'right', 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  lineHeight: '1'
                }}
              >
                ✕
              </button>
            </div>
          )}

          {/* Messages Display - Scrollable Area */}
          <div className={`messages-list-section ${isExpanded ? 'with-editor' : 'without-editor'}`}>
            <h3 className="messages-list-title">Messages ({messages.length})</h3>
            
            {loading ? (
              <div className="messages-loading">
                <div className="messages-spinner"></div>
                <p className="messages-loading-text">Loading messages...</p>
              </div>
            ) : messages.length === 0 ? (
              <div className="messages-empty">No messages yet. Be the first to send one!</div>
            ) : (
              <div className="messages-list">
                {messages.map((msg) => (
                  <div key={msg._id} className="message-card">
                    <div className="message-card-header">
                      <div className="message-card-author">
                        <h5 className="message-card-name">{msg.name}</h5>
                        {msg.email && (
                          <p className="message-card-email">{msg.email}</p>
                        )}
                      </div>
                      <span className="message-card-timestamp">{formatDate(msg.timestamp)}</span>
                    </div>
                    <p className="message-card-text">{msg.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Message Form - Fixed at Bottom */}
          <div className={`message-form-card ${isExpanded ? 'expanded' : 'collapsed'}`}>
            <div className="message-form-header">
              <h2 className="message-form-title">Send Me a Message!</h2>
              <button 
                type="button" 
                className="message-toggle-btn" 
                onClick={toggleEditor}
                title={isExpanded ? "Collapse" : "Expand"}
              >
                {isExpanded ? <FaChevronDown /> : <FaChevronUp />}
              </button>
            </div>

            {isExpanded && (
              <>
                <button 
                  type="button" 
                  className="message-submit-btn" 
                  disabled={submitting}
                  onClick={handleSubmit}
                  title="Send Message"
                  style={{ 
                    border: '0', 
                    outline: '0', 
                    boxShadow: 'none',
                    borderWidth: '0',
                    borderStyle: 'none',
                    borderColor: 'transparent',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    appearance: 'none'
                  }}
                >
                  {submitting ? (
                    <span>⏳</span>
                  ) : (
                    <FaPaperPlane className="message-submit-icon" />
                  )}
                </button>

                <form onSubmit={handleSubmit} className="message-form">
                  {/* Left Column - Labels */}
                  <div className="message-form-labels">
                    <div className="message-form-group">
                      <label className="message-form-label">Name *</label>
                    </div>
                    <div className="message-form-group">
                      <label className="message-form-label">Email</label>
                    </div>
                    <div className="message-form-group-message">
                      <label className="message-form-label">Message *</label>
                    </div>
                  </div>

                  {/* Right Column - Inputs */}
                  <div className="message-form-inputs">
                    <div className="message-form-group">
                      <input
                        type="text"
                        name="name"
                        className="message-form-input"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="message-form-group">
                      <input
                        type="email"
                        name="email"
                        className="message-form-input"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="message-textarea-wrapper">
                      <textarea
                        name="message"
                        className="message-form-textarea"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your message..."
                        required
                        maxLength={1000}
                      />
                      <span className="message-char-count">
                        {formData.message.length}/1000 characters
                      </span>
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Messages;
