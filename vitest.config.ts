/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import path from "path";
import { configDefaults, defineConfig } from "vitest/config";

const { exclude: filesToExclude = [], coverage } = configDefaults;
const { exclude: excludeTestCoverageFrom = [] } = coverage ?? {};

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      include: ["**/*.ts", "**/*.tsx"],
      exclude: [
        ...excludeTestCoverageFrom,
        "**/constants.*",
        "**/*config.*",
        "**/*mocks.*",
        "**/*types.*",
        "**/*data.*",
      ],
    },
    exclude: [
      ...filesToExclude,
      "node_modules/**",
      "coverage/**",
      "public/**",
      "icons/**",
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
