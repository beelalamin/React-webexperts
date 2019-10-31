  // import React, { useState } from "react";
  // import { FaAlignRight } from "react-icons/fa";
  // import "../App.css";

  // function Nav() {
  //   const [isOpen, setState] = useState(false);

  //      const toggle = () => {
  //     setState({ isOpen: isOpen ? !isOpen : !isOpen });
  //   }
  //   return (
  //     <>
  //       <div className="nav-bg"> </div>
  //       <div class="nav-top">
  //         <header className="nav-header">
  //           <span className="logo">
  //             <strong>Web</strong>Experts
  //           </span>
  //           <button type="button" className="nav-btn"  onClick={toggle}>
  //             <FaAlignRight className="nav-icon" />
  //           </button>
         
  //         </header>

  //         <ul className={isOpen ? "show-nav " : "nav"}>
  //           <li className="nav-links">
  //             <a href="#">HOME</a>
  //           </li>
  //           <li className="nav-links">
  //             <a href="#">PORTFOLIOS</a>
  //           </li>
  //           <li className="nav-links">
  //             <a href="#">ABOUT</a>
  //           </li>
  //           <li className="nav-links">
  //             <a href="#">BLOG</a>
  //           </li>
  //           <li className="nav-links">
  //             <a href="#">CONTACT</a>
  //           </li>
  //         </ul>
  //         <button className="login-btn"><a href="">Log in</a></button>
  //       </div>
  //     </>
  //   );
  // }

  // export default Nav;



import React, { Component } from 'react'
import { FaAlignRight } from "react-icons/fa";
import {Link} from 'react-router-dom';

export class Nav extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        isOpen:false,
        isSticky:false
    }
  }

   toggle = () =>{
     this.setState({
       isOpen:!this.state.isOpen
     })
   }
 
 
   sticky = () => {
    if(window.scrollY > 0){
      this.setState({
        isSticky:true
      })
    }else{
      this.setState({
        isSticky:false
      })
    }

  }
  
  render() {
    window.addEventListener('scroll',  this.sticky)


    return (
      <>
      <div className="nav-bg"> </div>
      <div className={this.state.isSticky ? "nav-top nav-sticky" : "nav-top"} >
        <header className="nav-header">
          <span className="logo">
            <strong>Web</strong>Experts
          </span>
          <button type="button" className="nav-btn" onClick={this.toggle} >
            <FaAlignRight className="nav-icon" />
          </button>
         
        </header>

        <ul className={this.state.isOpen ? "show-nav" : "nav"}>
          <li className="nav-links">
          <Link to='/' >HOME</Link>
          </li>
          <li className="nav-links">
          <Link to='/services/' >SERVICES</Link>
          </li>
          <li className="nav-links">
            <Link to='/portfolios' >PORTFOLIOS</Link>
          </li>
          <li className="nav-links">
          <Link to='/about/' >ABOUT</Link>
          </li>
          <li className="nav-links">
          <Link to='/Blogs' >BLOGS</Link>
          </li>
          <li className="nav-links">
          <Link to='/' >CONTACT</Link>
          </li>
        </ul>
        <button className="login-btn"><a href="">Log in</a></button>
      </div>
    </>
    )
  }
}

export default Nav
