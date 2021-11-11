import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { posts } from "../data";

const Postpage = () => {
     const [post, setPost] = useState(null);
     //======================================================
     const params = useParams();
     //======================================================
     console.log(posts);
     //======================================================
     //======================================================
     useEffect(() => {
          // effect
          setPost(posts.filter((e) => e.id === parseInt(params.id))[0]);
          // setPost(posts[parseInt(params.id) - 1]);

          return () => {
               // cleanup
          };
     }, []);
     //======================================================
     //======================================================
     return (
          <div className="postpage-container">
               {post && (
                    <>
                         {" "}
                         <div className="post-image-wrap">
                              <img src={post.img} alt="" />
                         </div>
                         <h1 className="title">{post.title}</h1>
                         <p className="desc">{post.desc}</p>
                         <p className="long-desc">{post.longDesc}</p>{" "}
                    </>
               )}
          </div>
     );
};

export default Postpage;
