import React from "react";
import styles from "./Card.module.css";

function Card({ children , style}) {

	return (
		<div data-testid="card" className={`${styles.container} ${style}`} >
				{children}
		</div>
	);
}

export default Card;