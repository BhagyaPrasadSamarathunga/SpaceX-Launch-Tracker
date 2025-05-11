import React from "react";
import styles from "./LaunchCard.module.css";
import Card from "@/components/card/Card.js";
import Image from "next/image";
import StatusBadge from "@/components/statusBadge/StatusBadge";
import { formatUtcDate } from "@/src/utils/utils"

function LaunchCard({ launch }) {
  const status = launch.success ? "success" : "failure";
  
	return (
		<Card key={launch.id} style={styles.container}>
      <div className={styles.header_container}>
      <Image
        className={styles.img}
        src={launch.links.patch.small}
        alt='Rocket Patch'
        width={60}
        height={60}
      />
      <div className={styles.title_container}>
        <div className={styles.title}>
          <p className={styles.name}>{launch.name} </p>
          <p className={styles.date}>{formatUtcDate(launch.date_utc)} </p>
        </div>
        <div className={styles.status_badge}>
          <StatusBadge status={status} />
        </div>
      </div>
      </div>
      
      <div className={styles.card__content}>
        <p>{launch.details} </p>
          {!launch.success && launch.failures[0].reason && (<p>Failure Reason : {launch.failures[0].reason}</p>)}
      </div>
		</Card>
	);
}

export default LaunchCard;