import React, { ReactNode, useState } from "react";
import styles from "../../styles/cover/PhotoCover.module.css";
import Image from "next/image";

interface PhotoCoverProps {
  src: string;
  alt: string;
  imageOpacity?: number;
  children?: ReactNode;
}

export default function PhotoCover({
  src,
  alt,
  imageOpacity,
  children,
}: PhotoCoverProps) {
  const [photoLoaded, setPhotoLoaded] = useState(false);

  return (
    <div className={styles.photoCoverContainer}>
      <div className={styles.photoCover}>
           <div className={styles.centeredStuff}>{children}</div>
        <div
          style={{
            transition: "0.5s",
            opacity: photoLoaded ? imageOpacity ?? 1 : 0,
          }}
        >
          <Image
            src={src}
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
