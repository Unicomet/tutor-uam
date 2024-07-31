import React from "react";

interface SvgIconProps {
  width?: number;
  height?: number;
  stroke?: string;
}

const CancelMenu: React.FC<SvgIconProps> = ({
  width = 20,
  height = 20,
  stroke = "#000000",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill={stroke}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <title>cancel</title>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="work-case"
            fill={stroke}
            transform="translate(91.520000, 91.520000)"
          >
            <polygon
              id="Close"
              points="328.96 30.2933333 298.666667 0 164.48 134.4 30.2933333 0 0 30.2933333 134.4 164.48 0 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default CancelMenu;
