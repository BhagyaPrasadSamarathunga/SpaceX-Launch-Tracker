import React from "react";
import styles from "./Loader.module.css";

function Loader() {

	return (
    <div className={styles.spinner_container}>
      <div className={styles.spinner} />
    </div>
	);
}

export default Loader;


