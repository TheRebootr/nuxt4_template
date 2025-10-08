// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import stylistic from "@stylistic/eslint-plugin";

export default withNuxt({
  plugins: {
    "@stylistic": stylistic,
  },
  // You can add your custom ESLint configuration here
  rules: {
    "@stylistic/comma-dangle": ["error", "always-multiline"],
    "@stylistic/quotes": ["error", "double"],
    "vue/first-attribute-linebreak": "off",
  },
});
