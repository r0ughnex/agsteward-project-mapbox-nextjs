"use client";

import usePrevious from "@/hooks/usePrevious";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "./DataContext";
import { APIResponseData } from "./types";

export function useDataContext() {
  const context = useContext(DataContext);

  if (!context)
    throw new Error(
      "'DataContext' is not available in this scope, please make sure you're calling it inside '<DataContextProvider />'."
    );

  return context;
}

export function useProjectsList() {
  const { projects } = useDataContext();
  return projects;
}

export function useProjectWithId(id: string) {
  const [project, setProject] = useState<APIResponseData | null>(null);
  const projects = useProjectsList();
  const prevId = usePrevious(id);

  useEffect(() => {
    if (id === prevId) {
      return;
    }

    if (!id) {
      setProject(null);
    }

    const currIdAsNum = parseInt(id);
    const projectWithId = projects.find(
      (thisProject) => thisProject?.id === currIdAsNum
    );

    setProject(projectWithId || null);
  }, [projects, prevId, id]);
  return project;
}
