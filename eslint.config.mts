import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config({
  files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
  ignores: ["dist", "node_modules", "coverage", "package-lock.json"],
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  languageOptions: {
    globals: globals.browser,
  },
});
