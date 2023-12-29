import { NodeEnv, isModeDev, isModeProd, isModeTest } from "../environment";

describe("utils/environment", () => {
  const setNodeEnv = (env?: NodeJS.ProcessEnv["NODE_ENV"]) => {
    (process.env as any).NODE_ENV = env || NodeEnv.Test;
  };

  const originalNodeEnv = process.env.NODE_ENV;
  afterEach(() => setNodeEnv(originalNodeEnv));

  describe("isModeDev()", () => {
    test("should return 'true' if 'NODE_ENV' is 'development'", () => {
      setNodeEnv(NodeEnv.Development);
      expect(isModeDev()).toBeTruthy();
    });

    test("should return 'false' if it is anything else", () => {
      expect(isModeDev()).toBeFalsy();

      setNodeEnv(NodeEnv.Production);
      expect(isModeDev()).toBeFalsy();
    });
  });

  describe("isModeProd()", () => {
    test("should return 'true' if 'NODE_ENV' is 'production'", () => {
      setNodeEnv(NodeEnv.Production);
      expect(isModeProd()).toBeTruthy();
    });

    test("should return 'false' if it is anything else", () => {
      expect(isModeProd()).toBeFalsy();

      setNodeEnv(NodeEnv.Development);
      expect(isModeProd()).toBeFalsy();
    });
  });

  describe("isModeTest()", () => {
    test("should return 'true' if 'NODE_ENV' is 'test'", () => {
      expect(isModeTest()).toBeTruthy();
    });

    test("should return 'false' if it is anything else", () => {
      setNodeEnv(NodeEnv.Development);
      expect(isModeTest()).toBeFalsy();

      setNodeEnv(NodeEnv.Production);
      expect(isModeTest()).toBeFalsy();
    });
  });
});
