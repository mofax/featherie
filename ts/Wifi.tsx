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

export default function Wifi(incomingProps: React.SVGProps<SVGSVGElement>) {
  const props = Object.assign(defaultProps, incomingProps);

  return (
    <svg {...props}>
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </svg>
  );
}

Wifi.svgString = `<svg
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
  <path d="M5 12.55a11 11 0 0 1 14.08 0" />
  <path d="M1.42 9a16 16 0 0 1 21.16 0" />
  <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
  <line x1="12" y1="20" x2="12.01" y2="20" />
</svg>
`;
