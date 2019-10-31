import React from 'react'
import arrow from '../images/blogs/arrow.svg'

function Blog({img, h4, p}) {
    return (
        <div className="blg">
            <img src={img} alt="" className="blog-img"/>
            <h4>{h4}</h4>
            <p>{p}</p>

            <img src={arrow} alt="" className="blog-arrow" />
        </div>
    )
}

export default Blog
