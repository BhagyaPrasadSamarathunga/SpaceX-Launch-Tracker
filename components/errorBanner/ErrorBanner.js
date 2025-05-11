import React from "react";
import styles from "./ErrorBanner.module.css";

function ErrorBanner({message}) {

	return (
    <div className={styles.container}>
      <p className={styles.message}>{message}</p>
    </div>
	);
}

export default ErrorBanner;