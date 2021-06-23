import React from "react";
import Image from "next/image";
import styles from "./Showcase.module.css";

interface ShowcaseProps {
  title: string;
  imgSrc: string;
  imgAlt: string;
  imgObjectPosition: string;
  desc: string;
  href: string;
}

export default function Showcase({
  title,
  imgSrc,
  imgAlt,
  desc,
  href,
}: ShowcaseProps) {
  return (
    <div className={styles.showcase}>
      <div className={styles.image}>
        <Image
          src="/dahyun.webp"
          layout="fill"
          objectFit="cover"
          objectPosition="30% 50%"
        />
      </div>
    </div>
  );
}
