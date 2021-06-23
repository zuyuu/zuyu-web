import React from "react";
import Logo from "../../Logo";
import useDarkMode from "use-dark-mode";
import styles from "./Menu.module.css";

export default function Menu() {
  const darkMode = useDarkMode();

  return (
    <div>
      <header className={styles.menuWithBg}>
        <div className={styles.menuLogo}>
          <Logo width={30} fill="var(--textColor)" />
        </div>
        <div className={styles.menuItems}>
          <div>Zuyu</div>
          <div className={styles.menuItemNotSelected}>Ahyun</div>
        </div>
      </header>
    </div>
  );
}
