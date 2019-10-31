import React from 'react'
import Servs from './Servs'
import img1 from '../images/icon-1.svg'
import img2 from '../images/icon-2.svg'
import img3 from '../images/icon-3.svg'
import img4 from '../images/icon-4.svg'
import img5 from '../images/icon-5.svg'
import img6 from '../images/icon-6.svg'

export default function Services() {
    return (
        <>      
            
                    <div className="serv-heading">
                <h2>SERVICES</h2>
                <h1>We Provide Best Quality Service </h1>
                <p>Our commitment to quality ensures that your applications get the best UI design possible. UI/UX design is more than just pixels and animations, but the entire application <br />experience.</p>
                </div>
                <div className="services">
            {/* <div className="serv-boxes">
                <div className="web-Ui">
                        <p>Website UI</p>
                        <p>Fast, Powerful & Most Secure Network Solutions for Smart Home & Businesses</p>
                        <button className="services-btn">Read More</button>
                </div>
                <div className="web-Ui">
                        <p>Website UI</p>
                        <p>Fast, Powerful & Most Secure Network Solutions for Smart Home & Businesses</p>
                        <button className="services-btn">Read More</button>
                </div>
                <div className="web-Ui">
                        <p>Website UI</p>
                        <p>Fast, Powerful & Most Secure Network Solutions for Smart Home & Businesses</p>
                        <button className="services-btn">Read More</button>
                </div>
                </div>
                <div className="serv-boxes">
                <div className="web-Ui">
                        <p>Website UI</p>
                        <p>Fast, Powerful & Most Secure Network Solutions for Smart Home & Businesses</p>
                        <button className="services-btn">Read More</button>
                </div>
                <div className="web-Ui">
                        <p>Website UI</p>
                        <p>Fast, Powerful & Most Secure Network Solutions for Smart Home & Businesses</p>
                        <button className="services-btn">Read More</button>
                </div>
                <div className="web-Ui">
                        <p>Website UI</p>
                        <p>Fast, Powerful & Most Secure Network Solutions for Smart Home & Businesses</p>
                        <button className="services-btn">Read More</button>
                </div>
                 </div>
    */}         
                <div className="serv-boxes">
               <Servs title="Web UI" disc="Fast, Powerful & Most Secure Network Solutions for Smart Home & Businesses" 
                icon={img1} 
               classname="web-ui servs"/>

<Servs title="ReDesign" disc="Fast, Powerful & Most Secure Network Solutions for Smart Home & Businesses" 
                icon={img2} 
                classname="ReDesign servs" />

<Servs title="Application Ui" disc="Fast, Powerful & Most Secure Network Solutions for Smart Home & Businesses" 
                icon={img3} 
                classname="Application-Ui servs" />

               </div>

               <div className="serv-boxes">
               <Servs title="Web App Ui" disc="Fast, Powerful & Most Secure Network Solutions for Smart Home & Businesses" 
                icon={img4} 
                classname="Web-App-Ui servs" />

<Servs title="Mobile-Ui" disc="Fast, Powerful & Most Secure Network Solutions for Smart Home & Businesses" 
                icon={img5}
                classname="Mobile-Ui servs" />

<Servs title="Web Elements" disc="Fast, Powerful & Most Secure Network Solutions for Smart Home & Businesses" 
                icon={img6} 
                classname="Web-Elements servs" />
               </div>
               </div>
          
        </>
    )
}
