import { useState } from "react";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaJava,
  FaDatabase,
  FaCode,
  FaShoppingCart,
  FaGraduationCap,
  FaLock,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "ShopEase",
    subtitle: "E-Commerce Web Application",
    category: "FULL STACK JAVA APPLICATION",

    description:
      "A full-stack e-commerce web application where users can browse products, view product details, manage their cart, create accounts, log in, and complete a dummy payment flow. The application is deployed online.",

    technologies: [
      "Java",
      "Spring",
      "Hibernate/JPA",
      "Oracle",
      "JSP",
      "Spring Security",
      "Tomcat",
    ],

    liveDemo:
      "https://shopease-ecommerce-4.onrender.com/",

    sourceCode:
      "https://github.com/chinnareddaiah22/ShopEase-Ecommerce",

    featured: true,

    icon: <FaShoppingCart />,
  },

  {
    title: "Student Management System",
    subtitle: "Java + JDBC Application",
    category: "CONSOLE JAVA APPLICATION",

    description:
      "A console-based Java application developed using Core Java, JDBC, and Oracle SQL. It performs CRUD operations such as adding, viewing, updating, and deleting student records.",

    technologies: [
      "Java",
      "JDBC",
      "Oracle SQL",
      "CRUD",
    ],

    sourceCode:
      "https://github.com/chinnareddaiah22/Student-Management-System",

    icon: <FaGraduationCap />,
  },

  {
    title: "Cookie Login System",
    subtitle: "Java Web Application",
    category: "JAVA WEB APPLICATION",

    description:
      "A Java web application built using JSP, Servlets, JDBC, and Oracle. It implements login authentication using cookies and sessions.",

    technologies: [
      "Java",
      "JSP",
      "Servlet",
      "JDBC",
      "Oracle",
      "Cookies",
      "Session",
      "Authentication",
    ],

    sourceCode:
      "https://github.com/chinnareddaiah22/Cookie-Login-System-JSP-Servlet",

    icon: <FaLock />,
  },
];

/* ================================================= */
/* TECHNOLOGY ICONS */
/* ================================================= */

const techIcons = {
  Java: <FaJava />,
  Spring: <FaCode />,
  "Hibernate/JPA": <FaDatabase />,
  Oracle: <FaDatabase />,
  JSP: <FaCode />,
  "Spring Security": <FaShieldAlt />,
  Tomcat: <FaServer />,
  JDBC: <FaDatabase />,
  "Oracle SQL": <FaDatabase />,
  CRUD: <FaCode />,
  Servlet: <FaServer />,
  Cookies: <FaCode />,
  Session: <FaCode />,
  Authentication: <FaLock />,
};

/* ================================================= */
/* PROJECTS COMPONENT */
/* ================================================= */

