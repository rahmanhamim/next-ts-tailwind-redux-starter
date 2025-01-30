import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("next/core-web-vitals"), {
    languageOptions: {
        globals: {},
    },

    rules: {
        "no-unused-vars": "warn",
        "no-console": "warn",
        "no-undef": "warn",
        quotes: ["error", "single"],
        "react/display-name": "off",
    },
}];