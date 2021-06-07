import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LogoProps {
  width: number;
  height: number;
  fill: string;
  id?: string
}

export default function LogoAnimated({ width, height, fill, id }: LogoProps) {
  const [fillVisible, setFillVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFillVisible(true);
    }, 2000);
  }, []);

  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 -5 1024 1034"
      strokeWidth={10}
      fill={fillVisible ? fill : "transparent"}
      style={{
        transition: "0.5s",
      }}
      id={id}
    >
      <motion.path
        d="M0,512l0,-256l256,-0l-256,256Z"
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 2 }}
        stroke={fillVisible ? "none" : "white"}
      />
      <motion.path
        d="M512,0l-0,256l-256,-0l256,-256Z"
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 2 }}
        stroke={fillVisible ? "none" : "white"}
      />
      <motion.path
        d="M768,512l-256,-512l512,0l-256,512Z"
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 2 }}
        stroke={fillVisible ? "none" : "white"}
      />
      <motion.path
        d="M768,1024l-256,-512l512,0l-256,512Z"
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 2 }}
        stroke={fillVisible ? "none" : "white"}
      />
      <motion.path
        d="M256,768l256,256l-512,-0l256,-256Z"
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 2 }}
        stroke={fillVisible ? "none" : "white"}
      />
      <motion.path
        d="M256,768l-256,-256l512,0l-256,256Z"
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 2 }}
        stroke={fillVisible ? "none" : "white"}
      />
    </motion.svg>
  );
}
