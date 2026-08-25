import React from 'react';

const Logo = ({ className = "h-12", inverted = false }) => {
  const darkColor = inverted ? "#ffffff" : "#363C48";
  const redColor = "#E52327";

  return (
    <svg 
      viewBox="0 0 340 90" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Fuego Uganda Limited"
    >
      {/* Two Red Diagonal Stripes (Left Mark) */}
      <path 
        d="M 25 5 L 42 5 L 12 85 L -5 85 Z" 
        fill={redColor}
      />
      <path 
        d="M 50 5 L 67 5 L 37 85 L 20 85 Z" 
        fill={redColor}
      />

      {/* FUEGO Text - Bold, tight tracking */}
      <text 
        x="80" 
        y="55" 
        fontFamily="'Montserrat', sans-serif" 
        fontWeight="700" 
        fontSize="48" 
        fill={darkColor} 
        letterSpacing="2"
      >
        F
      </text>
      <text 
        x="112" 
        y="55" 
        fontFamily="'Montserrat', sans-serif" 
        fontWeight="700" 
        fontSize="48" 
        fill={darkColor} 
        letterSpacing="2"
      >
        UE
      </text>
      <text 
        x="182" 
        y="55" 
        fontFamily="'Montserrat', sans-serif" 
        fontWeight="700" 
        fontSize="48" 
        fill={darkColor} 
        letterSpacing="2"
      >
        GO
      </text>

      {/* Small Flame on top of 'G' */}
      <g transform="translate(186, 2) scale(0.9)">
        <path 
          d="M 12 22 C 12 22 8 12 14 4 C 14 4 18 10 17 16 C 20 12 24 14 22 20 C 22 20 19 17 16 18 C 16 24 8 24 12 22 Z" 
          fill={redColor}
        />
      </g>

      {/* Dark Horizontal Line under FUEGO */}
      <line 
        x1="80" 
        y1="62" 
        x2="268" 
        y2="62" 
        stroke={darkColor} 
        strokeWidth="2.5" 
      />

      {/* Uganda Limited Text */}
      <text 
        x="118" 
        y="80" 
        fontFamily="'Montserrat', sans-serif" 
        fontWeight="600" 
        fontSize="16" 
        fill={redColor}
        letterSpacing="1.5"
      >
        Uganda Limited
      </text>
    </svg>
  );
};

export default Logo;
