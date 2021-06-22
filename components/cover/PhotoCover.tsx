import React, { useState } from "react";
import styles from "../../styles/cover/PhotoCover.module.css";
import LogoAnimated from "../LogoAnimated";
import Image from "next/image";

export default function PhotoCover() {
  const [photoLoaded, setPhotoLoaded] = useState(false);

  return (
    <div className={styles.photoCoverContainer}>
      <div className={styles.photoCover}>
        <div className={styles.centeredStuff}>
          <LogoAnimated height={150} width={150} fill="var(--white)" />
        </div>
        <div style={{ transition: "0.5s", opacity: photoLoaded ? 0.8 : 0 }}>
          <Image
            src="/izone.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 70%"
            onLoad={() => setPhotoLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
}
