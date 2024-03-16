import React from "react";

const OrderIcon = ({ width = 24, height = 24, color }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_754_1655)">
        <path d="M6.33129 8H17.6703C17.9587 7.99997 18.2436 8.06229 18.5057 8.1827C18.7677 8.30311 19.0006 8.47876 19.1883 8.6976C19.3761 8.91645 19.5144 9.17331 19.5936 9.45059C19.6728 9.72786 19.6911 10.019 19.6473 10.304L18.3923 18.456C18.2833 19.1644 17.9243 19.8105 17.3803 20.2771C16.8362 20.7438 16.1431 21.0002 15.4263 21H8.57429C7.85769 21 7.16477 20.7434 6.62092 20.2768C6.07707 19.8102 5.71822 19.1643 5.60929 18.456L4.35429 10.304C4.31046 10.019 4.32878 9.72786 4.408 9.45059C4.48722 9.17331 4.62545 8.91645 4.81324 8.6976C5.00102 8.47876 5.23391 8.30311 5.49594 8.1827C5.75796 8.06229 6.04293 7.99997 6.33129 8Z" stroke={color} strokeOpacity="0.9" strokeLinecap="round" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 11V6C9 5.20435 9.31607 4.44129 9.87868 3.87868C10.4413 3.31607 11.2044 3 12 3C12.7956 3 13.5587 3.31607 14.1213 3.87868C14.6839 4.44129 15 5.20435 15 6V11" stroke={color} strokeOpacity="0.9" strokeLinecap="round" strokeWidth="1.5" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_754_1655">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
};

export default OrderIcon;
