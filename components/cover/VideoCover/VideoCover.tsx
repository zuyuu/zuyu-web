import React, { useState } from "react";
import styles from "VideoCover.module.css";
import LogoAnimated from "../../LogoAnimated";
import YouTube from "react-youtube";

export default function VideoCover() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <div className={styles.videoCoverContainer}>
      <div className={styles.videoCover}>
        <div className={styles.centeredStuff}>
          <LogoAnimated height={150} width={150} fill="var(--white)" />
        </div>
        <div className={styles.ytBackgroundContainer}>
          <div
            className={styles.ytBackground}
            style={{ transition: "0.5s", opacity: videoPlaying ? 1 : 0 }}
          >
            <YouTube
              videoId="lAyz3tI5mYY"
              opts={{
                playerVars: {
                  start: 94,
                  autoplay: 1,
                  controls: 0,
                  mute: 1,
                },
              }}
              onPlay={() => setVideoPlaying(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
