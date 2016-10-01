import React from 'react';

const Logo = () => {
  return (
    <div>
        <svg width="64" height="64" style={{ marginRight: '14px' }}>
          <g>
            <rect x="11" y="11" width="42" height="42" transform="rotate(45, 32, 32)" style={{ fill: "#878586" }} />
            <ellipse cx="40" cy="32" rx="12" ry="18" style={{ fill: "white" }}/>
            <ellipse cx="48" cy="18" rx="10" ry="6" transform="rotate(-45, 48, 18)" style={{ fill: "#96050A" }} />
          </g>
        </svg>
        <svg height='64'>
          <text x="0" y="25" style={{ fontSize: "10px", fill: 'rgb(102, 102, 102)', letterSpacing: '3px', textTransform: 'uppercase' }}>
            Република Србија
          </text>
          <text x="0" y="43" style={{ fontSize: '18px', fill: 'rgb(102, 102, 102)' }}>
            Национална служба за запошљавање
          </text>
        </svg>
    </div>
  );
};

const component = () => (
    <div>
      <h3>Logo Nacionalne sluzbe za zaposljavanje u svg formatu:</h3>
      <a target="_blank" href="http://www.nsz.gov.rs/live/trazite-posao/svi-poslovi">
         <Logo />
      </a>
   </div>
);

export default component;