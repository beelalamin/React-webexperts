import React from "react";
 
function Servs({title,disc,icon,classname}) {
 
  return (
    <div>
      <div className={classname}>
          <img src={icon} alt={title} className="servs-icon"/>
        <h4>{title}</h4>
        <p>
            {disc}
        </p>
        <button className="services-btn">Read More</button>
      </div>
    </div>
  );
}

export default Servs;
