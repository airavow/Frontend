import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <div style={sectionStyle}>
          <h4 style={headingStyle}>NanoDx</h4>
          <p style={textStyle}>Innovative solutions for modern diagnostics</p>
        </div>

        <div style={sectionStyle}>
          <h4 style={headingStyle}>Quick Links</h4>
          <ul style={listStyle}>
            <li style={listItemStyle}><a href="/" style={linkStyle}>Home</a></li>
            <li style={listItemStyle}><a href="/about" style={linkStyle}>About</a></li>
            <li style={listItemStyle}><a href="/blog" style={linkStyle}>Blog</a></li>
            <li style={listItemStyle}><a href="/contact" style={linkStyle}>Contact</a></li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h4 style={headingStyle}>Contact Us</h4>
          <p style={textStyle}>email@example.com</p>
          <p style={textStyle}>+1 (123) 456-7890</p>
        </div>
      </div>

      <div style={copyrightStyle}>
        <p style={textStyle}>© {currentYear} NanoDx. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Styles
const footerStyle = {
  backgroundColor: '#2c3e50',
  color: '#ecf0f1',
  padding: '2rem 0',
  width: '100%',
};

const contentStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 1rem',
};

const sectionStyle = {
  flex: '1',
  minWidth: '200px',
  margin: '1rem',
};

const headingStyle = {
  color: '#fff',
  marginBottom: '1rem',
  fontSize: '1.2rem',
};

const textStyle = {
  margin: '0.5rem 0',
  lineHeight: '1.6',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const listItemStyle = {
  margin: '0.5rem 0',
};

const linkStyle = {
  color: '#ecf0f1',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
};

const copyrightStyle = {
  textAlign: 'center',
  marginTop: '2rem',
  paddingTop: '1rem',
  borderTop: '1px solid rgba(255,255,255,0.1)',
};

export default Footer;