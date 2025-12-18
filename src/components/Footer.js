import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  const footerStyle = {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "2rem 1rem",
  };

  const socialsStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1rem",
  };

  const socialButtonStyle = {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "1.2rem",
    cursor: "pointer",
    transition: "color 0.25s ease",
  };

  const handleHover = (e, hover) => {
    e.target.style.color = hover ? "#f28c28" : "white";
  };

  return (
    <footer style={footerStyle}>
      <p>© 2025 Nostalgic Threads. All rights reserved.</p>
      <div style={socialsStyle}>
        <button
          style={socialButtonStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          <FaFacebookF />
        </button>
        <button
          style={socialButtonStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          <FaTwitter />
        </button>
        <button
          style={socialButtonStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          <FaInstagram />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
