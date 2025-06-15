import React, { useState } from "react";
import "./Board.scss";

const Board = () => {
  const [currentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const dummyPosts = [
    { _id: 1, number: 1, title: "첫 번째 게시물", createdAt: "2023-11-01T10:00:00", views: 10 },
    { _id: 2, number: 2, title: "두 번째 게시물", createdAt: "2023-11-02T11:30:00", views: 20 },
    { _id: 3, number: 3, title: "세 번째 게시물", createdAt: "2023-11-03T14:00:00", views: 30 },
    { _id: 4, number: 4, title: "네 번째 게시물", createdAt: "2023-11-04T16:45:00", views: 40 },
    { _id: 5, number: 5, title: "다섯 번째 게시물", createdAt: "2023-11-05T09:15:00", views: 50 },
  ];

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = dummyPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="board">
      <h1 className="board-title">업무 게시판</h1>
      <div className="board-list-wrapper">
        <ul className="board-list">
          <li className="board-header">
            <span className="col-number">번호</span>
            <span className="col-title">제목</span>
            <span className="col-date">작성일</span>
            <span className="col-views">조회수</span>
          </li>
          {currentPosts.map((post) => (
            <li className="board-item" key={post._id}>
              <span className="col-number">{post.number}</span>
              <span className="col-title">{post.title}</span>
              <span className="col-date">{new Date(post.createdAt).toLocaleString()}</span>
              <span className="col-views">{post.views}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Board;
