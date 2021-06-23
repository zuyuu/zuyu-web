import React, { ReactNode } from "react";
import styles from "./Piece.module.css";

interface PieceProps {
  height: string;
  children: ReactNode;
}

export default function Piece({ height, children }: PieceProps) {
  return (
    <div className={styles.piece} style={{ height: height }}>
      {children}
    </div>
  );
}
