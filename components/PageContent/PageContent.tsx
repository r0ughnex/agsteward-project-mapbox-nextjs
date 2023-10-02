"use client";

import { ReactNode } from "react";
import { motion, AnimationProps } from "framer-motion";

import styles from "./PageContent.module.scss";

interface PageContentProps {
  children: ReactNode;
}

function PageContent({ children }: PageContentProps) {
  const pageTitleAnimProps: AnimationProps = {
    transition: { type: "tween", delay: 0.4 },
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  };

  const pageTitleProps = {
    ...pageTitleAnimProps,
    className: styles.PageContent,
  };

  return <motion.p {...pageTitleProps}>{children}</motion.p>;
}

export default PageContent;