export default function Projects() {
  const [hoveredProject, setHoveredProject] =
    useState(null);

  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section id="projects" style={styles.section}>

      {/* ========================================= */}
      {/* BACKGROUND EFFECTS */}
      {/* ========================================= */}

      <div style={styles.glowOne}></div>
      <div style={styles.glowTwo}></div>
      <div style={styles.glowThree}></div>


      {/* ========================================= */}
      {/* HEADER */}
      {/* ========================================= */}

      <div style={styles.header}>

        <div style={styles.sectionLabel}>

          <span style={styles.labelLine}></span>

          MY WORK

          <span style={styles.labelLine}></span>

        </div>


        <h2 style={styles.heading}>
          Featured{" "}
          <span style={styles.headingAccent}>
            Projects
          </span>
        </h2>


        <p style={styles.headerDescription}>
          A selection of applications I have built while
          learning and working with Java, databases and
          web technologies.
        </p>

      </div>


      {/* ========================================= */}
      {/* FEATURED PROJECT */}
      {/* ========================================= */}

      <div style={styles.featuredWrapper}>

        <div
          style={{
            ...styles.featuredCard,

            ...(hoveredProject === "featured"
              ? styles.featuredCardHover
              : {}),
          }}

          onMouseEnter={() =>
            setHoveredProject("featured")
          }

          onMouseLeave={() =>
            setHoveredProject(null)
          }
        >

          {/* FEATURED BADGE */}

          <div style={styles.featuredBadge}>

            <span>★</span>

            FEATURED PROJECT

          </div>


          {/* FEATURED GRID */}

          <div style={styles.featuredGrid}>


            {/* ================================= */}
            {/* LEFT CONTENT */}
            {/* ================================= */}

            <div style={styles.featuredContent}>

              <div style={styles.projectNumber}>
                01
              </div>


              <div style={styles.featuredIcon}>
                {featuredProject.icon}
              </div>


              <div style={styles.projectCategory}>
                {featuredProject.category}
              </div>


              <h3 style={styles.featuredTitle}>
                {featuredProject.title}
              </h3>


              <h4 style={styles.featuredSubtitle}>
                {featuredProject.subtitle}
              </h4>


              <p style={styles.featuredDescription}>
                {featuredProject.description}
              </p>


              {/* TECHNOLOGIES */}

              <div style={styles.techTitle}>
                TECHNOLOGIES
              </div>


              <div style={styles.techContainer}>

                {featuredProject.technologies.map(
                  (tech, index) => (

                    <div
                      key={index}
                      style={styles.techBadge}
                    >

                      <span style={styles.techIcon}>
                        {techIcons[tech] || <FaCode />}
                      </span>

                      {tech}

                    </div>

                  )
                )}

              </div>


              {/* BUTTONS */}

              <div style={styles.featuredButtons}>

                <a
                  href={featuredProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.liveButton}
                >

                  <FaExternalLinkAlt />

                  Live Demo

                </a>


                <a
                  href={featuredProject.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.githubButton}
                >

                  <FaGithub />

                  View Source

                </a>

              </div>

            </div>


            {/* ================================= */}
            {/* WEBSITE PREVIEW */}
            {/* ================================= */}

            <div
              className="previewColumn"
              style={styles.previewColumn}
            >

              <div style={styles.browserWindow}>


                {/* BROWSER HEADER */}

                <div style={styles.browserTop}>

                  <div style={styles.browserDots}>

                    <span
                      style={{
                        ...styles.browserDot,
                        background: "#ef4444",
                      }}
                    ></span>

                    <span
                      style={{
                        ...styles.browserDot,
                        background: "#f59e0b",
                      }}
                    ></span>

                    <span
                      style={{
                        ...styles.browserDot,
                        background: "#22c55e",
                      }}
                    ></span>

                  </div>


                  <div style={styles.browserAddress}>
                    shopease-ecommerce-4.onrender.com
                  </div>

                </div>


                {/* WEBSITE PREVIEW */}

                <div style={styles.previewScreen}>


                  {/* NAVBAR */}

                  <div style={styles.previewNavbar}>

                    <div style={styles.previewLogo}>
                      S
                    </div>

                    <strong>
                      ShopEase
                    </strong>


                    <div style={styles.previewNavItems}>
                      Home&nbsp;&nbsp; Shop&nbsp;&nbsp; Cart
                    </div>

                  </div>


                  {/* HERO */}

                  <div style={styles.previewHero}>

                    <div>

                      <small
                        style={
                          styles.previewHeroSmall
                        }
                      >
                        WELCOME TO SHOPEASE
                      </small>


                      <h4
                        style={
                          styles.previewHeroTitle
                        }
                      >
                        Everything
                        <br />
                        You Need.
                      </h4>


                      <p
                        style={
                          styles.previewHeroText
                        }
                      >
                        Shop your favorite products
                        in one place.
                      </p>


                      <div
                        style={
                          styles.previewButton
                        }
                      >
                        Shop Now
                      </div>

                    </div>

                  </div>


                  {/* PRODUCTS */}

                  <div style={styles.previewProducts}>

                    <div
                      style={styles.previewProduct}
                    >

                      <div
                        style={styles.productImage}
                      >
                        👕
                      </div>

                      <span>
                        Fashion
                      </span>

                    </div>


                    <div
                      style={styles.previewProduct}
                    >

                      <div
                        style={styles.productImage}
                      >
                        📱
                      </div>

                      <span>
                        Mobiles
                      </span>

                    </div>


                    <div
                      style={styles.previewProduct}
                    >

                      <div
                        style={styles.productImage}
                      >
                        👟
                      </div>

                      <span>
                        Sports
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ========================================= */}
      {/* OTHER PROJECTS HEADER */}
      {/* ========================================= */}

      <div style={styles.otherHeader}>

        <div>

          <div style={styles.otherLabel}>
            MORE WORK
          </div>

          <h3 style={styles.otherTitle}>
            Other{" "}
            <span style={styles.otherTitleAccent}>
              Projects
            </span>
          </h3>

        </div>


        <p style={styles.otherDescription}>
          Smaller applications demonstrating my Java,
          JDBC and database development skills.
        </p>

      </div>


      {/* ========================================= */}
      {/* OTHER PROJECT CARDS */}
      {/* ========================================= */}

      <div style={styles.projectsGrid}>

        {otherProjects.map(
          (project, index) => (

            <div
              key={index}

              style={{
                ...styles.projectCard,

                ...(hoveredProject === index
                  ? styles.projectCardHover
                  : {}),
              }}

              onMouseEnter={() =>
                setHoveredProject(index)
              }

              onMouseLeave={() =>
                setHoveredProject(null)
              }
            >

              {/* CARD TOP */}

              <div style={styles.cardTop}>

                <div style={styles.cardIcon}>
                  {project.icon}
                </div>


                <div style={styles.cardNumber}>
                  0{index + 2}
                </div>

              </div>


              {/* CATEGORY */}

              <div style={styles.cardCategory}>
                {project.category}
              </div>


              {/* TITLE */}

              <h3 style={styles.cardTitle}>
                {project.title}
              </h3>


              {/* SUBTITLE */}

              <div style={styles.cardSubtitle}>
                {project.subtitle}
              </div>


              {/* DESCRIPTION */}

              <p style={styles.cardDescription}>
                {project.description}
              </p>


              {/* TECHNOLOGIES */}

              <div
                style={styles.cardTechContainer}
              >

                {project.technologies.map(
                  (tech, techIndex) => (

                    <span
                      key={techIndex}
                      style={styles.cardTech}
                    >
                      {tech}
                    </span>

                  )
                )}

              </div>


              {/* FOOTER */}

              <div style={styles.cardFooter}>

                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.cardGithub}
                >

                  <FaGithub />

                  View Source

                </a>


                <span style={styles.arrow}>
                  ↗
                </span>

              </div>

            </div>

          )
        )}

      </div>


      {/* ========================================= */}
      {/* GITHUB CTA */}
      {/* ========================================= */}

      <div style={styles.githubSection}>

        <div style={styles.githubLeft}>

          <div style={styles.githubIcon}>
            <FaGithub />
          </div>


          <div>

            <h3 style={styles.githubTitle}>
              Explore More on GitHub
            </h3>


            <p style={styles.githubText}>
              Check out my repositories and see more
              of my Java development work.
            </p>

          </div>

        </div>


        <a
          href="https://github.com/chinnareddaiah22?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.githubProfile}
        >

          Visit GitHub

          <FaExternalLinkAlt />

        </a>

      </div>

    </section>
  );
}


