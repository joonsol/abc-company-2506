import React from "react";
import Human1 from "../../assets/Human1.jpg";
import "./Leadership.scss"; // SCSS 연결

const Leadership = () => {
  const executives = [
    {
      name: "이부사장",
      position: "COO",
      description:
        "운영 총괄 책임자로서 효율적인 기업 운영과 프로세스 혁신을 주도하고 있습니다.",
      imageUrl: Human1,
    },
    {
      name: "박이사",
      position: "CTO",
      description: "최신 기술 트렌드를 선도하며 R&D 부문을 총괄하고 있습니다.",
      imageUrl: Human1,
    },
    {
      name: "김이사",
      position: "CFO",
      description:
        "재무 전략 수립 및 기업 가치 향상을 위한 재무관리를 담당하고 있습니다.",
      imageUrl: Human1,
    },
    {
      name: "최이사",
      position: "CMO",
      description:
        "글로벌 마케팅 전략 수립 및 브랜드 가치 향상을 주도하고 있습니다.",
      imageUrl: Human1,
    },
  ];

  const teamMembers = [
    {
      name: "정과장",
      position: "개발팀장",
      description: "신제품 개발 및 기술 혁신을 담당하고 있습니다.",
      imageUrl: Human1,
    },
    {
      name: "최과장",
      position: "영업팀장",
      description: "글로벌 시장 개척 및 고객 관리를 담당하고 있습니다.",
      imageUrl: Human1,
    },
    {
      name: "한과장",
      position: "품질관리팀장",
      description: "제품 품질 향상 및 품질 시스템 관리를 담당하고 있습니다.",
      imageUrl: Human1,
    },
    {
      name: "김과장",
      position: "인사팀장",
      description: "인사 정책 수립 및 인사 관리를 담당하고 있습니다.",
      imageUrl: Human1,
    },
  ];

  return (
    <div className="leadership">
      <div className="section-header">
        <h1>임원진 소개</h1>
        <p>혁신과 성장을 이끄는 ABC Company의 리더쉽</p>
      </div>

      <div className="ceo-section">
        <div className="ceo-text">
          <h2>CEO 인사말</h2>
          <div className="content">
            <p>안녕하십니까, ABC Company 대표이사 김대표입니다.</p>
            <p>
              저희 ABC Company는 20년 이상의 전기 산업 경력을 바탕으로, 혁신적인 기술과
              서비스를 통해 고객 여러분께 최상의 가치를 제공하기 위해 노력하고 있습니다.
            </p>
            <p>
              급변하는 글로벌 시장 환경 속에서도 지속적인 연구개발과 품질 혁신을 통해
              세계 최고 수준의 제품과 서비스를 제공하겠습니다.
            </p>
            <p className="signature">ABC Company 대표이사 김대표 드림</p>
          </div>
        </div>
        <div className="ceo-image">
          <img src={Human1} alt="CEO" />
          <div className="caption">
            <h3>김대표</h3>
            <p>대표이사</p>
          </div>
        </div>
      </div>

      <div className="executives">
        <h2>경영진</h2>
        <div className="card-grid">
          {executives.map((e, i) => (
            <div className="card" key={i}>
              <div className="card-image">
                <img src={e.imageUrl} alt={e.name} />
              </div>
              <div className="card-content">
                <h3>{e.name}</h3>
                <p className="position">{e.position}</p>
                <p>{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="team">
        <h2>핵심 구성원</h2>
        <div className="card-grid">
          {teamMembers.map((m, i) => (
            <div className="card" key={i}>
              <div className="card-image">
                <img src={m.imageUrl} alt={m.name} />
              </div>
              <div className="card-content">
                <h3>{m.name}</h3>
                <p className="position">{m.position}</p>
                <p>{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
