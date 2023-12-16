"use client";

import { Routes } from "@/app/routes";
import GithubIcon from "@/icons/github.svg";
import { GlobeAsiaAustraliaIcon as WorldIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.NavbarInner}>
        <Link
          href={Routes.Home}
          title="Go to Projects"
          className={styles.NavbarLogoIcon}
        >
          <WorldIcon className={styles.NavbarLogoIconSvg} />
        </Link>

        <Link
          href={Routes.GithubRepo}
          title="View source on Github"
          className={styles.NavbarCodeIcon}
        >
          <Image
            priority
            width={98}
            height={96}
            src={GithubIcon}
            alt="Icon for source on Github"
            className={styles.NavbarCodeIconSvg}
          />
        </Link>
      </div>
    </nav>
  );
}

export default memo(Navbar);
