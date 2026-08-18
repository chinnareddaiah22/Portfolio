import { useState, useEffect } from "react";

export default function About() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 768;
  const isTablet = width > 768 && width <= 1024;

  return (
    <div style={styles.page(isMobile)}>

      {/* HERO / ABOUT INTRO */}
      <section style={styles.heroSection(isMobile)}>
        <div style={styles.badge}>
          <span style={styles.dot}></span>
          Java Developer
        </div>

        <h1 style={styles.title(isMobile)}>
          About <span style={styles.highlight}>Me</span>
        </h1>

        <div style={styles.line}></div>

        <p style={styles.intro(isMobile)}>
          I am a passionate and detail-oriented{" "}
          <strong>Java Developer</strong> with a strong foundation
          in Core Java and object-oriented programming. I enjoy
          developing practical applications and solving real-world
          problems through clean and maintainable code.
        </p>

        <p style={styles.intro(isMobile)}>
          My development experience includes{" "}
          <strong>
            Core Java, JDBC, Servlets, JSP, Spring Core,
            Hibernate/JPA, SQL, and Oracle Database
          </strong>
          . I also have working knowledge of{" "}
          <strong>HTML, CSS, and basic JavaScript</strong>
          for web application development.
        </p>

        <p style={styles.intro(isMobile)}>
          Through my projects, I have gained hands-on experience
          building database-driven applications, authentication
          systems, and a complete e-commerce application. I am
          continuously learning and improving my skills to become
          a strong software developer.
        </p>
      </section>

      {/* TECHNICAL SKILLS */}
      <section style={styles.section(isMobile)}>
        <div style={styles.sectionHeading}>
          <span style={styles.sectionNumber}>01</span>

          <div>
            <h2 style={styles.sectionTitle(isMobile)}>
              Technical Skills
            </h2>

            <p style={styles.sectionDescription}>
              Technologies and concepts I work with
            </p>
          </div>
        </div>

        <div style={styles.skillsGrid(isMobile, isTablet)}>

          {/* CORE JAVA */}
          <SkillCard
            icon="☕"
            title="Core Java"
            description="Strong foundation in Java programming and OOP concepts."
            skills={[
              "Core Java",
              "OOP",
              "Collections",
              "Exception Handling",
              "Multithreading",
            ]}
          />

          {/* JAVA WEB */}
          <SkillCard
            icon="🌐"
            title="Java Web"
            description="Building database-driven Java web applications."
            skills={[
              "JDBC",
              "Servlets",
              "JSP",
              "Sessions",
              "Cookies",
              "Authentication",
            ]}
          />

          {/* FRAMEWORKS */}
          <SkillCard
            icon="⚙️"
            title="Frameworks"
            description="Working with Java frameworks and ORM technologies."
            skills={[
              "Spring Core",
              "Dependency Injection",
              "Hibernate",
              "JPA",
              "ORM",
            ]}
          />

          {/* DATABASE */}
          <SkillCard
            icon="🗄️"
            title="Database"
            description="Working with relational databases and SQL queries."
            skills={[
              "SQL",
              "Oracle",
              "CRUD",
              "Joins",
              "Constraints",
              "JDBC Connectivity",
            ]}
          />

          {/* FRONTEND */}
          <SkillCard
            icon="🎨"
            title="Frontend"
            description="Basic frontend development for web applications."
            skills={[
              "HTML",
              "CSS",
              "JavaScript",
              "Responsive Design",
              "Flexbox",
            ]}
          />

          {/* TOOLS */}
          <SkillCard
            icon="🛠️"
            title="Tools & Platforms"
            description="Tools used for development, version control and deployment."
            skills={[
              "Git",
              "GitHub",
              "Apache Tomcat",
              "Eclipse",
              "VS Code",
            ]}
          />

        </div>
      </section>

      {/* EDUCATION */}
      <section style={styles.section(isMobile)}>
        <div style={styles.sectionHeading}>
          <span style={styles.sectionNumber}>02</span>

          <div>
            <h2 style={styles.sectionTitle(isMobile)}>
              Education
            </h2>

            <p style={styles.sectionDescription}>
              My academic background
            </p>
          </div>
        </div>

        <div style={styles.educationCard(isMobile)}>

          <div style={styles.educationIcon}>
            🎓
          </div>

          <div style={styles.educationContent}>

            <div style={styles.educationTop}>
              <span style={styles.yearBadge}>
                2022 – 2026
              </span>
            </div>

            <h3 style={styles.educationTitle(isMobile)}>
              B.Tech – Computer Science & Engineering
            </h3>

            <p style={styles.college}>
              Sri Sai Institute of Technology and Science, Rayachoty
            </p>

            <div style={styles.educationDetails}>

              {/* ONLY CHANGED: PERCENTAGE → CGPA */}
              <div style={styles.detailBox}>
                <span style={styles.detailLabel}>
                  CGPA
                </span>

                <strong style={styles.detailValue}>
                  7.89 / 10
                </strong>
              </div>

              <div style={styles.detailBox}>
                <span style={styles.detailLabel}>
                  Degree
                </span>

                <strong style={styles.detailValue}>
                  B.Tech
                </strong>
              </div>

              <div style={styles.detailBox}>
                <span style={styles.detailLabel}>
                  Branch
                </span>

                <strong style={styles.detailValue}>
                  CSE
                </strong>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* WHAT I WORK WITH */}
      <section style={styles.techSection(isMobile)}>

        <h2 style={styles.techTitle(isMobile)}>
          Technologies I Work With
        </h2>

        <p style={styles.techDescription}>
          A quick overview of my current technical stack
        </p>

        <div style={styles.techPills}>
          {[
            "Java",
            "OOP",
            "Collections",
            "Multithreading",
            "Exception Handling",
            "JDBC",
            "Servlet",
            "JSP",
            "Spring Core",
            "Hibernate",
            "JPA",
            "SQL",
            "Oracle",
            "HTML",
            "CSS",
            "JavaScript",
            "Git",
            "GitHub",
            "Tomcat",
          ].map((tech, index) => (
            <span key={index} style={styles.techPill}>
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* HOBBIES */}
      <section style={styles.section(isMobile)}>

        <div style={styles.sectionHeading}>
          <span style={styles.sectionNumber}>03</span>

          <div>
            <h2 style={styles.sectionTitle(isMobile)}>
              Beyond Coding
            </h2>

            <p style={styles.sectionDescription}>
              Things I enjoy outside development
            </p>
          </div>
        </div>

        <div style={styles.hobbiesGrid(isMobile)}>

          <div style={styles.hobbyCard}>
            <span style={styles.hobbyIcon}>🏏</span>

            <div>
              <h3 style={styles.hobbyTitle}>
                Cricket
              </h3>

              <p style={styles.hobbyText}>
                I enjoy playing cricket and spending time
                improving my teamwork and decision-making skills.
              </p>
            </div>
          </div>

          <div style={styles.hobbyCard}>
            <span style={styles.hobbyIcon}>♟️</span>

            <div>
              <h3 style={styles.hobbyTitle}>
                Chess
              </h3>

              <p style={styles.hobbyText}>
                Chess helps me improve logical thinking,
                patience and strategic problem solving.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL MESSAGE */}
      <section style={styles.finalSection(isMobile)}>
        <h2 style={styles.finalTitle(isMobile)}>
          Always Learning. Always Building.
        </h2>

        <p style={styles.finalText}>
          I am looking forward to working on challenging projects,
          learning from experienced developers and growing as a
          professional Java Developer.
        </p>
      </section>

    </div>
  );
}


