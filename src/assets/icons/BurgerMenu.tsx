import React from "react";

interface SvgIconProps {
  width?: number;
  height?: number;
  stroke?: string;
}
export const BurgerMenu: React.FC<SvgIconProps> = ({
  width = 20,
  height = 20,
  stroke = "#000000",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <g stroke={stroke} strokeLinecap="round" strokeWidth={2}>
      <path d="M4 18h16M4 12h16M4 6h16" />
    </g>
  </svg>
);
