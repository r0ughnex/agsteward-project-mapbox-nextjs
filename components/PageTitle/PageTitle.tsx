"use client";

import classNames from "classnames";
import { AnimationProps, motion } from "framer-motion";
import { ReactNode } from "react";

import styles from "./PageTitle.module.scss";

interface PageTitleProps {
  children: ReactNode;
  className?: string;
  elementTag?: "h1" | "h2";
}

function MotionRoot({ elementTag }: Pick<PageTitleProps, "elementTag">) {
  switch (elementTag) {
    case "h2": {
      return motion.h2;
    }

    case "h1":
    default: {
      return motion.h1;
    }
  }
}

function PageTitle({ children, className, elementTag }: PageTitleProps) {
  const pageTitleAnimProps: AnimationProps = {
    transition: { type: "tween", delay: 0.2 },
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  };

  const pageTitleProps = {
    ...pageTitleAnimProps,
    className: classNames(styles.PageTitle, className),
  };

  const PageTitleMotionRoot = MotionRoot({ elementTag });

  return (
    <PageTitleMotionRoot {...pageTitleProps}>{children}</PageTitleMotionRoot>
  );
}

export default PageTitle;
