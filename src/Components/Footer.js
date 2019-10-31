import React from "react";
import Circle from "./Circle";
import Facebook from "../images/Social/1.svg";
import Twitter from "../images/Social/2.svg";
import Youtube from "../images/Social/3.svg";
import Google from "../images/Social/4.svg";

function Footer() {
  return (
    <>
    <div className="footer">
      <div className="footerblock">
        <span className="logo">
          <strong>Web</strong>Experts
        </span>
        <p>
          The full-stack design team who focuses <br />
          on digital products whatever they are.
        </p>
        <div className="social-icons">
          <img src={Facebook} alt=""/>
          <img src={Twitter} alt=""/>
          <img src={Google} alt=""/>
          <img src={Youtube} alt=""/>

        </div>
      </div>

      <div className="footerblock">
        <h3>About Us</h3>
        <a href="#">We're Hiring</a>
        <a href="#">our customer</a>
        <a href="#">Blog post</a>
        <a href="#">Help & Support</a>
      </div>

      <div className="footerblock">
        <h3>Community</h3>
        <a href="#">About us</a>
        <a href="#">our Client</a>
        <a href="#">Legal notice</a>
        <a href="#">Help & Support</a>
      </div>

      <div className="footerblock">
        <h3>Contact</h3>
        <p>+123 456 789</p>
        <p>Contact us</p>
      </div>
    </div>
    <p className="developer">Developed by Bee kay</p>
    </>
  );
}

export default Footer;
