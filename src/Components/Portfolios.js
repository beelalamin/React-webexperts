import React from 'react';
import p1 from '../images/portfolios/01.png'
import p2 from '../images/portfolios/02.png'
import p3 from '../images/portfolios/03.png'
import p4 from '../images/portfolios/04.png'
import p5 from '../images/portfolios/05.png'
import p6 from '../images/portfolios/06.png'
import OurSuccess from './OurSuccess';

export default function Portfolios() {
    return (
        <>
            <div className="portfolios">

                <div className="portfolio-text">
                    <h2>Our Portfolios</h2>
                    <p>Have a look at our Portfolios</p>
                </div>

                <div className="portfolios-images">
                    <img src={p1} alt=""/>
                    <img src={p2} alt=""/>
                    <img src={p3} alt=""/>
                    <img src={p4} alt=""/>
                    <img src={p5} alt=""/>
                    <img src={p6} alt=""/>
                    <img src={p4} alt=""/>
                    <img src={p1} alt=""/>
                    <img src={p3} alt=""/>


                </div>
                </div>   
                <OurSuccess />
        </>
    )
}
