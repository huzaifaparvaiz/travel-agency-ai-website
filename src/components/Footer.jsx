import React, { useEffect } from "react";
import "./footer.css";
import logo from "../assets/logo.png";

function Footer() {
  useEffect(() => {
    const footer = document.querySelector(".footer");
    const handleMove = (e) => {
      const rect = footer.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100 + "%";
      const y = ((e.clientY - rect.top) / rect.height) * 100 + "%";
      footer.style.setProperty("--x", x);
      footer.style.setProperty("--y", y);
    };
    footer.addEventListener("mousemove", handleMove);
    return () => footer.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <footer className="footer">
        {/* Brand */}
        <div className="footer-section brand">
          <div className="brand-row">
            <img className="logofooter" src={logo} alt="FlyBeyond Logo" />
            <h2 className="webname">FlyBeyond</h2>
          </div>
          <p>Your journey starts here ✈️</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Navigation</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Destinations / Tours</li>
            <li>Services</li>
            <li>Blog / Travel Tips</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Popular Destinations */}
        <div className="footer-section">
          <h3>Popular Destinations</h3>
          <ul>
            <li>Paris</li>
            <li>Dubai</li>
            <li>Maldives</li>
            <li>Turkey</li>
            <li>Adventure Tours</li>
            <li>Honeymoon Packages</li>
          </ul>
        </div>

        {/* Policies */}
        <div className="footer-section">
          <h3>Policies & Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Refund / Cancellation Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Get travel deals & updates in your inbox</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </footer>
    </>
  );
}

export default Footer;
