"use client";

import Link from "next/link";
import { memo } from "react";
import { motion, AnimationProps } from "framer-motion";
import { GlobeAsiaAustraliaIcon as WorldIcon } from "@heroicons/react/24/outline";

import styles from "./Navbar.module.scss";

function Navbar() {
  const navBarAnimProps: AnimationProps = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
    transition: { type: "tween" },
  };

  const navBarProps = {
    ...navBarAnimProps,
    className: styles.Navbar,
  };

  return (
    <motion.nav {...navBarProps}>
      <div className={styles.NavbarInner}>
        <Link className={styles.NavbarLogo} title="Go to Projects" href="/">
          <WorldIcon className={styles.NavbarLogoSvg} />
        </Link>
      </div>
    </motion.nav>
  );
}

export default memo(Navbar);
