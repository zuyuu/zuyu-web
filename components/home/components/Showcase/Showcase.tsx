import React from "react";
import Image from "next/image";
import styles from "./Showcase.module.css";
import Link from "next/link";

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
  imgObjectPosition,
  desc,
  href,
}: ShowcaseProps) {
  return (
    <div className={styles.showcase}>
      <div className={styles.rightSide}>
        <div className={styles.text}>
          <h1>{title}</h1>
          <p>{desc}</p>
          <Link href={href}>
            <a>Learn more {"->"}</a>
          </Link>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          layout="fill"
          objectFit="cover"
          objectPosition={imgObjectPosition}
        />
      </div>
    </div>
  );
}
