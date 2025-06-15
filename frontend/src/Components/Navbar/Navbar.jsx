
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import "./Navbar.scss"
const menuItems = [
  { path: "/", label: "홈" },
  { path: "/about", label: "회사 정보" },
  { path: "/leadership", label: "임원 소개" },
  { path: "/board", label: "업무 게시판" },
  { path: "/our-services", label: "제공 기술" },
  { path: "/contact", label: "문의하기" }
];
const MenuItem = ({ path, label, onClick }) => (
  <li>
    <Link
      to={path}
      className="hover:text-blue-600 transition duration-300"
      onClick={onClick}
    >
      {label}
    </Link>
  </li>
);
const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('ko');

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
   <nav className="navbar">
  <div className="navbar-container">
    <h1 className="navbar-logo">
      <Link to="/">ABC Company</Link>
    </h1>

    <div className="navbar-menu">
      <ul className="navbar-menu-list">
        {menuItems.map((item) => (
          <MenuItem key={item.path} {...item} />
        ))}
      </ul>
    </div>

    <select 
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="language-select"
    >
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </select>

    <button className="menu-toggle-button" onClick={toggleMenu} aria-label="메뉴">
      {isOpen ? <HiX /> : <HiMenu />}
    </button>
  </div>

  <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
    <div className="mobile-menu-inner">
      <button className="close-button" onClick={toggleMenu} aria-label="닫기">
        <HiX />
      </button>
      <ul className="mobile-menu-list">
        {menuItems.map((item) => (
          <MenuItem
            key={item.path}
            {...item}
            onClick={() => {
              setIsOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ))}
      </ul>
      <select 
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="mobile-language-select"
      >
        <option value="ko">한국어</option>
        <option value="en">English</option>
      </select>
    </div>
  </div>
</nav>

  )
}

export default Navbar