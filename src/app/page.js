"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import "./globals.css";

function Header() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
  <div className="position-relative text-center text-white">
  {/* Cover Photo */}
  <div className="cover-container bg-dark position-relative w-100" data-aos="fade-up">
    <Image
      src="https://img.freepik.com/premium-photo/visionary-programming-coding-future-software_31965-23948.jpg"
      alt="Cover"
      fill
      style={{ objectFit: "cover", objectPosition: "center" }}
    />
    {/* Centered Text */}
    <div className="position-absolute top-50 start-50 translate-middle w-100 px-3">
      <h1 className="fw-bold text-uppercase" style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}>
        Welcome to Nasir Sultan's Portfolio
      </h1>
    </div>
  </div>
</div>


      {/* Social Media & Buttons */}
      <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-dark text-white p-4">
        {/* Social Media Icons with Continuous Left-to-Right Animation */}
        <div className="icon-container my-4 overflow-hidden" data-aos="fade-right">
          <div className="moving-icons d-flex gap-5">
            <ul className="d-flex gap-5 moving-icons">
              <li>
                <Link href="https://facebook.com" target="_blank">
                  <FaFacebook size="5em" className="text-white" />
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com" target="_blank">
                  <FaLinkedin size="5em" className="text-white" />
                </Link>
              </li>
              <li>
                <Link href="https://github.com/your-username" target="_blank">
                  <FaGithub size="5em" className="text-white" />
                </Link>
              </li>
              <li>
                <Link href="/path-to-cover-letter.pdf" target="_blank">
                  <FaFilePdf size="5em" className="text-white" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Buttons with Margin */}
        <div className="d-flex flex-wrap gap-5 justify-content-center mt-4" data-aos="fade-up">
          <Link href="/components/what">
            <button type="button" className="btn btn-outline-primary px-5 py-3 fs-5">WhatsApp</button>
          </Link>
          <Link href="/components/email">
            <button type="button" className="btn btn-outline-primary px-5 py-3 fs-5">Email</button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-auto w-100">
        <p className="mb-2">&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        <ul className="list-unstyled d-flex gap-3 justify-content-center mb-0">
          <li><Link href="/privacy-policy" className="text-white">Privacy Policy</Link></li>
          <li><Link href="/terms-of-service" className="text-white">Terms of Service</Link></li>
          <li><Link href="/contact" className="text-white">Contact</Link></li>
        </ul>
      </footer>
    </>
  );
}

export default Header;
