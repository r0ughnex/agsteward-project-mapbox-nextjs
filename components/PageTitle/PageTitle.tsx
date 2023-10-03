"use client";

import { ReactNode } from "react";
import classNames from "classnames";
import { motion, AnimationProps } from "framer-motion";

import styles from "./PageTitle.module.scss";

interface PageTitleProps {
  children: ReactNode;
  className?: string;
  elementTag?: "h1" | "h2";
}

function MotionRoot({ elementTag }: Pick<PageTitleProps, "elementTag">) {
  return elementTag === "h1" ? motion.h1 : motion.h2;
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
