"use client";

import Image from "next/image";
import { useProjectsList } from "@/context/DataContext/hooks";
import getStaticMapImageURL from "@/utils/getStaticMapImageURL";
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

        const [width, height] = [400, 200];
        const aspectRatio = `${width} / ${height}`;
        const key = `${id || getUniqueKey()}_${index}`;
        const staticMapImageURL = getStaticMapImageURL({
          label: id,
          longitude,
          latitude,
          height,
          width,
        });

        return (
          <div className={styles.ProjectCard} key={key}>
            <div className={styles.ProjectCardInner}>
              <div className={styles.ProjectCardImage} style={{ aspectRatio }}>
                {staticMapImageURL && (
                  <Image
                    fill
                    unoptimized
                    loading="lazy"
                    src={staticMapImageURL}
                    alt="Map of project management area"
                    className={styles.ProjectCardImageElem}
                  />
                )}
              </div>

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
