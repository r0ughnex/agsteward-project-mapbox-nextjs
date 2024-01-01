import { Route, getOverviewRouteForProject } from "../routes";

describe("utils/routes", () => {
  describe("getOverviewRouteForProject()", () => {
    test("should return the route for the project's overview page, when a valid 'projectId' is given", () => {
      const validProjectIds = [1, "2", "test-project"];

      validProjectIds.forEach((projectId) => {
        expect(getOverviewRouteForProject(projectId)).toBe(
          Route.Overview.replace("{id}", `${projectId}`)
        );
      });
    });

    test("should return the route for the generic 'not-found' page, when given 'projectId' is invalid", () => {
      const invalidProjectIds = [undefined, 0, -1, NaN];

      invalidProjectIds.forEach((projectId) => {
        expect(getOverviewRouteForProject(projectId)).toBe(Route.NotFound);
      });
    });
  });
});
