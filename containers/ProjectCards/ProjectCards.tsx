"use client";

import { Routes } from "@/app/routes";
import LazyMapImage from "@/components/LazyMapImage/LazyMapImage";
import { useProjectsList } from "@/context/DataContext/hooks";
import { getUniqueKey, roundNumber } from "@/utils/common";
import { getTotalSizeOfAreas } from "@/utils/managementAreas";
import {
  Square2StackIcon as AreaIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { memo } from "react";

import styles from "./ProjectCards.module.scss";

function ProjectCards() {
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
          managementAreas,
        } = project || {};

        const coords = `${roundNumber(longitude)}, ${roundNumber(latitude)}`;
        const totalSize = getTotalSizeOfAreas(managementAreas);
        const noOfAreas = managementAreas?.length || 0;
        const key = `${id || getUniqueKey()}_${index}`;
        const lazyMapImageProps = {
          height: 200,
          width: 400,
          longitude,
          latitude,
          id,
        };

        return (
          <Link
            key={key}
            title={`Go to ${name}`}
            className={styles.ProjectCard}
            href={Routes.Overview.replace("{id}", `${id}`)}
          >
            <div className={styles.ProjectCardInner}>
              <div className={styles.ProjectCardCoords}>
                <p className={styles.ProjectCardCoordsValue}>
                  <MapPinIcon className={styles.ProjectCardIcon} />
                  <span>{coords}</span>
                </p>
              </div>

              <LazyMapImage {...lazyMapImageProps} />
              <div className={styles.ProjectCardContent}>
                <div className={styles.ProjectCardContentTop}>
                  <h4 className={styles.ProjectCardContentTitle}>
                    {name || "Unknown Project"}
                  </h4>

                  <h5 className={styles.ProjectCardContentSubtitle}>
                    {noOfAreas} Area{noOfAreas !== 1 ? "s" : ""}
                  </h5>
                </div>
                <div className={styles.ProjectCardContentBottom}>
                  <p className={styles.ProjectCardContentText}>
                    {address || "Address not available"}
                  </p>

                  <div className={styles.ProjectCardAreasSize}>
                    <p className={styles.ProjectCardAreasSizeValue}>
                      <AreaIcon className={styles.ProjectCardIcon} />
                      <span>{roundNumber(totalSize)} ha</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default memo(ProjectCards);
