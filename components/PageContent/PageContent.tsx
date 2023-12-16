"use client";

import classNames from "classnames";
import { AnimationProps, motion } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

import { isModeProd } from "@/utils/env";
import styles from "./PageContent.module.scss";

interface PageContentProps {
  children: ReactNode;
  className?: string;
  elementTag?: "div" | "section";
}

interface PageContentInfoProps {
  children: ReactNode;
  className?: string;
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

function PageContentInfo({ children, className }: PageContentInfoProps) {
  const infoElemRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!isModeProd()) {
      // Only perform checks when not in 'production' mode.
      const parentElem = infoElemRef.current?.parentElement;
      if (!parentElem?.closest("[class^='PageContent_']")) {
        throw new Error(
          "'<PageContentInfo />' must be rendered within a parent '<PageContent />'."
        );
      }
    }
  }, []);

  return (
    <h4
      ref={infoElemRef}
      className={classNames(styles.PageContentInfo, className)}
    >
      {children}
    </h4>
  );
}

export default PageContent;
export { PageContentInfo };