/* -------------------------------- */
/* SKILL CARD COMPONENT */
/* -------------------------------- */

function SkillCard({
  icon,
  title,
  description,
  skills,
}) {
  return (
    <div
      style={styles.skillCard}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "translateY(-6px)";
        e.currentTarget.style.borderColor =
          "rgba(96,165,250,0.5)";
        e.currentTarget.style.boxShadow =
          "0 20px 45px rgba(0,0,0,0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "translateY(0)";
        e.currentTarget.style.borderColor =
          "rgba(255,255,255,0.08)";
        e.currentTarget.style.boxShadow =
          "0 15px 35px rgba(0,0,0,0.20)";
      }}
    >

      <div style={styles.skillIcon}>
        {icon}
      </div>

      <h3 style={styles.skillTitle}>
        {title}
      </h3>

      <p style={styles.skillDescription}>
        {description}
      </p>

      <div style={styles.skillPills}>
        {skills.map((skill, index) => (
          <span
            key={index}
            style={styles.skillPill}
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  );
}


/* -------------------------------- */
/* STYLES */
/* -------------------------------- */

const styles = {

  page: (isMobile) => ({
    minHeight: "100vh",
    paddingTop: isMobile ? "95px" : "110px",
    paddingBottom: "70px",
    paddingLeft: isMobile ? "18px" : "60px",
    paddingRight: isMobile ? "18px" : "60px",

    background:
      "radial-gradient(circle at 10% 10%, rgba(37,99,235,0.15), transparent 30%)," +
      "radial-gradient(circle at 90% 50%, rgba(99,102,241,0.12), transparent 30%)," +
      "linear-gradient(135deg, #020617 0%, #0f172a 50%, #111827 100%)",

    color: "#f8fafc",
    boxSizing: "border-box",
  }),


  /* ABOUT INTRO */

  heroSection: (isMobile) => ({
    maxWidth: "1050px",
    margin: "0 auto",
    textAlign: isMobile ? "center" : "left",
    paddingBottom: "70px",
  }),

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",

    padding: "8px 16px",

    borderRadius: "30px",

    background:
      "rgba(37,99,235,0.12)",

    border:
      "1px solid rgba(96,165,250,0.25)",

    color: "#93c5fd",

    fontSize: "14px",
    fontWeight: "600",

    marginBottom: "20px",
  },

  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#22c55e",

    boxShadow:
      "0 0 10px rgba(34,197,94,0.8)",
  },

  title: (isMobile) => ({
    fontSize: isMobile ? "38px" : "56px",
    lineHeight: "1.1",
    margin: "0 0 18px",
    fontWeight: "800",
    letterSpacing: "-1px",
  }),

  highlight: {
    color: "#60a5fa",
  },

  line: {
    width: "70px",
    height: "4px",
    borderRadius: "10px",
    background:
      "linear-gradient(90deg,#3b82f6,#8b5cf6)",
    marginBottom: "30px",
  },

  intro: (isMobile) => ({
    maxWidth: "950px",

    fontSize: isMobile ? "15px" : "17px",

    lineHeight: "1.9",

    color: "#cbd5e1",

    marginBottom: "18px",
  }),


  /* SECTION */

  section: (isMobile) => ({
    maxWidth: "1150px",
    margin: "0 auto",
    paddingTop: "55px",
    paddingBottom: "35px",
  }),

  sectionHeading: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    marginBottom: "30px",
  },

  sectionNumber: {
    color: "#60a5fa",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: "2px",
  },

  sectionTitle: (isMobile) => ({
    margin: 0,
    fontSize: isMobile ? "27px" : "34px",
    fontWeight: "750",
    color: "#f8fafc",
  }),

  sectionDescription: {
    margin: "5px 0 0",
    color: "#94a3b8",
    fontSize: "14px",
  },


  /* SKILLS */

  skillsGrid: (isMobile, isTablet) => ({
    display: "grid",

    gridTemplateColumns:
      isMobile
        ? "1fr"
        : isTablet
        ? "repeat(2, 1fr)"
        : "repeat(3, 1fr)",

    gap: "20px",
  }),

  skillCard: {
    padding: "26px",

    borderRadius: "18px",

    background:
      "linear-gradient(145deg, rgba(30,41,59,0.90), rgba(15,23,42,0.92))",

    border:
      "1px solid rgba(255,255,255,0.08)",

    boxShadow:
      "0 15px 35px rgba(0,0,0,0.20)",

    transition:
      "all 0.3s ease",
  },

  skillIcon: {
    width: "48px",
    height: "48px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: "14px",

    background:
      "linear-gradient(135deg, rgba(37,99,235,0.25), rgba(99,102,241,0.20))",

    fontSize: "24px",

    marginBottom: "17px",
  },

  skillTitle: {
    margin: "0 0 9px",

    fontSize: "20px",

    color: "#f8fafc",
  },

  skillDescription: {
    margin: "0 0 18px",

    color: "#94a3b8",

    fontSize: "14px",

    lineHeight: "1.6",
  },

  skillPills: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },

  skillPill: {
    padding: "6px 10px",

    borderRadius: "20px",

    background:
      "rgba(59,130,246,0.10)",

    border:
      "1px solid rgba(96,165,250,0.15)",

    color: "#bfdbfe",

    fontSize: "12px",

    fontWeight: "500",
  },


  /* EDUCATION */

  educationCard: (isMobile) => ({
    display: "flex",

    flexDirection:
      isMobile ? "column" : "row",

    gap: "22px",

    padding: isMobile ? "22px" : "30px",

    borderRadius: "20px",

    background:
      "linear-gradient(145deg, rgba(30,41,59,0.92), rgba(15,23,42,0.90))",

    border:
      "1px solid rgba(255,255,255,0.08)",

    boxShadow:
      "0 18px 40px rgba(0,0,0,0.25)",
  }),

  educationIcon: {
    width: "60px",
    height: "60px",

    minWidth: "60px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: "16px",

    background:
      "linear-gradient(135deg,#2563eb,#6366f1)",

    fontSize: "28px",

    boxShadow:
      "0 8px 25px rgba(37,99,235,0.3)",
  },

  educationContent: {
    flex: 1,
  },

  educationTop: {
    marginBottom: "10px",
  },

  yearBadge: {
    display: "inline-block",

    padding: "5px 11px",

    borderRadius: "20px",

    background:
      "rgba(34,197,94,0.10)",

    border:
      "1px solid rgba(34,197,94,0.20)",

    color: "#86efac",

    fontSize: "12px",

    fontWeight: "600",
  },

  educationTitle: (isMobile) => ({
    margin: "8px 0",

    fontSize: isMobile ? "19px" : "23px",

    color: "#f8fafc",
  }),

  college: {
    margin: "0 0 22px",

    color: "#94a3b8",

    fontSize: "15px",

    lineHeight: "1.6",
  },

  educationDetails: {
    display: "flex",

    flexWrap: "wrap",

    gap: "12px",
  },

  detailBox: {
    padding: "10px 16px",

    borderRadius: "12px",

    background:
      "rgba(255,255,255,0.04)",

    border:
      "1px solid rgba(255,255,255,0.06)",
  },

  detailLabel: {
    display: "block",

    color: "#64748b",

    fontSize: "11px",

    marginBottom: "4px",
  },

  detailValue: {
    color: "#dbeafe",

    fontSize: "14px",
  },


  /* TECHNOLOGIES */

  techSection: (isMobile) => ({
    maxWidth: "1150px",

    margin: "65px auto 25px",

    padding: isMobile ? "30px 22px" : "45px",

    textAlign: "center",

    borderRadius: "24px",

    background:
      "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(99,102,241,0.10))",

    border:
      "1px solid rgba(96,165,250,0.12)",
  }),

  techTitle: (isMobile) => ({
    margin: "0 0 8px",

    fontSize: isMobile ? "25px" : "32px",

    color: "#f8fafc",
  }),

  techDescription: {
    margin: "0 0 25px",

    color: "#94a3b8",

    fontSize: "14px",
  },

  techPills: {
    display: "flex",

    justifyContent: "center",

    flexWrap: "wrap",

    gap: "10px",
  },

  techPill: {
    padding: "9px 15px",

    borderRadius: "25px",

    background:
      "rgba(15,23,42,0.75)",

    border:
      "1px solid rgba(96,165,250,0.15)",

    color: "#bfdbfe",

    fontSize: "13px",

    transition: "0.3s ease",
  },


  /* HOBBIES */

  hobbiesGrid: (isMobile) => ({
    display: "grid",

    gridTemplateColumns:
      isMobile
        ? "1fr"
        : "repeat(2, 1fr)",

    gap: "20px",
  }),

  hobbyCard: {
    display: "flex",

    alignItems: "center",

    gap: "18px",

    padding: "22px",

    borderRadius: "18px",

    background:
      "rgba(30,41,59,0.75)",

    border:
      "1px solid rgba(255,255,255,0.07)",
  },

  hobbyIcon: {
    fontSize: "32px",
  },

  hobbyTitle: {
    margin: "0 0 5px",

    color: "#f8fafc",

    fontSize: "18px",
  },

  hobbyText: {
    margin: 0,

    color: "#94a3b8",

    fontSize: "13px",

    lineHeight: "1.6",
  },


  /* FINAL */

  finalSection: (isMobile) => ({
    maxWidth: "850px",

    margin: "70px auto 0",

    padding: isMobile
      ? "35px 22px"
      : "45px",

    textAlign: "center",

    borderRadius: "24px",

    background:
      "linear-gradient(135deg, rgba(37,99,235,0.18), rgba(99,102,241,0.15))",

    border:
      "1px solid rgba(96,165,250,0.15)",
  }),

  finalTitle: (isMobile) => ({
    margin: "0 0 12px",

    fontSize: isMobile ? "24px" : "31px",

    color: "#f8fafc",
  }),

  finalText: {
    maxWidth: "650px",

    margin: "0 auto",

    color: "#cbd5e1",

    lineHeight: "1.8",

    fontSize: "15px",
  },
};