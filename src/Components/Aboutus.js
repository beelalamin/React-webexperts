import React from "react";
import icon1 from "../images/design.svg";
import icon2 from "../images/sketchbook.svg";
import icon3 from "../images/test.svg";
import img1 from "../images/About/1.png";
import img2 from "../images/About/2.png";
import img3 from "../images/About/3.png";
// import img4 from "../images/About/4.png";
// import img5 from "../images/About/5.png";
import img6 from "../images/About/6.png";
import img7 from "../images/About/7.png";
import img8 from "../images/About/8.png";
import img9 from "../images/About/9.png";
import img10 from "../images/About/10.png";
// import img11 from "../images/About/11.png";

export default function Aboutus() {
  const Person = ({ src, name }) => {
    return (
      <div className="about-Person">
        <img src={src} alt="" />
        {/* <p>
              Loved the design specially the color combination. Look forward to work
              more in future.
            </p> 
                        */}
        <p>{name}</p>
      </div>
    );
  };

  return (
    <>
      <div className="About-section">
        <div className="about-header">
          <h3>What they say about us!</h3>
          <p>Customer Review Sites for Collecting Business & Product Reviews</p>
        </div>
        <div className="Person">
          <Person name="Cris" src={img1} />
          <Person name="Jack " src={img2} />
          <Person name="Jonas" src={img3} />
          <Person name="Edwen" src={img6} />
          <Person name="Emily" src={img7} />
          <Person name="Adele" src={img8} />
          <Person name="Mary" src={img9} />
          <Person name="Kevin" src={img10} />
        </div>
        <div className="about-footer">
          <div>
            <p>Learn About Our Workflow:</p>
            <h3>We're always hungry for creativity.</h3>
          </div>
          {/* <button className="wave-me">Wave Me</button> */}
        </div>
      </div>

      <div className="about-us">
        <div className="abt-one as">
          <img src={icon1} alt="" />
          <h1>Design</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="abt-two as">
          <img src={icon2} alt="" />

          <h1>sketch</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="abt-three as">
          <img src={icon3} alt="" />

          <h1>Testing</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </>
  );
}
