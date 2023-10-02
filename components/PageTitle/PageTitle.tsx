"use client";

import { ReactNode } from "react";
import { motion, AnimationProps } from "framer-motion";

import styles from "./PageTitle.module.scss";

interface PageTitleProps {
  children: ReactNode;
}

function PageTitle({ children }: PageTitleProps) {
  const pageTitleAnimProps: AnimationProps = {
    transition: { type: "tween", delay: 0.2 },
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  };

  const pageTitleProps = {
    ...pageTitleAnimProps,
    className: styles.PageTitle,
  };

  return <motion.h1 {...pageTitleProps}>{children}</motion.h1>;
}

export default PageTitle;
