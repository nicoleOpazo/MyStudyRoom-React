import React from "react";
import "./Post.css";
const PostFirst = ({ post: { title, body, imgUrl, author, href }, index }) => {
  return (
    <div className="post1">
      <h1 className="heading">{title}</h1>
      <img className="image" src={imgUrl} alt="post"/>
      <p>{body}</p>
      <div className="info">
        <h4>Written by: {author}</h4>
        <button className="btn btn-success">
            <a href={href}>Volver al Blog</a>
        </button>
      </div>
    </div>
  );
};

export default PostFirst;