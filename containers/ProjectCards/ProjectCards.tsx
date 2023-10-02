"use client";

import LazyMapImage from "@/components/LazyMapImage/LazyMapImage";
import { useProjectsList } from "@/context/DataContext/hooks";
import getUniqueKey from "@/utils/getUniqueKey";
import styles from "./ProjectCards.module.scss";

export default function ProjectCards() {
  const projectsList = useProjectsList();

  return (
    <div className={styles.ProjectCards}>
      {projectsList.map((project, index) => {
        const {
          id,
          name,
          address,
          latitude = 0,
          longitude = 0,
        } = project || {};

        const key = `${id || getUniqueKey()}_${index}`;
        const lazyMapImageProps = {
          height: 200,
          width: 400,
          longitude,
          latitude,
          id,
        };

        return (
          <div className={styles.ProjectCard} key={key}>
            <div className={styles.ProjectCardInner}>
              <div className={styles.ProjectCardCoords}>
                <p className={styles.ProjectCardCoordsValue}>
                  {latitude.toFixed(2)}, {longitude.toFixed(2)}
                </p>
              </div>

              <LazyMapImage {...lazyMapImageProps} />

              <h4 className={styles.ProjectCardTitle}>
                {name || "Unknown Project"}
              </h4>

              <p className={styles.ProjectCardText}>
                {address || "Address not available"}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
