import React from "react";
import Logo from "../Logo";
import useDarkMode from "use-dark-mode";
import styles from "../../styles/menu/Menu.module.css";

export default function Menu() {
  const darkMode = useDarkMode();

  return (
    <div>
      <nav className={styles.menu}>
        <div className={styles.menuLogo}>
          <Logo width={40} height={40} fill="var(--white)" />
        </div>
        <div className={styles.menuItems}>
          <div>Zuyu</div>
          <div className={styles.menuItemNotSelected}>Ahyun</div>
        </div>
      </nav>
    </div>
  );
}