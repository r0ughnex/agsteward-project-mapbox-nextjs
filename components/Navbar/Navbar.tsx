import { memo } from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { GlobeAsiaAustraliaIcon as WorldIcon } from "@heroicons/react/24/outline";

function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.NavbarInner}>
        <Link className={styles.NavbarLogo} title="Go to Projects" href="/">
          <WorldIcon className={styles.NavbarLogoSvg} />
        </Link>
      </div>
    </nav>
  );
}

export default memo(Navbar);
