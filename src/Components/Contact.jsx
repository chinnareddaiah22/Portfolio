import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaCheckCircle,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);
    setSent(false);

    emailjs
      .sendForm(
        "service_rkyh5ed",
        "template_4t78qe4",
        form.current,
        "N9DgRGIOqHBbaV36n"
      )
      .then(() => {
        setSending(false);
        setSent(true);
        form.current.reset();

        setTimeout(() => {
          setSent(false);
        }, 5000);
      })
      .catch(() => {
        setSending(false);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section id="contact" className="contact-page">

      {/* BACKGROUND EFFECTS */}
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      {/* HEADER */}
      <div className="contact-header">

        <div className="contact-label">
          <span></span>
          GET IN TOUCH
          <span></span>
        </div>

        <h1>
          Let's <span>Connect</span>
        </h1>

        <p>
          Have a question, job opportunity, project idea, or just want
          to discuss technology? Feel free to reach out.
        </p>

      </div>

      {/* MAIN CONTACT AREA */}
      <div className="contact-wrapper">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <div className="info-heading">

            <span className="small-label">
              CONTACT INFORMATION
            </span>

            <h2>
              Let's start a
              <br />
              <span>conversation.</span>
            </h2>

            <p>
              I'm always open to discussing new opportunities,
              interesting projects, and ideas related to Java,
              backend development and web technologies.
            </p>

          </div>

          {/* CONTACT ITEMS */}
          <div className="contact-items">

            {/* PHONE */}
            <a
              href="tel:+918328155474"
              className="contact-item"
            >

              <div className="contact-icon">
                <FaPhoneAlt />
              </div>

              <div>
                <span>PHONE</span>
                <strong>
                  +91 83281 55474
                </strong>
              </div>

            </a>

            {/* EMAIL */}
            <a
              href="mailto:chinnareddaiah.chagalamarri@gmail.com"
              className="contact-item"
            >

              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <span>EMAIL</span>
                <strong>
                  chinnareddaiah.chagalamarri@gmail.com
                </strong>
              </div>

            </a>

            {/* LOCATION */}
            <div className="contact-item">

              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <span>LOCATION</span>
                <strong>
                  Bangalore, India
                </strong>
              </div>

            </div>

          </div>

          {/* SOCIAL LINKS */}
          <div className="social-section">

            <span>
              FIND ME ONLINE
            </span>

            <div className="social-links">

              {/* GITHUB */}
              <a
                href="https://github.com/chinnareddaiah22"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              {/* LINKEDIN */}
              <a
                href="#"
                aria-label="LinkedIn"
                onClick={(e) => e.preventDefault()}
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="contact-form-card">

          <div className="form-header">

            <div className="form-icon">
              <FaPaperPlane />
            </div>

            <div>

              <span>
                CONTACT ME
              </span>

              <h2>
                Send a Message
              </h2>

            </div>

          </div>

          {/* SUCCESS MESSAGE */}
          {sent && (
            <div className="success-message">

              <FaCheckCircle />

              <span>
                Message sent successfully!
              </span>

            </div>
          )}

          {/* CONTACT FORM */}
          <form
            ref={form}
            onSubmit={sendEmail}
          >

            {/* NAME */}
            <div className="form-group">

              <label htmlFor="from_name">
                YOUR NAME
              </label>

              <input
                id="from_name"
                type="text"
                name="from_name"
                placeholder="Enter your name"
                required
              />

            </div>

            {/* MOBILE */}
            <div className="form-group">

              <label htmlFor="mobile">
                MOBILE NUMBER
              </label>

              <input
                id="mobile"
                type="tel"
                name="mobile"
                placeholder="Enter your mobile number"
                required
              />

            </div>

            {/* MESSAGE */}
            <div className="form-group">

              <label htmlFor="message">
                YOUR MESSAGE
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows="6"
                required
              ></textarea>

            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="send-button"
              disabled={sending}
            >

              {sending ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <FaPaperPlane />
                </>
              )}

            </button>

          </form>

        </div>

      </div>

      {/* BOTTOM CTA */}
      <div className="contact-bottom">

        <div>

          <span>
            AVAILABLE FOR OPPORTUNITIES
          </span>

          <h3>
            Let's build something
            <span> meaningful.</span>
          </h3>

        </div>

        <div className="availability">

          <span className="availability-dot"></span>

          Open to work

        </div>

      </div>

      {/* CSS */}
      <style>{`

        /* =========================================
           MAIN
        ========================================= */

        .contact-page {
          position: relative;
          min-height: 100vh;

          padding: 110px 6% 90px;

          overflow: hidden;

          box-sizing: border-box;

          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(37,99,235,0.13),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 70%,
              rgba(99,102,241,0.10),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #020617 0%,
              #0b1120 48%,
              #111827 100%
            );

          color: #f8fafc;
        }


        /* =========================================
           BACKGROUND GLOWS
        ========================================= */

        .contact-glow {
          position: absolute;

          border-radius: 50%;

          filter: blur(100px);

          pointer-events: none;
        }

        .contact-glow-one {
          width: 420px;
          height: 420px;

          top: -230px;
          left: -180px;

          background: rgba(37,99,235,0.07);
        }

        .contact-glow-two {
          width: 380px;
          height: 380px;

          right: -200px;
          bottom: -180px;

          background: rgba(99,102,241,0.07);
        }


        /* =========================================
           HEADER
        ========================================= */

        .contact-header {
          position: relative;

          z-index: 2;

          max-width: 760px;

          margin: 0 auto 70px;

          text-align: center;
        }

        .contact-label {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 12px;

          margin-bottom: 16px;

          color: #60a5fa;

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 3px;
        }

        .contact-label span {
          width: 35px;

          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #60a5fa
            );
        }

        .contact-header h1 {
          margin: 0 0 16px;

          color: #f8fafc;

          font-size: 48px;

          line-height: 1.1;

          font-weight: 800;

          letter-spacing: -1.5px;
        }

        .contact-header h1 span {
          color: #60a5fa;
        }

        .contact-header p {
          max-width: 650px;

          margin: 0 auto;

          color: #94a3b8;

          font-size: 15px;

          line-height: 1.8;
        }


        /* =========================================
           MAIN WRAPPER
        ========================================= */

        .contact-wrapper {
          position: relative;

          z-index: 2;

          max-width: 1180px;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            minmax(0, 0.9fr)
            minmax(0, 1.1fr);

          gap: 70px;

          align-items: center;
        }


        /* =========================================
           LEFT INFORMATION
        ========================================= */

        .contact-info {
          padding: 10px 0;
        }

        .small-label {
          display: block;

          margin-bottom: 14px;

          color: #60a5fa;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 2px;
        }

        .info-heading h2 {
          margin: 0 0 18px;

          color: #f8fafc;

          font-size: 38px;

          line-height: 1.15;

          letter-spacing: -1px;
        }

        .info-heading h2 span {
          color: #60a5fa;
        }

        .info-heading p {
          max-width: 500px;

          margin: 0;

          color: #94a3b8;

          font-size: 14px;

          line-height: 1.8;
        }


        /* =========================================
           CONTACT ITEMS
        ========================================= */

        .contact-items {
          display: flex;

          flex-direction: column;

          gap: 13px;

          margin-top: 35px;
        }

        .contact-item {
          display: flex;

          align-items: center;

          gap: 15px;

          padding: 15px;

          border-radius: 13px;

          background:
            rgba(255,255,255,0.035);

          border:
            1px solid rgba(255,255,255,0.07);

          text-decoration: none;

          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            background 0.25s ease;
        }

        .contact-item:hover {
          transform: translateX(5px);

          background:
            rgba(96,165,250,0.06);

          border-color:
            rgba(96,165,250,0.25);
        }

        .contact-icon {
          width: 43px;

          height: 43px;

          flex-shrink: 0;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 11px;

          background:
            rgba(37,99,235,0.12);

          border:
            1px solid rgba(96,165,250,0.15);

          color: #60a5fa;

          font-size: 16px;
        }

        .contact-item div:last-child {
          display: flex;

          flex-direction: column;

          gap: 4px;

          min-width: 0;
        }

        .contact-item span {
          color: #64748b;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 1.5px;
        }

        .contact-item strong {
          color: #e2e8f0;

          font-size: 13px;

          font-weight: 600;

          overflow-wrap: anywhere;
        }


        /* =========================================
           SOCIAL
        ========================================= */

        .social-section {
          margin-top: 30px;
        }

        .social-section > span {
          display: block;

          margin-bottom: 12px;

          color: #64748b;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 2px;
        }

        .social-links {
          display: flex;

          gap: 10px;
        }

        .social-links a {
          width: 40px;

          height: 40px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 10px;

          background:
            rgba(255,255,255,0.05);

          border:
            1px solid rgba(255,255,255,0.08);

          color: #cbd5e1;

          text-decoration: none;

          transition: all 0.25s ease;
        }

        .social-links a:hover {
          transform: translateY(-3px);

          background:
            rgba(37,99,235,0.15);

          border-color:
            rgba(96,165,250,0.3);

          color: #60a5fa;
        }


        /* =========================================
           FORM CARD
        ========================================= */

        .contact-form-card {
          position: relative;

          padding: 34px;

          border-radius: 22px;

          background:
            linear-gradient(
              145deg,
              rgba(30,41,59,0.90),
              rgba(15,23,42,0.95)
            );

          border:
            1px solid rgba(255,255,255,0.08);

          box-shadow:
            0 25px 70px rgba(0,0,0,0.35);
        }

        .form-header {
          display: flex;

          align-items: center;

          gap: 14px;

          margin-bottom: 28px;
        }

        .form-icon {
          width: 48px;

          height: 48px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 13px;

          background:
            linear-gradient(
              135deg,
              rgba(37,99,235,0.20),
              rgba(99,102,241,0.15)
            );

          border:
            1px solid rgba(96,165,250,0.20);

          color: #60a5fa;

          font-size: 18px;
        }

        .form-header span {
          display: block;

          margin-bottom: 3px;

          color: #60a5fa;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 2px;
        }

        .form-header h2 {
          margin: 0;

          color: #f8fafc;

          font-size: 23px;
        }


        /* =========================================
           SUCCESS MESSAGE
        ========================================= */

        .success-message {
          display: flex;

          align-items: center;

          gap: 9px;

          margin-bottom: 18px;

          padding: 11px 14px;

          border-radius: 9px;

          background:
            rgba(34,197,94,0.08);

          border:
            1px solid rgba(34,197,94,0.20);

          color: #86efac;

          font-size: 12px;

          font-weight: 600;
        }


        /* =========================================
           FORM
        ========================================= */

        .form-group {
          margin-bottom: 18px;
        }

        .form-group label {
          display: block;

          margin-bottom: 8px;

          color: #94a3b8;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 1.5px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;

          box-sizing: border-box;

          padding: 13px 14px;

          border-radius: 9px;

          border:
            1px solid rgba(255,255,255,0.08);

          outline: none;

          background:
            rgba(2,6,23,0.55);

          color: #f8fafc;

          font-family: inherit;

          font-size: 13px;

          transition:
            border-color 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #475569;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          background:
            rgba(2,6,23,0.75);

          border-color:
            rgba(96,165,250,0.45);

          box-shadow:
            0 0 0 3px rgba(96,165,250,0.07);
        }

        .form-group textarea {
          resize: vertical;

          min-height: 130px;
        }


        /* =========================================
           SEND BUTTON
        ========================================= */

        .send-button {
          width: 100%;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

          padding: 13px 18px;

          border: none;

          border-radius: 9px;

          background:
            linear-gradient(
              135deg,
              #2563eb,
              #4f46e5
            );

          color: white;

          font-family: inherit;

          font-size: 12px;

          font-weight: 700;

          cursor: pointer;

          box-shadow:
            0 10px 25px rgba(37,99,235,0.22);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            opacity 0.25s ease;
        }

        .send-button:hover:not(:disabled) {
          transform: translateY(-2px);

          box-shadow:
            0 15px 30px rgba(37,99,235,0.30);
        }

        .send-button:disabled {
          opacity: 0.7;

          cursor: not-allowed;
        }


        /* =========================================
           LOADING SPINNER
        ========================================= */

        .spinner {
          width: 13px;

          height: 13px;

          border-radius: 50%;

          border:
            2px solid rgba(255,255,255,0.35);

          border-top-color: white;

          animation:
            spin 0.7s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }


        /* =========================================
           BOTTOM CTA
        ========================================= */

        .contact-bottom {
          position: relative;

          z-index: 2;

          max-width: 1180px;

          margin: 70px auto 0;

          padding: 25px 28px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 20px;

          flex-wrap: wrap;

          border-radius: 16px;

          background:
            linear-gradient(
              135deg,
              rgba(37,99,235,0.08),
              rgba(99,102,241,0.05)
            );

          border:
            1px solid rgba(96,165,250,0.12);
        }

        .contact-bottom span:first-child {
          display: block;

          margin-bottom: 5px;

          color: #60a5fa;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 2px;
        }

        .contact-bottom h3 {
          margin: 0;

          color: #f8fafc;

          font-size: 17px;
        }

        .contact-bottom h3 span {
          color: #60a5fa;
        }

        .availability {
          display: flex;

          align-items: center;

          gap: 8px;

          padding: 9px 13px;

          border-radius: 20px;

          background:
            rgba(34,197,94,0.07);

          border:
            1px solid rgba(34,197,94,0.15);

          color: #86efac;

          font-size: 11px;

          font-weight: 700;
        }

        .availability-dot {
          width: 7px;

          height: 7px;

          border-radius: 50%;

          background: #4ade80;

          box-shadow:
            0 0 10px rgba(74,222,128,0.7);
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 900px) {

          .contact-page {
            padding-left: 25px;

            padding-right: 25px;
          }

          .contact-wrapper {
            grid-template-columns: 1fr;

            gap: 50px;

            max-width: 700px;
          }

          .contact-info {
            text-align: center;
          }

          .info-heading p {
            margin-left: auto;

            margin-right: auto;
          }

          .contact-items {
            text-align: left;
          }

          .social-links {
            justify-content: center;
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {

          .contact-page {
            padding:
              90px 16px
              60px;
          }

          .contact-header {
            margin-bottom: 50px;
          }

          .contact-header h1 {
            font-size: 34px;
          }

          .contact-header p {
            font-size: 13px;
          }

          .info-heading h2 {
            font-size: 30px;
          }

          .contact-form-card {
            padding: 23px 18px;

            border-radius: 17px;
          }

          .form-header h2 {
            font-size: 20px;
          }

          .contact-bottom {
            padding: 20px;

            align-items: flex-start;

            flex-direction: column;
          }

          .availability {
            align-self: flex-start;
          }

        }

      `}</style>

    </section>
  );
}