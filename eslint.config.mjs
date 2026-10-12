import tseslint from "typescript-eslint";

export default [
  { ignores: ["dist/**", "node_modules/**", ".astro/**", ".cache/**"] },
  {
    files: ["**/*.ts"],
    languageOptions: { parser: tseslint.parser },
    plugins: { "@typescript-eslint": tseslint.plugin },
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
    },
  },
];
