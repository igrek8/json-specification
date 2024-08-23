import { defaultExclude, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      exclude: [...defaultExclude, "src/index.ts"],
      all: true,
      reportOnFailure: true,
    },
  },
});
