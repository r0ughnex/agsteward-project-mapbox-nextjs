import { isValidNumber, isValidString } from "./common";

export enum Route {
  GithubRepo = "https://github.com/r0ughnex/agsteward-project-mapbox-nextjs",
  Overview = "/overview/{id}",
  NotFound = "/not-found",
  Home = "/",
}

export function getOverviewRouteForProject(projectId?: string | number) {
  if (isValidString(projectId) || isValidNumber(projectId)) {
    return Route.Overview.replace("{id}", `${projectId}`);
  }

  return Route.NotFound;
}
