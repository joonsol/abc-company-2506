import React, { useState } from "react";
import axios from "axios";
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    status: "in progress",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response =await axios.post(
              "http://localhost:3000/api/contact",
              formData
      )

      if(response.status===201){
        alert("문의가 성공적 접수!11")
        setFormData({
          name:"",
          email:"",
          phone:"",
          message:"",
          status:"in progress"
        })
      }
    } catch (error) {
        console.log("에러 발생: ", error);
      alert("문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    }
  };
  return (
    <div className="contact">
      <div className="contact-inner">
        <div className="contact-header">
          <h1>문의하기</h1>
          <p>
            태양광 설비 설치부터 유지보수까지, 전문가와 상담하세요.
            24시간 내에 답변드리겠습니다.
          </p>
        </div>

        <div className="contact-body">
          {/* 문의 폼 */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>이름</label>
                <input
                  type="text"
                  name="name"
                  placeholder="홍길동"
                  value={formData.name}
                  onChange={handleChange}
                  required />
              </div>
              <div className="form-group">
                <label>이메일</label>
                <input
                  value={formData.email}
                  name="email"
                  onChange={handleChange}
                  type="email"
                  placeholder="example@email.com"
                  required />
              </div>
              <div className="form-group">
                <label>전화번호</label>
                <input
                  value={formData.phone}
                  onChange={handleChange}
                  name="phone"
                  type="tel"
                  placeholder="010-1234-5678"
                  required />
              </div>
              <div className="form-group">
                <label>문의 내용</label>
                <textarea
                  onChange={handleChange}
                  name="message"
                  value={formData.message}
                  placeholder="문의하실 내용을 자세히 적어주세요."
                  required />
              </div>
              <button type="submit">문의하기</button>
            </form>
          </div>

          {/* 연락처 및 지도 */}
          <div className="contact-info">
            <div className="contact-card">
              <h3>연락처 정보</h3>
              {[
                { icon: "phone", title: "전화", info: "02-1234-5678", desc: "평일 09:00 - 18:00" },
                { icon: "envelope", title: "이메일", info: "support@example.com", desc: "24시간 접수 가능" },
                { icon: "map-marker-alt", title: "주소", info: "서울특별시 강남구 삼성동 123번지", desc: "본사" }
              ].map((item, index) => (
                <div className="contact-item" key={index}>
                  <div className="icon">
                    <i className={`fas fa-${item.icon}`}></i>
                  </div>
                  <div className="details">
                    <h4>{item.title}</h4>
                    <p>{item.info}</p>
                    <small>{item.desc}</small>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-map">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25512.18472157322!2d127.18228540787578!3d36.93761547130345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b31f2d016bc07%3A0x34216a2951fa94d4!2sYeongok-gil%2C%20Ipjang-myeon%2C%20Seobuk-gu%2C%20Cheonan-si%2C%20Chungcheongnam-do!5e0!3m2!1sen!2skr!4v1734695969025!5m2!1sen!2skr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
