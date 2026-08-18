import cloud from "../assets/cloud.jpg";
import cvip from "../assets/cvip.jpg";
import quantum from "../assets/quantum.jpg";
import fullstack from "../assets/fullstack.jpg";
import swarna from "../assets/swarna.jpg";

import { useState } from "react";

const certificates = [
  {
    image: cloud,
    title: "Cloud Computing",
    category: "CERTIFICATION",
  },
  {
    image: cvip,
    title: "CVIP Certification",
    category: "CERTIFICATION",
  },
  {
    image: quantum,
    title: "Quantum Computing",
    category: "CERTIFICATION",
  },
  {
    image: fullstack,
    title: "Full Stack Development",
    category: "CERTIFICATION",
  },
  {
    image: swarna,
    title: "Professional Certification",
    category: "CERTIFICATION",
  },
];

export default function Certificates() {
  const [hovered, setHovered] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <>
      <section id="certificates" style={styles.section}>
        {/* BACKGROUND EFFECTS */}
        <div style={styles.glowOne}></div>
        <div style={styles.glowTwo}></div>

        {/* HEADER */}
        <div style={styles.header}>
          <div style={styles.sectionLabel}>
            <span style={styles.labelLine}></span>
            ACHIEVEMENTS
            <span style={styles.labelLine}></span>
          </div>

          <h2 style={styles.heading}>
            My <span style={styles.headingAccent}>Certificates</span>
          </h2>

          <p style={styles.description}>
            Certifications and learning achievements that reflect my
            continuous growth in software development and technology.
          </p>
        </div>

        {/* CERTIFICATE GRID */}
        <div style={styles.grid}>
          {certificates.map((certificate, index) => {
            const isHovered = hovered === index;

            return (
              <div
                key={index}
                style={{
                  ...styles.card,
                  ...(isHovered ? styles.cardHover : {}),
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelectedCertificate(certificate)}
              >
                {/* IMAGE */}
                <div style={styles.imageWrapper}>
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    style={{
                      ...styles.image,
                      ...(isHovered ? styles.imageHover : {}),
                    }}
                  />

                  {/* OVERLAY */}
                  <div
                    style={{
                      ...styles.imageOverlay,
                      opacity: isHovered ? 1 : 0,
                    }}
                  >
                    <span style={styles.viewText}>
                      View Certificate
                    </span>
                  </div>

                  {/* NUMBER */}
                  <div style={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* CONTENT */}
                <div style={styles.cardContent}>
                  <div style={styles.category}>
                    {certificate.category}
                  </div>

                  <h3 style={styles.cardTitle}>
                    {certificate.title}
                  </h3>

                  <div style={styles.cardFooter}>
                    <span>Certificate {String(index + 1).padStart(2, "0")}</span>

                    <span style={styles.arrow}>↗</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM MESSAGE */}
        <div style={styles.bottomSection}>
          <div style={styles.bottomLine}></div>

          <p style={styles.bottomText}>
            Always learning. Always improving.
          </p>

          <div style={styles.bottomLine}></div>
        </div>
      </section>

      {/* CERTIFICATE MODAL */}
      {selectedCertificate && (
        <div
          style={styles.modal}
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            style={styles.modalContent}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              style={styles.closeButton}
              onClick={() => setSelectedCertificate(null)}
            >
              ×
            </button>

            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              style={styles.modalImage}
            />

            <div style={styles.modalTitle}>
              {selectedCertificate.title}
            </div>
          </div>
        </div>
      )}
    </>
  );
}


/* ================================================= */
/* STYLES */
/* ================================================= */

const styles = {
  /* SECTION */

  section: {
    position: "relative",
    minHeight: "100vh",
    padding: "110px 6% 90px",
    overflow: "hidden",
    boxSizing: "border-box",

    background:
      "radial-gradient(circle at 10% 10%, rgba(37,99,235,0.13), transparent 30%)," +
      "radial-gradient(circle at 90% 70%, rgba(99,102,241,0.10), transparent 30%)," +
      "linear-gradient(135deg,#020617 0%,#0b1120 48%,#111827 100%)",

    color: "#f8fafc",
  },


  /* BACKGROUND GLOWS */

  glowOne: {
    position: "absolute",
    width: "450px",
    height: "450px",
    borderRadius: "50%",
    background: "rgba(37,99,235,0.07)",
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
    background: "rgba(99,102,241,0.06)",
    filter: "blur(100px)",
    right: "-220px",
    bottom: "-200px",
    pointerEvents: "none",
  },


  /* HEADER */

  header: {
    position: "relative",
    zIndex: 2,
    maxWidth: "750px",
    margin: "0 auto 60px",
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

  description: {
    maxWidth: "650px",
    margin: "0 auto",
    color: "#94a3b8",
    fontSize: "15px",
    lineHeight: "1.8",
  },


  /* GRID */

  grid: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1180px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns:
      "repeat(3, minmax(0, 1fr))",
    gap: "22px",
  },


  /* CARD */

  card: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "18px",

    background:
      "linear-gradient(145deg,rgba(30,41,59,0.82),rgba(15,23,42,0.95))",

    border:
      "1px solid rgba(255,255,255,0.07)",

    boxShadow:
      "0 15px 40px rgba(0,0,0,0.25)",

    transition:
      "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",

    cursor: "pointer",
  },

  cardHover: {
    transform: "translateY(-8px)",

    borderColor:
      "rgba(96,165,250,0.35)",

    boxShadow:
      "0 25px 55px rgba(0,0,0,0.35)",
  },


  /* IMAGE */

  imageWrapper: {
    position: "relative",
    width: "100%",
    height: "245px",
    overflow: "hidden",
    background: "#0f172a",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",

    display: "block",

    transition:
      "transform 0.5s ease",
  },

  imageHover: {
    transform: "scale(1.06)",
  },


  /* IMAGE OVERLAY */

  imageOverlay: {
    position: "absolute",
    inset: 0,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    background:
      "rgba(2,6,23,0.55)",

    transition:
      "opacity 0.3s ease",
  },

  viewText: {
    padding: "10px 16px",
    borderRadius: "8px",

    background:
      "rgba(255,255,255,0.10)",

    border:
      "1px solid rgba(255,255,255,0.20)",

    backdropFilter: "blur(8px)",

    color: "#ffffff",

    fontSize: "12px",
    fontWeight: "700",
  },


  /* NUMBER */

  number: {
    position: "absolute",
    top: "14px",
    right: "14px",

    padding: "6px 9px",

    borderRadius: "7px",

    background:
      "rgba(2,6,23,0.72)",

    border:
      "1px solid rgba(255,255,255,0.10)",

    color: "#cbd5e1",

    fontSize: "11px",
    fontWeight: "800",

    backdropFilter: "blur(8px)",
  },


  /* CARD CONTENT */

  cardContent: {
    padding: "20px 21px 18px",
  },

  category: {
    marginBottom: "7px",

    color: "#60a5fa",

    fontSize: "9px",
    fontWeight: "800",

    letterSpacing: "1.8px",
  },

  cardTitle: {
    margin: "0",

    color: "#f8fafc",

    fontSize: "18px",
    fontWeight: "750",

    letterSpacing: "-0.3px",
  },


  /* FOOTER */

  cardFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    marginTop: "17px",
    paddingTop: "13px",

    borderTop:
      "1px solid rgba(255,255,255,0.06)",

    color: "#64748b",

    fontSize: "10px",
  },

  arrow: {
    color: "#60a5fa",
    fontSize: "18px",
  },


  /* BOTTOM */

  bottomSection: {
    position: "relative",
    zIndex: 2,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "15px",

    marginTop: "60px",
  },

  bottomLine: {
    width: "45px",
    height: "1px",

    background:
      "rgba(96,165,250,0.25)",
  },

  bottomText: {
    margin: 0,

    color: "#64748b",

    fontSize: "11px",
    letterSpacing: "1px",
  },


  /* MODAL */

  modal: {
    position: "fixed",
    inset: 0,

    zIndex: 9999,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    padding: "30px",

    background:
      "rgba(2,6,23,0.88)",

    backdropFilter: "blur(10px)",
  },

  modalContent: {
    position: "relative",

    maxWidth: "1000px",
    maxHeight: "90vh",

    padding: "12px",

    borderRadius: "16px",

    background:
      "linear-gradient(145deg,#111827,#020617)",

    border:
      "1px solid rgba(255,255,255,0.12)",

    boxShadow:
      "0 30px 100px rgba(0,0,0,0.6)",
  },

  modalImage: {
    display: "block",

    maxWidth: "100%",
    maxHeight: "75vh",

    objectFit: "contain",

    borderRadius: "10px",
  },

  modalTitle: {
    padding: "15px 5px 5px",

    color: "#f8fafc",

    fontSize: "15px",
    fontWeight: "700",

    textAlign: "center",
  },

  closeButton: {
    position: "absolute",

    top: "-15px",
    right: "-15px",

    width: "34px",
    height: "34px",

    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "50%",

    background: "#111827",

    color: "#ffffff",

    fontSize: "22px",
    lineHeight: "1",

    cursor: "pointer",

    zIndex: 10,
  },
};


/* ================================================= */
/* RESPONSIVE */
/* ================================================= */

const styleSheet = document.createElement("style");

styleSheet.innerHTML = `

@media (max-width: 1000px) {

  #certificates {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }

  #certificates > div {
    max-width: 100%;
  }

  #certificates .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }

}


@media (max-width: 700px) {

  #certificates {
    padding-top: 90px !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
  }

  #certificates .grid {
    grid-template-columns: 1fr !important;
  }

  #certificates h2 {
    font-size: 36px !important;
  }

  #certificates .imageWrapper {
    height: 260px !important;
  }

}


@media (max-width: 450px) {

  #certificates {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }

  #certificates h2 {
    font-size: 32px !important;
  }

  #certificates .imageWrapper {
    height: 230px !important;
  }

}

`;

document.head.appendChild(styleSheet);