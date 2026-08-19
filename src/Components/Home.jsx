import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import resume from "../assets/Chinnareddaiah_Java_Backend_Developer_Resume.pdf";

import myPhoto from "../assets/myPhoto.jpg";
<a 
  href={resume} 
  download="Chinnareddaiah_Java_Backend_Developer_Resume.pdf"
>
  Resume
</a>

import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaTwitter,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const [width, setWidth] = useState(window.innerWidth);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = width <= 768;
  const isTablet = width > 768 && width <= 1024;

  return (
    <section id="home" style={styles.home(isMobile)}>

      {/* BACKGROUND DECORATION */}
      <div style={styles.glowOne}></div>
      <div style={styles.glowTwo}></div>
      <div style={styles.glowThree}></div>

      {/* MAIN CONTENT */}
      <div style={styles.container(isMobile, isTablet)}>

        {/* ========================================= */}
        {/* LEFT SIDE - PHOTO */}
        {/* ========================================= */}

        <div style={styles.photoColumn(isMobile)}>

          <div style={styles.photoOuter}>

            <div style={styles.photoRing}></div>

            <img
              src={myPhoto}
              alt="Chinnareddaiah - Java Developer"
              style={styles.photo(isMobile)}
            />

          </div>

          {/* SMALL TEXT BELOW PHOTO */}
          <div style={styles.photoCaption}>
            <span style={styles.captionLine}></span>

            <span>
              Building practical software
            </span>

            <span style={styles.captionLine}></span>
          </div>

        </div>


        {/* ========================================= */}
        {/* RIGHT SIDE - CONTENT */}
        {/* ========================================= */}

        <div style={styles.content(isMobile)}>

          {/* INTRO */}
          <div style={styles.intro(isMobile)}>
            <span style={styles.introLine}></span>

            <span style={styles.introText}>
              HELLO, I'M
            </span>
          </div>


          {/* NAME */}
          <h1 style={styles.name(isMobile)}>
            Chinnareddaiah
          </h1>


          {/* ANIMATED ROLE */}
          <div style={styles.roleContainer(isMobile)}>

            <span style={styles.roleStatic}>
              Java
            </span>

            <span style={styles.roleAnimated}>
              <Typewriter
                words={[
                  "Developer",
                  "Backend Developer",
                  "Software Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={55}
                delaySpeed={1300}
              />
            </span>

          </div>


          {/* DESCRIPTION */}
          <p style={styles.description(isMobile)}>
            I am a passionate{" "}
            <strong style={styles.highlight}>
              Java Developer
            </strong>{" "}
            focused on building clean, reliable and
            practical applications using Java and
            database technologies.
          </p>

          <p style={styles.description(isMobile)}>
            I have hands-on experience with{" "}
            <strong style={styles.highlight}>
              Core Java, JDBC, Servlets, JSP,
              Hibernate, JPA, Spring Core,
              SQL and Oracle
            </strong>
            , along with basic knowledge of
            HTML, CSS and JavaScript.
          </p>

          <p style={styles.description(isMobile)}>
            I enjoy learning new technologies,
            solving programming problems and
            turning ideas into working applications.
          </p>


          {/* ========================================= */}
          {/* SKILLS */}
          {/* ========================================= */}

          <div style={styles.skillsSection}>

            <span style={styles.skillsLabel}>
              TECHNICAL FOCUS
            </span>

            <div style={styles.skillsContainer}>

              <span style={styles.skill}>
                Java
              </span>

              <span style={styles.skill}>
                JDBC
              </span>

              <span style={styles.skill}>
                Servlets
              </span>

              <span style={styles.skill}>
                JSP
              </span>

              <span style={styles.skill}>
                Hibernate
              </span>

              <span style={styles.skill}>
                Spring
              </span>

              <span style={styles.skill}>
                Oracle
              </span>

              <span style={styles.skill}>
                SQL
              </span>

              <span style={styles.skill}>
                HTML
              </span>

              <span style={styles.skill}>
                CSS
              </span>

              <span style={styles.skill}>
                JavaScript
              </span>

            </div>

          </div>


          {/* ========================================= */}
          {/* SOCIAL LINKS */}
          {/* ========================================= */}

          <div style={styles.connectSection}>

            <span style={styles.connectText}>
              CONNECT WITH ME
            </span>

            <div style={styles.socialContainer}>

              {/* LINKEDIN */}
              <a
                href="https://linkedin.com/in/chinnareddaiah-chagalamarri"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  ...styles.socialIcon,
                  ...(hoveredSocial === "linkedin"
                    ? styles.socialHover
                    : {}),
                }}
                onMouseEnter={() =>
                  setHoveredSocial("linkedin")
                }
                onMouseLeave={() =>
                  setHoveredSocial(null)
                }
              >
                <FaLinkedin />
              </a>


              {/* GITHUB */}
              <a
                href="https://github.com/chinnareddaiah22"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  ...styles.socialIcon,
                  ...(hoveredSocial === "github"
                    ? styles.socialHover
                    : {}),
                }}
                onMouseEnter={() =>
                  setHoveredSocial("github")
                }
                onMouseLeave={() =>
                  setHoveredSocial(null)
                }
              >
                <FaGithub />
              </a>


              {/* EMAIL */}
              <a
                href="mailto:chinnareddaiah.chagalamarri@gmail.com"
                aria-label="Email"
                style={{
                  ...styles.socialIcon,
                  ...(hoveredSocial === "email"
                    ? styles.socialHover
                    : {}),
                }}
                onMouseEnter={() =>
                  setHoveredSocial("email")
                }
                onMouseLeave={() =>
                  setHoveredSocial(null)
                }
              >
                <MdEmail />
              </a>


              {/* WHATSAPP */}
              <a
                href="https://wa.me/918328155474"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                style={{
                  ...styles.socialIcon,
                  ...(hoveredSocial === "whatsapp"
                    ? styles.socialHover
                    : {}),
                }}
                onMouseEnter={() =>
                  setHoveredSocial("whatsapp")
                }
                onMouseLeave={() =>
                  setHoveredSocial(null)
                }
              >
                <FaWhatsapp />
              </a>


              {/* X / TWITTER */}
              <a
                href="https://x.com/chinna3322"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                style={{
                  ...styles.socialIcon,
                  ...(hoveredSocial === "twitter"
                    ? styles.socialHover
                    : {}),
                }}
                onMouseEnter={() =>
                  setHoveredSocial("twitter")
                }
                onMouseLeave={() =>
                  setHoveredSocial(null)
                }
              >
                <FaTwitter />
              </a>

            </div>

          </div>


          {/* ========================================= */}
          {/* ACTION BUTTONS */}
          {/* ========================================= */}

          <div style={styles.buttons(isMobile)}>

            {/* RESUME */}
            <a
              href={resume}
              download
              style={styles.resumeButton}
            >
              <FaDownload />
              <span>Download Resume</span>
            </a>


            {/* PROJECTS */}
            <button
              onClick={() => navigate("/projects")}
              style={styles.projectButton}
            >
              <span>View My Projects</span>

              <FaArrowRight />
            </button>

          </div>

        </div>

      </div>


      {/* ========================================= */}
      {/* BOTTOM SCROLL */}
      {/* ========================================= */}

      <div style={styles.scrollIndicator}>

        <span style={styles.scrollLine}></span>

        <span>
          Explore my portfolio
        </span>

        <span style={styles.scrollLine}></span>

      </div>

    </section>
  );
}


