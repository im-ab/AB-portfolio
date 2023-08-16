import React from "react";
import "./contact.css";

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section-title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact-container container grid">
        <div className="contact-data">
          <h3 className="contact-title">Don't Be Shy !</h3>

          <p className="contact-description">
            Feel free to get in touch with me. I'm always open to discussing new
            projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <FaEnvelopeOpen className="info-icon" />
              <div>
                <span className="info-title">Mail Me : </span>
                <h4 className="info-desc">anuragbhardwaj3108@gmail.com</h4>
              </div>
            </div>

            <div className="info-item">
              <FaPhoneSquareAlt className="info-icon" />
              <div>
                <span className="info-title">Call Me : </span>
                <h4 className="info-desc">+91 9758713900</h4>
              </div>
            </div>
          </div>

          <div className="contact-socials">
            <a
              href="https://www.facebook.com/profile.php?id=100007804394779"
              className="contact-social-link"
              target="blank"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/ia.m_anurag/"
              className="contact-social-link"
              target="blank"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/iam-anurag-bhardwaj/"
              className="contact-social-link"
              target="blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/iam-anurag-bhardwaj"
              className="contact-social-link"
              target="blank"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-input-group">
            <div className="form-input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form-control"
              />
            </div>

            <div className="form-input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form-control"
              />
            </div>

            <div className="form-input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form-control"
              />
            </div>
          </div>

          <div className="form-input-div">
            <textarea
              placeholder="Your Message"
              className="form-control textarea"
            />
          </div>

          <button className="button">
            Send Message
            <span className="button-icon contact-button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
