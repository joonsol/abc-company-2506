// src/Components/Hero/Hero.jsx
import React from "react";
import "./Hero.scss";
import HeroImage from "../../assets/Human1.jpg"; // 경로에 맞게 수정 필요

const stats = [
  { number: "1,200+", label: "설치 완료" },
  { number: "98%", label: "고객 만족도" },
  { number: "15년+", label: "업계 경력" },
  { number: "24/7", label: "기술 지원" },
];

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              태양광 설비 전문가와 함께
              <span>미래를 만들어갑니다.</span>
            </h1>
            <p>
              안전하고 효율적인 태양광 설비 설치부터 유지보수까지,
              전문가들이 함께합니다.
            </p>
            <div className="hero-buttons">
              <button className="primary">상담 신청하기</button>
              <button className="secondary">더 알아보기</button>
            </div>
          </div>
          <div className="hero-image">
            <img src={HeroImage} alt="태양광 설비" />
          </div>
        </div>
      </div>

      <div className="hero-stats">
        {stats.map((stat, i) => (
          <div key={i} className="stat">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
