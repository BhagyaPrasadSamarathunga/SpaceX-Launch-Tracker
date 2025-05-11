import React from "react";
import styles from "./StatusBadge.module.css";

import { STATUS_PROPS } from "@/src/utils/constants";

function StatusBadge({ status }) {

  const style = { backgroundColor: STATUS_PROPS[status].bgColor}

	return (
      <div className={`${styles.container}`} style={style}>
        {STATUS_PROPS[status].title}
      </div>
	);
}

export default StatusBadge;