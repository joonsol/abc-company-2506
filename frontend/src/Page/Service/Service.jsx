import React from 'react';
import './Service.scss';

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: '맞춤형 소프트웨어 개발',
      description: '고객의 요구사항에 맞는 최적화된 솔루션을 제공합니다.',
      icon: '💻'
    },
    {
      id: 2,
      title: '클라우드 서비스',
      description: '안정적이고 확장 가능한 클라우드 인프라 구축 및 관리',
      icon: '☁️'
    },
    {
      id: 3,
      title: '보안 솔루션',
      description: '최신 보안 기술을 적용한 안전한 시스템 구축',
      icon: '🔒'
    },
    {
      id: 4,
      title: '기술 컨설팅',
      description: '전문가의 분석을 통한 최적의 기술 전략 수립',
      icon: '📊'
    }
  ];

  return (
    <div className="services">
      <div className="services-header">
        <h1>우리의 서비스</h1>
        <p>혁신적인 기술로 비즈니스의 성공을 지원합니다.</p>
      </div>

      <div className="services-grid">
        {servicesList.map((service) => (
          <div key={service.id} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div className="services-why">
        <h2>왜 우리를 선택해야 할까요?</h2>
        <div className="why-grid">
          <div className="why-item">
            <h4>10년+ 경험</h4>
            <p>다양한 산업 분야의 프로젝트 경험</p>
          </div>
          <div className="why-item">
            <h4>전문가 팀</h4>
            <p>숙련된 개발자와 컨설턴트로 구성</p>
          </div>
          <div className="why-item">
            <h4>24/7 지원</h4>
            <p>연중무휴 기술 지원 서비스</p>
          </div>
        </div>
      </div>

      <div className="services-process">
        <h2>프로젝트 진행 프로세스</h2>
        <div className="process-grid">
          {[
            { step: '01', title: '요구사항 분석', desc: '고객의 니즈와 목표를 정확히 파악' },
            { step: '02', title: '설계 및 기획', desc: '최적의 솔루션 설계와 개발 계획 수립' },
            { step: '03', title: '개발 및 테스트', desc: '체계적인 개발과 품질 검증 진행' },
            { step: '04', title: '배포 및 유지보수', desc: '안정적인 서비스 운영과 지속적인 개선' },
          ].map((item, index) => (
            <div key={index} className="process-step">
              <div className="step">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="services-cta">
        <h2>프로젝트를 시작할 준비가 되셨나요?</h2>
        <p>전문가와 상담하고 최적의 솔루션을 찾아보세요</p>
        <button>무료 상담 신청하기</button>
      </div>
    </div>
  );
};

export default Services;
