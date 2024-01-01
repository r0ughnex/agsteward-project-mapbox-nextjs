import { mockProjectsData } from "@/app/mocks";
import { encodeAreasGeoJSON, getTotalSizeOfAreas } from "../managementAreas";

describe("utils/managementAreas", () => {
  describe("getTotalSizeOfAreas()", () => {
    test("should return '0' when there are no valid management 'areas'", () => {
      const listOfEmptyAreas = [undefined, []];
      listOfEmptyAreas.forEach((emptyAreas) => {
        expect(getTotalSizeOfAreas(emptyAreas)).toBe(0);
      });
    });

    test("should otherwise add the 'Area_ha' or 'area_ha' property of each area to calculate the total size (hectares)", () => {
      const areasWith_Area_ha = mockProjectsData[0].managementAreas;
      const areasWith_area_ha = mockProjectsData[1].managementAreas;
      const areasWithNeither = areasWith_area_ha?.map((thisArea) => {
        return { ...thisArea, properties: undefined };
      });

      expect(getTotalSizeOfAreas(areasWith_Area_ha)).toBe(8.760664511477948);
      expect(getTotalSizeOfAreas(areasWith_area_ha)).toBe(70.30000000000001);
      expect(getTotalSizeOfAreas(areasWithNeither)).toBe(0);
    });
  });

  describe("encodeAreasGeoJSON()", () => {
    test("should return an encoded string with empty 'features' when the provided management area 'geoJSON' is invalid", () => {
      const listOfInvalidGeoJSON = [undefined, "[]{}"];
      listOfInvalidGeoJSON.forEach((invalidGeoJSON) => {
        expect(encodeAreasGeoJSON(invalidGeoJSON)).toBe(
          "%7B%22type%22%3A%22FeatureCollection%22%2C%22features%22%3A%5B%5D%7D"
        );
      });
    });

    test("should return an encoded string with parsed 'features' when the provided management area 'geoJSON' is valid", () => {
      const { managementAreasGeoJSON } = mockProjectsData[3];
      expect(encodeAreasGeoJSON(managementAreasGeoJSON)).toBe(
        "%7B%22type%22%3A%22FeatureCollection%22%2C%22features%22%3A%5B%7B%22type%22%3A%22Feature%22%2C%22properties%22%3A%7B%22projID%22%3A%221203%22%2C%22P_Area%22%3A%22Planting%20Area%201%22%2C%22Area_ha%22%3A7.227508%7D%2C%22geometry%22%3A%7B%22type%22%3A%22Polygon%22%2C%22coordinates%22%3A%5B%5B%5B143.882124%2C-35.989848%5D%2C%5B143.882103%2C-35.995473%5D%2C%5B143.878949%2C-35.995456%5D%2C%5B143.879035%2C-35.995091%5D%2C%5B143.879721%2C-35.994865%5D%2C%5B143.880386%2C-35.994153%5D%2C%5B143.880665%2C-35.99365%5D%2C%5B143.881159%2C-35.993268%5D%2C%5B143.881631%2C-35.992782%5D%2C%5B143.881803%2C-35.992452%5D%2C%5B143.881674%2C-35.99207%5D%2C%5B143.881438%2C-35.991792%5D%2C%5B143.881202%2C-35.991497%5D%2C%5B143.881159%2C-35.991081%5D%2C%5B143.881094%2C-35.990751%5D%2C%5B143.881223%2C-35.990334%5D%2C%5B143.880966%2C-35.989987%5D%2C%5B143.880944%2C-35.989744%5D%2C%5B143.882124%2C-35.989848%5D%5D%5D%7D%7D%5D%7D"
      );
    });
  });
});
