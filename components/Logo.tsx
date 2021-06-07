import React from "react";

interface LogoProps {
  width: number;
  height: number;
  fill: string;
}

export default function Logo({ width, height, fill }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
    >
      <path d="M512,0l-512,0l0,512l512,-512Z" style={{ fill }} />
      <path d="M768,512l-256,-512l512,0l-256,512Z" style={{ fill }} />
      <path d="M768,1024l-256,-512l512,0l-256,512Z" style={{ fill }} />
      <path d="M256,768l256,256l-512,-0l256,-256Z" style={{ fill }} />
      <path d="M256,768l-256,-256l512,0l-256,256Z" style={{ fill }} />
    </svg>
  );
}
