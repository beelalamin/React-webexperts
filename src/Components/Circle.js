import React from "react";

function Circle({ fill, num, p, h4 }) {
  return (
    <div class="workflow-circles">
      <svg height="80" width="80">
        <g>
          <circle cx="40" cy="40" r="30" fill={fill} />

          <text x="27" y="50" fill="white" font-size="26">
            {num}
          </text>
        </g>
      </svg>

      <div>
        <h4>{h4}</h4>
        <p className="workflow-p">{p}</p>
      </div>
    </div>
  );
}

export default Circle;
