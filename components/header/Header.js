import React from "react";
import styles from "./Header.module.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400"] });

function Header() {

	return (
    <header className={`${styles.header} ${roboto.className} `}>
      <h1 className={styles.header_title}>Space X Launch Tracker </h1>
    </header>
	);
}

export default Header;