/* ================================================= */
/* STYLES */
/* ================================================= */

const styles = {

  /* ========================================= */
  /* SECTION */
  /* ========================================= */

  section: {
    position: "relative",

    minHeight: "100vh",

    width: "100%",

    padding: "110px 6% 90px",

    overflow: "hidden",

    boxSizing: "border-box",

    background:
      "radial-gradient(circle at 10% 10%, rgba(37,99,235,0.13), transparent 30%)," +
      "radial-gradient(circle at 90% 70%, rgba(99,102,241,0.10), transparent 30%)," +
      "linear-gradient(135deg,#020617 0%,#0b1120 48%,#111827 100%)",

    color: "#f8fafc",
  },


  /* ========================================= */
  /* GLOWS */
  /* ========================================= */

  glowOne: {
    position: "absolute",

    width: "450px",

    height: "450px",

    borderRadius: "50%",

    background:
      "rgba(37,99,235,0.07)",

    filter: "blur(100px)",

    top: "-250px",

    left: "-220px",

    pointerEvents: "none",
  },


  glowTwo: {
    position: "absolute",

    width: "400px",

    height: "400px",

    borderRadius: "50%",

    background:
      "rgba(99,102,241,0.06)",

    filter: "blur(100px)",

    right: "-220px",

    bottom: "-200px",

    pointerEvents: "none",
  },


  glowThree: {
    position: "absolute",

    width: "300px",

    height: "300px",

    borderRadius: "50%",

    background:
      "rgba(14,165,233,0.05)",

    filter: "blur(100px)",

    left: "45%",

    bottom: "-200px",

    pointerEvents: "none",
  },


  /* ========================================= */
  /* HEADER */
  /* ========================================= */

  header: {
    position: "relative",

    zIndex: 2,

    maxWidth: "800px",

    margin: "0 auto 65px",

    textAlign: "center",
  },


  sectionLabel: {
    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    gap: "12px",

    marginBottom: "15px",

    color: "#60a5fa",

    fontSize: "11px",

    fontWeight: "800",

    letterSpacing: "3px",
  },


  labelLine: {
    width: "35px",

    height: "1px",

    background:
      "linear-gradient(90deg, transparent, #60a5fa)",
  },


  heading: {
    margin: "0 0 15px",

    fontSize: "48px",

    lineHeight: "1.1",

    fontWeight: "800",

    letterSpacing: "-1.5px",

    color: "#f8fafc",
  },


  headingAccent: {
    color: "#60a5fa",
  },


  headerDescription: {
    maxWidth: "650px",

    margin: "0 auto",

    color: "#94a3b8",

    fontSize: "15px",

    lineHeight: "1.8",
  },


  /* ========================================= */
  /* FEATURED */
  /* ========================================= */

  featuredWrapper: {
    position: "relative",

    zIndex: 2,

    maxWidth: "1180px",

    margin: "0 auto 80px",
  },


  featuredCard: {
    position: "relative",

    padding: "1px",

    borderRadius: "26px",

    background:
      "linear-gradient(135deg, rgba(96,165,250,0.55), rgba(99,102,241,0.18), rgba(255,255,255,0.06))",

    boxShadow:
      "0 30px 80px rgba(0,0,0,0.35)",

    transition: "all 0.4s ease",
  },


  featuredCardHover: {
    transform: "translateY(-5px)",

    boxShadow:
      "0 35px 90px rgba(37,99,235,0.18)",
  },


  featuredBadge: {
    position: "absolute",

    top: "-15px",

    left: "30px",

    zIndex: 5,

    display: "flex",

    alignItems: "center",

    gap: "7px",

    padding: "8px 15px",

    borderRadius: "20px",

    background:
      "linear-gradient(135deg,#2563eb,#4f46e5)",

    color: "#ffffff",

    fontSize: "10px",

    fontWeight: "800",

    letterSpacing: "1px",

    boxShadow:
      "0 10px 25px rgba(37,99,235,0.35)",
  },


  featuredGrid: {
    display: "grid",

    gridTemplateColumns:
      "minmax(0, 1.05fr) minmax(350px, 0.95fr)",

    gap: "35px",

    padding: "45px",

    borderRadius: "25px",

    background:
      "linear-gradient(145deg,#111827,#0b1220)",
  },


  featuredContent: {
    position: "relative",
  },


  projectNumber: {
    position: "absolute",

    top: "-10px",

    right: "0",

    color:
      "rgba(96,165,250,0.08)",

    fontSize: "70px",

    fontWeight: "900",

    lineHeight: "1",
  },


  featuredIcon: {
    width: "58px",

    height: "58px",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    marginBottom: "18px",

    borderRadius: "16px",

    background:
      "linear-gradient(135deg,rgba(37,99,235,0.20),rgba(99,102,241,0.15))",

    border:
      "1px solid rgba(96,165,250,0.20)",

    color: "#60a5fa",

    fontSize: "25px",
  },


  projectCategory: {
    marginBottom: "9px",

    color: "#60a5fa",

    fontSize: "10px",

    fontWeight: "800",

    letterSpacing: "2px",
  },


  featuredTitle: {
    margin: "0",

    color: "#f8fafc",

    fontSize: "38px",

    fontWeight: "800",

    letterSpacing: "-1px",
  },


  featuredSubtitle: {
    margin: "5px 0 18px",

    color: "#cbd5e1",

    fontSize: "16px",

    fontWeight: "500",
  },


  featuredDescription: {
    maxWidth: "620px",

    margin: "0 0 25px",

    color: "#94a3b8",

    fontSize: "14px",

    lineHeight: "1.8",
  },


  /* ========================================= */
  /* TECHNOLOGIES */
  /* ========================================= */

  techTitle: {
    marginBottom: "10px",

    color: "#64748b",

    fontSize: "9px",

    fontWeight: "800",

    letterSpacing: "2px",
  },


  techContainer: {
    display: "flex",

    flexWrap: "wrap",

    gap: "7px",

    marginBottom: "28px",
  },


  techBadge: {
    display: "flex",

    alignItems: "center",

    gap: "6px",

    padding: "6px 9px",

    borderRadius: "15px",

    background:
      "rgba(255,255,255,0.035)",

    border:
      "1px solid rgba(255,255,255,0.07)",

    color: "#cbd5e1",

    fontSize: "10px",

    fontWeight: "600",
  },


  techIcon: {
    display: "flex",

    color: "#60a5fa",

    fontSize: "12px",
  },


  /* ========================================= */
  /* BUTTONS */
  /* ========================================= */

  featuredButtons: {
    display: "flex",

    flexWrap: "wrap",

    gap: "10px",
  },


  liveButton: {
    display: "inline-flex",

    alignItems: "center",

    gap: "8px",

    padding: "11px 17px",

    borderRadius: "9px",

    background:
      "linear-gradient(135deg,#2563eb,#4f46e5)",

    color: "#ffffff",

    textDecoration: "none",

    fontSize: "12px",

    fontWeight: "700",

    boxShadow:
      "0 8px 20px rgba(37,99,235,0.25)",

    transition: "all 0.25s ease",
  },


  githubButton: {
    display: "inline-flex",

    alignItems: "center",

    gap: "8px",

    padding: "11px 17px",

    borderRadius: "9px",

    background:
      "rgba(255,255,255,0.04)",

    border:
      "1px solid rgba(255,255,255,0.10)",

    color: "#e2e8f0",

    textDecoration: "none",

    fontSize: "12px",

    fontWeight: "700",
  },


  /* ========================================= */
  /* BROWSER PREVIEW */
  /* ========================================= */

  previewColumn: {
    display: "flex",

    alignItems: "center",

    justifyContent: "center",
  },


  browserWindow: {
    width: "100%",

    maxWidth: "470px",

    overflow: "hidden",

    borderRadius: "16px",

    background: "#020617",

    border:
      "1px solid rgba(255,255,255,0.10)",

    boxShadow:
      "0 25px 60px rgba(0,0,0,0.45)",

    transform:
      "perspective(1000px) rotateY(-2deg)",
  },


  browserTop: {
    display: "flex",

    alignItems: "center",

    gap: "15px",

    padding: "11px 13px",

    background: "#111827",

    borderBottom:
      "1px solid rgba(255,255,255,0.06)",
  },


  browserDots: {
    display: "flex",

    gap: "5px",
  },


  browserDot: {
    width: "7px",

    height: "7px",

    borderRadius: "50%",

    display: "block",
  },


  browserAddress: {
    flex: 1,

    padding: "5px 10px",

    borderRadius: "5px",

    background:
      "rgba(255,255,255,0.05)",

    color: "#64748b",

    fontSize: "8px",

    textAlign: "center",
  },


  previewScreen: {
    minHeight: "330px",

    background:
      "linear-gradient(145deg,#f8fafc,#e2e8f0)",

    color: "#0f172a",
  },


  previewNavbar: {
    display: "flex",

    alignItems: "center",

    gap: "8px",

    padding: "13px 17px",

    background: "#ffffff",

    fontSize: "12px",
  },


  previewLogo: {
    width: "25px",

    height: "25px",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    borderRadius: "7px",

    background:
      "linear-gradient(135deg,#2563eb,#6366f1)",

    color: "#ffffff",

    fontWeight: "800",

    fontSize: "12px",
  },


  previewNavItems: {
    marginLeft: "auto",

    color: "#64748b",

    fontSize: "8px",
  },


  previewHero: {
    padding: "35px 25px",

    background:
      "linear-gradient(135deg,#dbeafe,#eef2ff)",
  },


  previewHeroSmall: {
    color: "#2563eb",

    fontSize: "8px",

    fontWeight: "800",

    letterSpacing: "1px",
  },


  previewHeroTitle: {
    margin: "8px 0",

    color: "#0f172a",

    fontSize: "27px",

    lineHeight: "1.05",

    fontWeight: "800",
  },


  previewHeroText: {
    margin: "0",

    color: "#64748b",

    fontSize: "9px",
  },


  previewButton: {
    display: "inline-block",

    marginTop: "10px",

    padding: "7px 12px",

    borderRadius: "6px",

    background: "#2563eb",

    color: "#ffffff",

    fontSize: "8px",

    fontWeight: "700",
  },


  previewProducts: {
    display: "flex",

    gap: "10px",

    padding: "18px",

    background: "#f8fafc",
  },


  previewProduct: {
    flex: 1,

    padding: "12px 7px",

    borderRadius: "8px",

    background: "#ffffff",

    boxShadow:
      "0 4px 12px rgba(15,23,42,0.08)",

    textAlign: "center",

    fontSize: "8px",

    fontWeight: "700",

    color: "#475569",
  },


  productImage: {
    marginBottom: "7px",

    fontSize: "22px",
  },


  /* ========================================= */
  /* OTHER PROJECTS HEADER */
  /* ========================================= */

  otherHeader: {
    position: "relative",

    zIndex: 2,

    maxWidth: "1180px",

    margin: "0 auto 25px",

    display: "flex",

    alignItems: "flex-end",

    justifyContent: "space-between",

    gap: "30px",
  },


  otherLabel: {
    marginBottom: "5px",

    color: "#60a5fa",

    fontSize: "9px",

    fontWeight: "800",

    letterSpacing: "2px",
  },


  otherTitle: {
    margin: "0",

    color: "#f8fafc",

    fontSize: "28px",
  },


  otherTitleAccent: {
    color: "#60a5fa",
  },


  otherDescription: {
    maxWidth: "430px",

    margin: "0",

    color: "#64748b",

    fontSize: "12px",

    lineHeight: "1.6",

    textAlign: "right",
  },


  /* ========================================= */
  /* PROJECT GRID */
  /* ========================================= */

  projectsGrid: {
    position: "relative",

    zIndex: 2,

    maxWidth: "1180px",

    margin: "0 auto",

    display: "grid",

    gridTemplateColumns:
      "repeat(2, minmax(0, 1fr))",

    gap: "20px",
  },


  /* ========================================= */
  /* PROJECT CARD */
  /* ========================================= */

  projectCard: {
    padding: "27px",

    borderRadius: "18px",

    background:
      "linear-gradient(145deg,rgba(30,41,59,0.80),rgba(15,23,42,0.92))",

    border:
      "1px solid rgba(255,255,255,0.07)",

    boxShadow:
      "0 15px 40px rgba(0,0,0,0.20)",

    transition: "all 0.3s ease",
  },


  projectCardHover: {
    transform: "translateY(-7px)",

    borderColor:
      "rgba(96,165,250,0.30)",

    boxShadow:
      "0 25px 55px rgba(0,0,0,0.30)",
  },


  cardTop: {
    display: "flex",

    alignItems: "center",

    justifyContent: "space-between",

    marginBottom: "20px",
  },


  cardIcon: {
    width: "48px",

    height: "48px",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    borderRadius: "13px",

    background:
      "rgba(37,99,235,0.10)",

    border:
      "1px solid rgba(96,165,250,0.15)",

    color: "#60a5fa",

    fontSize: "20px",
  },


  cardNumber: {
    color:
      "rgba(148,163,184,0.25)",

    fontSize: "24px",

    fontWeight: "800",
  },


  cardCategory: {
    marginBottom: "8px",

    color: "#60a5fa",

    fontSize: "9px",

    fontWeight: "800",

    letterSpacing: "1.5px",

    textTransform: "uppercase",
  },


  cardTitle: {
    margin: "0 0 6px",

    color: "#f8fafc",

    fontSize: "22px",

    fontWeight: "750",
  },


  cardSubtitle: {
    marginBottom: "13px",

    color: "#cbd5e1",

    fontSize: "12px",

    fontWeight: "500",
  },


  cardDescription: {
    minHeight: "95px",

    margin: "0 0 20px",

    color: "#94a3b8",

    fontSize: "13px",

    lineHeight: "1.75",
  },


  cardTechContainer: {
    display: "flex",

    flexWrap: "wrap",

    gap: "6px",

    marginBottom: "22px",
  },


  cardTech: {
    padding: "5px 8px",

    borderRadius: "12px",

    background:
      "rgba(255,255,255,0.035)",

    border:
      "1px solid rgba(255,255,255,0.05)",

    color: "#cbd5e1",

    fontSize: "10px",
  },


  /* ========================================= */
  /* CARD FOOTER */
  /* ========================================= */

  cardFooter: {
    display: "flex",

    alignItems: "center",

    justifyContent: "space-between",

    paddingTop: "17px",

    borderTop:
      "1px solid rgba(255,255,255,0.06)",
  },


  cardGithub: {
    display: "flex",

    alignItems: "center",

    gap: "7px",

    color: "#e2e8f0",

    textDecoration: "none",

    fontSize: "12px",

    fontWeight: "700",
  },


  arrow: {
    color: "#60a5fa",

    fontSize: "18px",
  },


  /* ========================================= */
  /* GITHUB CTA */
  /* ========================================= */

  githubSection: {
    position: "relative",

    zIndex: 2,

    maxWidth: "1180px",

    margin: "55px auto 0",

    padding: "25px 28px",

    display: "flex",

    alignItems: "center",

    justifyContent: "space-between",

    gap: "20px",

    flexWrap: "wrap",

    borderRadius: "17px",

    background:
      "linear-gradient(135deg,rgba(37,99,235,0.08),rgba(99,102,241,0.05))",

    border:
      "1px solid rgba(96,165,250,0.12)",
  },


  githubLeft: {
    display: "flex",

    alignItems: "center",

    gap: "15px",
  },


  githubIcon: {
    width: "45px",

    height: "45px",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    borderRadius: "12px",

    background:
      "rgba(255,255,255,0.06)",

    color: "#f8fafc",

    fontSize: "21px",
  },


  githubTitle: {
    margin: "0 0 4px",

    color: "#f8fafc",

    fontSize: "16px",
  },


  githubText: {
    margin: "0",

    color: "#64748b",

    fontSize: "11px",
  },


  githubProfile: {
    display: "inline-flex",

    alignItems: "center",

    gap: "8px",

    padding: "10px 15px",

    borderRadius: "8px",

    background:
      "rgba(255,255,255,0.06)",

    border:
      "1px solid rgba(255,255,255,0.10)",

    color: "#e2e8f0",

    textDecoration: "none",

    fontSize: "11px",

    fontWeight: "700",
  },
};


