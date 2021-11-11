import React from "react";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
     return (
          <div className="card-container">
               <Link to={`/posts/${post.id}`} className="link">
                    <span className="title">{post.title}</span>
                    <img src={post.img} alt="" />
                    <p className="desc">{post.desc}</p>
                    <button className="card-button">Read More</button>
               </Link>
          </div>
     );
};

export default Card;
