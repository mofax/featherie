import React from "react";

const defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export default function DivideSquare(
  incomingProps: React.SVGProps<SVGSVGElement>
) {
  const props = Object.assign(defaultProps, incomingProps);

  return (
    <svg {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="12" y1="16" x2="12" y2="16" />
      <line x1="12" y1="8" x2="12" y2="8" />
    </svg>
  );
}

DivideSquare.svgString = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
  <line x1="8" y1="12" x2="16" y2="12" />
  <line x1="12" y1="16" x2="12" y2="16" />
  <line x1="12" y1="8" x2="12" y2="8" />
</svg>
`;
