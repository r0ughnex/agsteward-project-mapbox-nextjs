"use client";

import { Routes } from "@/app/routes";
import LazyMapImage from "@/components/LazyMapImage/LazyMapImage";
import { useProjectsList } from "@/context/DataContext/hooks";
// import getAreaCoordsFromGeoJSON from "@/utils/getAreaCoordsFromGeoJSON";
import getNoOfAreasFromGeoJSON from "@/utils/getNoOfAreasFromGeoJSON";
import getUniqueKey from "@/utils/getUniqueKey";
import {
  MapPinIcon,
  GlobeAsiaAustraliaIcon as WorldIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

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
          managementAreasGeoJSON,
        } = project || {};

        /* const { latitude, longitude } = getAreaCoordsFromGeoJSON(
          managementAreasGeoJSON
        ); */

        const noOfAreas = getNoOfAreasFromGeoJSON(managementAreasGeoJSON);
        const coords = `${longitude.toFixed(2)}, ${latitude.toFixed(2)}`;
        const key = `${id || getUniqueKey()}_${index}`;
        const lazyMapImageProps = {
          managementAreasGeoJSON,
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
                <div className={styles.ProjectCardContentLeft}>
                  <h4 className={styles.ProjectCardContentTitle}>
                    {name || "Unknown Project"}
                  </h4>

                  <p className={styles.ProjectCardContentText}>
                    {address || "Address not available"}
                  </p>
                </div>

                <div className={styles.ProjectCardContentRight}>
                  <h5 className={styles.ProjectCardContentSubtitle}>Areas</h5>

                  <div className={styles.ProjectCardContentAreas}>
                    <p className={styles.ProjectCardContentAreasValue}>
                      <WorldIcon className={styles.ProjectCardIcon} />
                      <span>{noOfAreas}</span>
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

export default ProjectCards;
