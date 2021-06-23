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
      <Showcase />
    </div>
  );
}
