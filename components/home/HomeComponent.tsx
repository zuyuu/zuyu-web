import React from "react";
import Piece from "./components/Piece/Piece";
import Showcase from "./components/Showcase/Showcase";

export default function HomeComponent() {
  return (
    <div>
      <Piece height="40vh">
        <div className="globalContainer">
          <h1>We do things with AI.</h1>
          <p>
            We are a group of students that just want to have fun with
            artificial intelligence.
          </p>
          <p>Check out some of our projects below!</p>
        </div>
      </Piece>
      <Showcase
        title="Zuyu"
        imgSrc="/dahyun.webp"
        imgAlt="alt placeholder"
        imgObjectPosition="30% 50%"
        desc="An AI that can recongize faces in Asian music videos. Learn the members of your new favorite Kpop groups faster."
        href="/zuyu"
      />
    </div>
  );
}
