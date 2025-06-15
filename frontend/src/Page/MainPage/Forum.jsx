// src/Components/Forum/Forum.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Forum.scss";

const dummyPosts = [
  {
    _id: 1,
    number: 1,
    title: "첫 번째 게시물",
    views: 120,
    fileUrl: ["file1"],
    createdAt: "2023-01-01",
  },
  {
    _id: 2,
    number: 2,
    title: "두 번째 게시물",
    views: 95,
    fileUrl: [],
    createdAt: "2023-01-05",
  },
  {
    _id: 3,
    number: 3,
    title: "세 번째 게시물",
    views: 70,
    fileUrl: ["file2", "file3"],
    createdAt: "2023-01-10",
  },
  {
    _id: 4,
    number: 4,
    title: "네 번째 게시물",
    views: 50,
    fileUrl: [],
    createdAt: "2023-01-15",
  },
  {
    _id: 5,
    number: 5,
    title: "다섯 번째 게시물",
    views: 30,
    fileUrl: ["file4"],
    createdAt: "2023-01-20",
  },
];

const Forum = () => {
  return (
    <div className="forum">
      <div className="forum-container">
        <div className="forum-title">
          <h2>업무 게시판</h2>
        </div>

        <div className="forum-actions">
          <Link to="/board" className="view-all" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            전체보기
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="forum-posts">
          {dummyPosts.length === 0 ? (
            <div className="no-posts">최근 게시물이 없습니다.</div>
          ) : (
            dummyPosts.map((post) => (
              <div key={post._id} className="forum-post">
                <div className="forum-post-inner">
                  <div className="forum-post-content">
                    <div className="forum-meta">
                      <span>No. {post.number}</span>
                      <span>조회수: {post.views}</span>
                      {post.fileUrl.length > 0 && <span>파일: {post.fileUrl.length}</span>}
                    </div>
                    <h3 className="post-title">{post.title}</h3>
                    <div className="post-date">{post.createdAt}</div>
                  </div>
                  <div className="forum-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Forum;
