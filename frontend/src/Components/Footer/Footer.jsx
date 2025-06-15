// src/Components/Footer/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">회사 소개</h3>
            <p className="footer-text">저희는 최고의 서비스를 제공하기 위해 노력하고 있습니다.</p>
          </div>

          <div>
            <h3 className="footer-title">빠른 링크</h3>
            <ul className="footer-list">
              <li><Link to="/" onClick={scrollToTop}>홈</Link></li>
              <li><Link to="/about" onClick={scrollToTop}>회사 정보</Link></li>
              <li><Link to="/leadership" onClick={scrollToTop}>임원 소개</Link></li>
              <li><Link to="/board" onClick={scrollToTop}>업무 게시판</Link></li>
              <li><Link to="/our-services" onClick={scrollToTop}>제공 기술</Link></li>
              <li><Link to="/contact" onClick={scrollToTop}>문의</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">연락처</h3>
            <ul className="footer-text-list">
              <li>서울특별시 강남구</li>
              <li>삼성동 123번지</li>
              <li>전화: 02-1234-5678</li>
              <li>이메일: info@example.com</li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">소셜 미디어</h3>
            <div className="footer-socials">
              <a href="#"><FaFacebook size={20} /></a>
              <a href="#"><FaTwitter size={20} /></a>
              <a href="#"><FaInstagram size={20} /></a>
              <a href="#"><FaLinkedin size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
