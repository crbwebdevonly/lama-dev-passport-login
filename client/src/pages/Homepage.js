import React from "react";
import Card from "../components/Card";
import { posts } from "../data";

const Homepage = () => {
     return (
          <div className="homepage-container">
               {posts.map((e) => (
                    <Card key={e.id} post={e} />
               ))}
          </div>
     );
};

export default Homepage;
