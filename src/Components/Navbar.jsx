import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

import resume from "../assets/Chinnareddaiah_Java_Backend_Developer_Resume.pdf";

// =====================================================
// RESUME
// Resume file is located inside:
// src/assets/Chinnareddaiah_Java_Backend_Developer_Resume.pdf
// =====================================================


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever the page changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Certificates",
      path: "/certificates",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      <style>{`

        /* =====================================================
           GLOBAL
        ===================================================== */

        * {
          box-sizing: border-box;
        }


        /* =====================================================
           NAVBAR
        ===================================================== */

        .portfolio-navbar {
          position: fixed;

          top: 0;
          left: 0;
          right: 0;

          height: 72px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 0 6%;

          background:
            rgba(2, 6, 23, 0.90);

          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);

          border-bottom:
            1px solid rgba(255,255,255,0.07);

          z-index: 9999;

          box-shadow:
            0 8px 30px rgba(0,0,0,0.20);
        }


        /* =====================================================
           LOGO
        ===================================================== */

        .portfolio-logo {
          display: flex;
          align-items: center;

          gap: 12px;

          text-decoration: none;

          cursor: pointer;
        }


        .portfolio-logo-box {
          width: 40px;
          height: 40px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 11px;

          background:
            linear-gradient(
              135deg,
              #2563eb,
              #4f46e5
            );

          color: white;

          font-size: 19px;
          font-weight: 900;

          box-shadow:
            0 8px 22px rgba(37,99,235,0.28);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }


        .portfolio-logo:hover
        .portfolio-logo-box {
          transform:
            translateY(-2px);

          box-shadow:
            0 12px 28px rgba(37,99,235,0.38);
        }


        .portfolio-name {
          color: #f8fafc;

          font-size: 17px;

          font-weight: 750;

          letter-spacing: -0.3px;
        }


        .portfolio-name span {
          color: #60a5fa;
        }


        /* =====================================================
           DESKTOP NAVIGATION
        ===================================================== */

        .portfolio-nav-links {
          display: flex;

          align-items: center;

          gap: 5px;
        }


        .portfolio-nav-link {
          position: relative;

          padding: 9px 13px;

          color: #94a3b8;

          text-decoration: none;

          font-size: 13px;

          font-weight: 600;

          border-radius: 8px;

          transition:
            color 0.25s ease,
            background 0.25s ease,
            transform 0.25s ease;
        }


        .portfolio-nav-link:hover {
          color: #e2e8f0;

          background:
            rgba(255,255,255,0.045);

          transform:
            translateY(-1px);
        }


        .portfolio-nav-link.active {
          color: #60a5fa;

          background:
            rgba(96,165,250,0.08);
        }


        .portfolio-nav-link.active::after {
          content: "";

          position: absolute;

          left: 50%;
          bottom: 3px;

          width: 18px;
          height: 2px;

          transform:
            translateX(-50%);

          border-radius: 10px;

          background:
            #60a5fa;
        }


        /* =====================================================
           RESUME BUTTON
        ===================================================== */

        .portfolio-resume {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 8px;

          margin-left: 12px;

          padding: 9px 15px;

          border-radius: 9px;

          background:
            linear-gradient(
              135deg,
              #2563eb,
              #4f46e5
            );

          color: white;

          text-decoration: none;

          font-size: 12px;

          font-weight: 700;

          box-shadow:
            0 7px 20px rgba(37,99,235,0.22);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }


        .portfolio-resume:hover {
          transform:
            translateY(-2px);

          box-shadow:
            0 12px 28px rgba(37,99,235,0.35);
        }


        /* =====================================================
           MOBILE MENU BUTTON
        ===================================================== */

        .portfolio-menu-button {
          display: none;

          width: 40px;
          height: 40px;

          align-items: center;
          justify-content: center;

          border-radius: 10px;

          border:
            1px solid rgba(255,255,255,0.09);

          background:
            rgba(255,255,255,0.045);

          color: #e2e8f0;

          font-size: 17px;

          cursor: pointer;

          transition:
            background 0.25s ease,
            color 0.25s ease;
        }


        .portfolio-menu-button:hover {
          background:
            rgba(96,165,250,0.10);

          color:
            #60a5fa;
        }


        /* =====================================================
           MOBILE PANEL
        ===================================================== */

        .mobile-menu {
          position: fixed;

          top: 72px;

          left: 0;
          right: 0;

          padding: 18px;

          background:
            rgba(2,6,23,0.97);

          backdrop-filter:
            blur(20px);

          -webkit-backdrop-filter:
            blur(20px);

          border-bottom:
            1px solid rgba(255,255,255,0.08);

          box-shadow:
            0 20px 45px rgba(0,0,0,0.35);

          z-index: 9998;
        }


        .mobile-menu-inner {
          display: flex;

          flex-direction: column;

          gap: 5px;

          max-width: 500px;

          margin: auto;
        }


        /* =====================================================
           MOBILE LINKS
        ===================================================== */

        .mobile-link {
          display: flex;

          align-items: center;
          justify-content: space-between;

          padding: 14px 15px;

          border-radius: 10px;

          color: #cbd5e1;

          text-decoration: none;

          font-size: 14px;

          font-weight: 600;

          transition:
            color 0.25s ease,
            background 0.25s ease;
        }


        .mobile-link:hover {
          color: #60a5fa;

          background:
            rgba(96,165,250,0.07);
        }


        .mobile-link.active {
          color: #60a5fa;

          background:
            rgba(96,165,250,0.09);
        }


        .mobile-arrow {
          opacity: 0;

          transition:
            opacity 0.25s ease;
        }


        .mobile-link:hover
        .mobile-arrow,
        .mobile-link.active
        .mobile-arrow {
          opacity: 1;
        }


        /* =====================================================
           MOBILE RESUME
        ===================================================== */

        .mobile-resume {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 8px;

          margin-top: 8px;

          padding: 12px;

          border-radius: 10px;

          background:
            linear-gradient(
              135deg,
              #2563eb,
              #4f46e5
            );

          color: white;

          text-decoration: none;

          font-size: 13px;

          font-weight: 700;

          box-shadow:
            0 7px 20px rgba(37,99,235,0.22);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }


        .mobile-resume:hover {
          transform:
            translateY(-1px);

          box-shadow:
            0 12px 28px rgba(37,99,235,0.35);
        }


        /* =====================================================
           TABLET / MOBILE
        ===================================================== */

        @media (max-width: 992px) {

          .portfolio-navbar {
            height: 68px;

            padding:
              0 20px;
          }


          .portfolio-nav-links {
            display: none;
          }


          .portfolio-menu-button {
            display: flex;
          }


          .mobile-menu {
            top: 68px;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 500px) {

          .portfolio-navbar {
            padding:
              0 16px;
          }


          .portfolio-name {
            font-size: 15px;
          }


          .portfolio-logo-box {
            width: 37px;
            height: 37px;

            font-size: 17px;
          }

        }

      `}</style>


      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="portfolio-navbar">


        {/* =====================================================
            LOGO
        ===================================================== */}

        <Link
          to="/"
          className="portfolio-logo"
        >

          <div className="portfolio-logo-box">
            C
          </div>

          <div className="portfolio-name">
            Chinnareddaiah<span>.</span>
          </div>

        </Link>


        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <div className="portfolio-nav-links">

          {navItems.map((item) => {

            const active =
              location.pathname === item.path;

            return (

              <Link
                key={item.path}
                to={item.path}
                className={
                  `portfolio-nav-link ${
                    active ? "active" : ""
                  }`
                }
              >

                {item.name}

              </Link>

            );

          })}


          {/* =================================================
              DESKTOP RESUME DOWNLOAD
          ================================================= */}

          <a
            href={resume}
            download="Chinnareddaiah_Java_Backend_Developer_Resume.pdf"
            className="portfolio-resume"
            title="Download Resume"
          >

            <FaDownload />

            Resume

          </a>

        </div>


        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          className="portfolio-menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >

          {open
            ? <FaTimes />
            : <FaBars />
          }

        </button>

      </nav>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {open && (

        <div className="mobile-menu">

          <div className="mobile-menu-inner">


            {/* =================================================
                MOBILE NAVIGATION LINKS
            ================================================= */}

            {navItems.map((item) => {

              const active =
                location.pathname === item.path;

              return (

                <Link
                  key={item.path}
                  to={item.path}
                  className={
                    `mobile-link ${
                      active ? "active" : ""
                    }`
                  }
                  onClick={() => setOpen(false)}
                >

                  <span>
                    {item.name}
                  </span>

                  <FaArrowRight
                    className="mobile-arrow"
                  />

                </Link>

              );

            })}


            {/* =================================================
                MOBILE RESUME DOWNLOAD
            ================================================= */}

            <a
              href={resume}
              download="Chinnareddaiah_Java_Backend_Developer_Resume.pdf"
              className="mobile-resume"
              onClick={() => setOpen(false)}
              title="Download Resume"
            >

              <FaDownload />

              Download Resume

            </a>

          </div>

        </div>

      )}

    </>
  );
}