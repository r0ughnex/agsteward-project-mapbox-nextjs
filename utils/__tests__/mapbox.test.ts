import { encodeAreasGeoJSON } from "../managementAreas";
import {
  getStaticMapURLWithMarker,
  getStaticMapURLWithPolygon,
} from "../mapbox";

describe("utils/mapbox", () => {
  const testGeoJSONString = encodeAreasGeoJSON("[]");
  const testStaticMapURL = "https://api.mapbox.com/test-map-url/static";
  const testAccessToken = "pk.test-public-mapbox-personal-access-token";

  beforeAll(() => {
    vi.stubEnv("NEXT_PUBLIC_MAPBOX_STATIC_MAP_URL_LIGHT", testStaticMapURL);
    vi.stubEnv("NEXT_PUBLIC_MAPBOX_PERSONAL_ACCESS_TOKEN", testAccessToken);
  });

  afterAll(() => {
    vi.unstubAllEnvs();
  });

  describe("getStaticMapURLWithMarker()", () => {
    test("it should return the image URL of map (of given size) showing a marker at the given coordinates with default 'color', 'label', 'scale' and 'zoom'", () => {
      expect(
        getStaticMapURLWithMarker({
          longitude: 151.2093,
          latitude: -33.8688,
          height: 200,
          width: 400,
        })
      ).toBe(
        `${testStaticMapURL}/pin-l-0+1a1a1b(151.2093,-33.8688)/151.2093,-33.8688,14,0/400x200@2x?attribution=false&logo=false&access_token=${testAccessToken}`
      );
    });

    test("it should return the image URL of map (of given size) showing a marker at the given coordinates with custom 'color', 'label', 'scale' and 'zoom'", () => {
      expect(
        getStaticMapURLWithMarker({
          longitude: 147.5146,
          latitude: -41.8239,
          color: "green",
          height: 400,
          width: 800,
          zoom: 12,
          label: 2,
          scale: 1,
        })
      ).toBe(
        `${testStaticMapURL}/pin-l-2+green(147.5146,-41.8239)/147.5146,-41.8239,12,0/800x400@1x?attribution=false&logo=false&access_token=${testAccessToken}`
      );
    });
  });

  describe("getStaticMapURLWithPolygon()", () => {
    test("it should return the image URL of map (of given size) showing a polygon drawn at the given 'geoJSON' coordinates with default 'scale' and 'zoom'", () => {
      expect(
        getStaticMapURLWithPolygon({
          geoJSON: testGeoJSONString,
          longitude: 151.2093,
          latitude: -33.8688,
          height: 200,
          width: 400,
        })
      ).toBe(
        `${testStaticMapURL}/geojson(${testGeoJSONString})/151.2093,-33.8688,14,0/400x200@2x?attribution=false&logo=false&access_token=${testAccessToken}`
      );
    });

    test("it should return the image URL of map (of given size) showing a polygon drawn at the given 'geoJSON' coordinates with custom 'scale' and 'zoom'", () => {
      expect(
        getStaticMapURLWithPolygon({
          geoJSON: testGeoJSONString,
          longitude: 147.5146,
          latitude: -41.8239,
          height: 400,
          width: 800,
          zoom: 12,
          scale: 1,
        })
      ).toBe(
        `${testStaticMapURL}/geojson(${testGeoJSONString})/147.5146,-41.8239,12,0/800x400@1x?attribution=false&logo=false&access_token=${testAccessToken}`
      );
    });
  });
});
