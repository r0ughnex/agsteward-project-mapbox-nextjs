"use client";

import { ReactNode } from "react";
import classNames from "classnames";
import { motion, AnimationProps } from "framer-motion";

import styles from "./PageContent.module.scss";

interface PageContentProps {
  children: ReactNode;
  className?: string;
  elementTag?: "div" | "section";
}

function MotionRoot({ elementTag }: Pick<PageContentProps, "elementTag">) {
  switch (elementTag) {
    case "section": {
      return motion.section;
    }

    case "div":
    default: {
      return motion.div;
    }
  }
}

function PageContent({ children, className, elementTag }: PageContentProps) {
  const pageContentAnimProps: AnimationProps = {
    transition: { type: "tween", delay: 0.4 },
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  };

  const pageContentProps = {
    ...pageContentAnimProps,
    className: classNames(styles.PageContent, className),
  };

  const PageContentMotionRoot = MotionRoot({ elementTag });

  return (
    <PageContentMotionRoot {...pageContentProps}>
      {children}
    </PageContentMotionRoot>
  );
}

export default PageContent;
