import React from "react";
import styles from './Button.module.css'


function Button({ title , onClick , isDisable = false, status }) {

    const handelClick = () => {
        onClick();
    }

	return (
		<button onClick={handelClick} disabled= {isDisable} className={`${styles.button} ${styles[status]}`}>
            <h4 className={styles.content}>{title}</h4>
		</button>
	);
}

export default Button;