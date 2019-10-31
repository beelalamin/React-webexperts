import React from "react";
import Blog from "./Blog";
import img1 from "../images/blogs/1.svg";
import img2 from "../images/blogs/2.svg";
import img3 from "../images/blogs/3.svg";

function Blogs() {
  return (
    <>
      <div className="blogs-header">
        <h2>Our Blogs</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          dapibus vehicula elit vel egestas.
        </p>
      </div>
      <div className="blogs">
        <Blog
          img={img3}
          h4="Cutting-edge products launched through Logitech-Excel"
          p="The Managing Director & Cluster Head India & South-West Asia at Logitech Sumanta Datta."
        />
        <Blog
          img={img2}
          h4="Cutting-edge products launched through Logitech-Excel"
          p="The Managing Director & Cluster Head India & South-West Asia at Logitech Sumanta Datta."
        />
        <Blog
          img={img1}
          h4="Cutting-edge products launched through Logitech-Excel"
          p="The Managing Director & Cluster Head India & South-West Asia at Logitech Sumanta Datta."
        />
      </div>
    </>
  );
}

export default Blogs;