/* ================================================= */
/* RESPONSIVE CSS */
/* ================================================= */

const styleSheet =
  document.createElement("style");

styleSheet.innerHTML = `

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: #020617;
}

a {
  -webkit-tap-highlight-color: transparent;
}


/* ========================================= */
/* TABLET */
/* ========================================= */

@media (max-width: 1000px) {

  #projects {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }

  #projects .featuredGrid {
    grid-template-columns: 1fr !important;
  }

  #projects .previewColumn {
    order: -1;
  }

}


/* ========================================= */
/* MOBILE */
/* ========================================= */

@media (max-width: 800px) {

  #projects {
    padding-top: 90px !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
  }

  #projects .heading {
    font-size: 38px !important;
  }

  #projects .featuredGrid {
    padding: 30px 22px !important;
  }

  #projects .featuredTitle {
    font-size: 32px !important;
  }

  #projects .projectsGrid {
    grid-template-columns: 1fr !important;
  }

  #projects .otherHeader {
    flex-direction: column !important;
    align-items: flex-start !important;
  }

  #projects .otherDescription {
    text-align: left !important;
  }

}


/* ========================================= */
/* SMALL MOBILE */
/* ========================================= */

@media (max-width: 600px) {

  #projects {
    padding-top: 80px !important;
    padding-left: 15px !important;
    padding-right: 15px !important;
  }

  #projects .heading {
    font-size: 32px !important;
  }

  #projects .headerDescription {
    font-size: 13px !important;
  }

  #projects .featuredCard {
    border-radius: 20px !important;
  }

  #projects .featuredGrid {
    padding: 28px 18px !important;
    border-radius: 19px !important;
  }

  #projects .featuredTitle {
    font-size: 29px !important;
  }

  #projects .featuredSubtitle {
    font-size: 14px !important;
  }

  #projects .featuredDescription {
    font-size: 13px !important;
  }

  #projects .browserWindow {
    transform: none !important;
  }

  #projects .browserAddress {
    font-size: 7px !important;
  }

  #projects .githubSection {
    flex-direction: column !important;
    align-items: flex-start !important;
  }

  #projects .githubProfile {
    width: 100% !important;
    justify-content: center !important;
  }

}


/* ========================================= */
/* VERY SMALL MOBILE */
/* ========================================= */

@media (max-width: 400px) {

  #projects {
    padding-left: 12px !important;
    padding-right: 12px !important;
  }

  #projects .featuredGrid {
    padding: 25px 15px !important;
  }

  #projects .featuredBadge {
    left: 15px !important;
    font-size: 8px !important;
  }

  #projects .featuredTitle {
    font-size: 26px !important;
  }

  #projects .projectCard {
    padding: 22px !important;
  }

}

`;

document.head.appendChild(styleSheet);