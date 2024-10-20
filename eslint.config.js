import stylistic from "@stylistic/eslint-plugin";
import parser from "@typescript-eslint/parser";
import perfectionist from "eslint-plugin-perfectionist";
import eslint from "typescript-eslint";

export default [
	...eslint.configs.recommended,
	{
		ignores: ["**/dist/*"],
	},
	{
		files: ["**/*.{js,ts}"],
		languageOptions: {
			parser: parser,
		},
		plugins: {
			"@stylistic": stylistic,
			"perfectionist": perfectionist,
		},
		rules: {
			"@stylistic/comma-dangle": ["error", "always-multiline"],
			"@stylistic/indent": ["error", "tab"],
			"@stylistic/linebreak-style": ["error", "unix"],
			"@stylistic/no-trailing-spaces": "error",
			"@stylistic/quotes": ["error", "double"],
			"@stylistic/semi": ["error", "always"],
			"perfectionist/sort-imports": "error",
		},
	},
];