/* ================================================= */
/* STYLES */
/* ================================================= */

const styles = {

  /* ========================================= */
  /* HOME */
  /* ========================================= */

  home: (isMobile) => ({
    position: "relative",

    minHeight: "100vh",

    width: "100%",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    overflow: "hidden",

    boxSizing: "border-box",

    paddingTop: isMobile ? "100px" : "90px",

    paddingBottom: isMobile ? "80px" : "65px",

    paddingLeft: isMobile ? "20px" : "6%",

    paddingRight: isMobile ? "20px" : "6%",

    background:
      "radial-gradient(circle at 12% 20%, rgba(37,99,235,0.18), transparent 28%)," +
      "radial-gradient(circle at 85% 15%, rgba(99,102,241,0.14), transparent 28%)," +
      "radial-gradient(circle at 75% 85%, rgba(14,165,233,0.09), transparent 25%)," +
      "linear-gradient(135deg, #020617 0%, #0b1120 45%, #111827 100%)",

    color: "#f8fafc",
  }),


  /* ========================================= */
  /* BACKGROUND GLOWS */
  /* ========================================= */

  glowOne: {
    position: "absolute",

    width: "420px",

    height: "420px",

    borderRadius: "50%",

    background:
      "rgba(37,99,235,0.08)",

    filter: "blur(80px)",

    top: "-220px",

    left: "-180px",

    pointerEvents: "none",
  },

  glowTwo: {
    position: "absolute",

    width: "350px",

    height: "350px",

    borderRadius: "50%",

    background:
      "rgba(99,102,241,0.07)",

    filter: "blur(80px)",

    right: "-180px",

    top: "25%",

    pointerEvents: "none",
  },

  glowThree: {
    position: "absolute",

    width: "300px",

    height: "300px",

    borderRadius: "50%",

    background:
      "rgba(14,165,233,0.06)",

    filter: "blur(80px)",

    bottom: "-180px",

    left: "40%",

    pointerEvents: "none",
  },


  /* ========================================= */
  /* MAIN CONTAINER */
  /* ========================================= */

  container: (isMobile, isTablet) => ({
    position: "relative",

    zIndex: 2,

    width: "100%",

    maxWidth: "1200px",

    margin: "0 auto",

    display: "flex",

    alignItems: "center",

    justifyContent: "space-between",

    flexDirection:
      isMobile
        ? "column"
        : "row",

    gap:
      isMobile
        ? "45px"
        : isTablet
        ? "45px"
        : "80px",
  }),


  /* ========================================= */
  /* PHOTO COLUMN */
  /* ========================================= */

  photoColumn: (isMobile) => ({
    flex:
      isMobile
        ? "none"
        : "0 0 42%",

    width:
      isMobile
        ? "100%"
        : "auto",

    display: "flex",

    flexDirection: "column",

    alignItems: "center",

    justifyContent: "center",
  }),


  /* ========================================= */
  /* PHOTO */
  /* ========================================= */

  photoOuter: {
    position: "relative",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    padding: "9px",

    borderRadius: "50%",

    background:
      "linear-gradient(135deg, #2563eb, #60a5fa, #6366f1, #2563eb)",

    boxShadow:
      "0 0 80px rgba(37,99,235,0.28), 0 25px 60px rgba(0,0,0,0.45)",

    animation:
      "profileFloat 6s ease-in-out infinite",
  },

  photoRing: {
    position: "absolute",

    inset: "-17px",

    borderRadius: "50%",

    border:
      "1px solid rgba(96,165,250,0.16)",

    boxShadow:
      "0 0 35px rgba(96,165,250,0.08)",

    pointerEvents: "none",
  },

  photo: (isMobile) => ({
    display: "block",

    width:
      isMobile
        ? "230px"
        : "380px",

    height:
      isMobile
        ? "230px"
        : "380px",

    objectFit: "cover",

    borderRadius: "50%",

    border:
      "7px solid #020617",

    background: "#0f172a",
  }),


  /* ========================================= */
  /* PHOTO CAPTION */
  /* ========================================= */

  photoCaption: {
    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    gap: "10px",

    marginTop: "28px",

    color: "#64748b",

    fontSize: "11px",

    letterSpacing: "1px",

    textTransform: "uppercase",
  },

  captionLine: {
    width: "28px",

    height: "1px",

    background:
      "rgba(96,165,250,0.35)",
  },


  /* ========================================= */
  /* CONTENT */
  /* ========================================= */

  content: (isMobile) => ({
    flex: "1",

    width:
      isMobile
        ? "100%"
        : "auto",

    maxWidth: "680px",

    textAlign:
      isMobile
        ? "center"
        : "left",
  }),


  /* ========================================= */
  /* INTRO */
  /* ========================================= */

  intro: (isMobile) => ({
    display: "flex",

    alignItems: "center",

    justifyContent:
      isMobile
        ? "center"
        : "flex-start",

    gap: "10px",

    marginBottom: "13px",
  }),

  introLine: {
    width: "38px",

    height: "2px",

    borderRadius: "10px",

    background:
      "linear-gradient(90deg, #2563eb, #6366f1)",
  },

  introText: {
    color: "#60a5fa",

    fontSize: "12px",

    fontWeight: "700",

    letterSpacing: "3px",
  },


  /* ========================================= */
  /* NAME */
  /* ========================================= */

  name: (isMobile) => ({
    margin: "0",

    color: "#f8fafc",

    fontSize:
      isMobile
        ? "42px"
        : "62px",

    lineHeight: "1.05",

    fontWeight: "800",

    letterSpacing: "-2px",
  }),


  /* ========================================= */
  /* ROLE */
  /* ========================================= */

  roleContainer: (isMobile) => ({
    display: "flex",

    alignItems: "center",

    justifyContent:
      isMobile
        ? "center"
        : "flex-start",

    flexWrap: "wrap",

    gap: "8px",

    minHeight:
      isMobile
        ? "44px"
        : "53px",

    marginTop: "12px",

    marginBottom: "18px",

    fontSize:
      isMobile
        ? "24px"
        : "32px",

    fontWeight: "700",
  }),

  roleStatic: {
    color: "#cbd5e1",
  },

  roleAnimated: {
    color: "#60a5fa",

    textShadow:
      "0 0 25px rgba(96,165,250,0.22)",
  },


  /* ========================================= */
  /* DESCRIPTION */
  /* ========================================= */

  description: (isMobile) => ({
    margin:
      "0 0 12px",

    maxWidth: "670px",

    color: "#cbd5e1",

    fontSize:
      isMobile
        ? "14px"
        : "15px",

    lineHeight: "1.85",
  }),

  highlight: {
    color: "#93c5fd",

    fontWeight: "700",
  },


  /* ========================================= */
  /* SKILLS */
  /* ========================================= */

  skillsSection: {
    marginTop: "21px",

    marginBottom: "21px",
  },

  skillsLabel: {
    display: "block",

    marginBottom: "10px",

    color: "#64748b",

    fontSize: "10px",

    fontWeight: "700",

    letterSpacing: "2px",
  },

  skillsContainer: {
    display: "flex",

    flexWrap: "wrap",

    gap: "7px",

    justifyContent: "flex-start",
  },

  skill: {
    padding: "6px 10px",

    borderRadius: "18px",

    background:
      "rgba(59,130,246,0.07)",

    border:
      "1px solid rgba(96,165,250,0.14)",

    color: "#bfdbfe",

    fontSize: "11px",

    fontWeight: "600",

    transition:
      "all 0.25s ease",
  },


  /* ========================================= */
  /* SOCIAL */
  /* ========================================= */

  connectSection: {
    marginBottom: "23px",
  },

  connectText: {
    display: "block",

    marginBottom: "9px",

    color: "#64748b",

    fontSize: "10px",

    fontWeight: "700",

    letterSpacing: "2px",
  },

  socialContainer: {
    display: "flex",

    alignItems: "center",

    gap: "10px",

    flexWrap: "wrap",

    justifyContent: "flex-start",
  },

  socialIcon: {
    width: "42px",

    height: "42px",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    borderRadius: "11px",

    background:
      "rgba(255,255,255,0.04)",

    border:
      "1px solid rgba(255,255,255,0.09)",

    color: "#cbd5e1",

    fontSize: "18px",

    textDecoration: "none",

    transition:
      "all 0.25s ease",
  },

  socialHover: {
    transform: "translateY(-4px)",

    color: "#60a5fa",

    borderColor:
      "rgba(96,165,250,0.35)",

    background:
      "rgba(37,99,235,0.13)",

    boxShadow:
      "0 10px 25px rgba(37,99,235,0.18)",
  },


  /* ========================================= */
  /* BUTTONS */
  /* ========================================= */

  buttons: (isMobile) => ({
    display: "flex",

    alignItems: "center",

    justifyContent:
      isMobile
        ? "center"
        : "flex-start",

    flexWrap: "wrap",

    gap: "12px",
  }),

  resumeButton: {
    display: "inline-flex",

    alignItems: "center",

    justifyContent: "center",

    gap: "9px",

    padding: "12px 19px",

    borderRadius: "10px",

    background:
      "linear-gradient(135deg, #2563eb, #4f46e5)",

    color: "#ffffff",

    textDecoration: "none",

    fontSize: "13px",

    fontWeight: "700",

    boxShadow:
      "0 10px 25px rgba(37,99,235,0.22)",

    transition:
      "all 0.3s ease",
  },

  projectButton: {
    display: "inline-flex",

    alignItems: "center",

    justifyContent: "center",

    gap: "9px",

    padding: "12px 19px",

    borderRadius: "10px",

    background:
      "rgba(255,255,255,0.035)",

    border:
      "1px solid rgba(96,165,250,0.25)",

    color: "#e2e8f0",

    fontSize: "13px",

    fontWeight: "700",

    cursor: "pointer",

    transition:
      "all 0.3s ease",
  },


  /* ========================================= */
  /* SCROLL */
  /* ========================================= */

  scrollIndicator: {
    position: "absolute",

    bottom: "17px",

    left: "50%",

    transform: "translateX(-50%)",

    display: "flex",

    alignItems: "center",

    gap: "9px",

    color: "#475569",

    fontSize: "10px",

    letterSpacing: "0.8px",

    textTransform: "uppercase",

    whiteSpace: "nowrap",
  },

  scrollLine: {
    width: "25px",

    height: "1px",

    background:
      "rgba(96,165,250,0.25)",
  },
};