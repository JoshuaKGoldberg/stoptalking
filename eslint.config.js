import eslint from "@eslint/js";
import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import jsdoc from "eslint-plugin-jsdoc";
import jsonc from "eslint-plugin-jsonc";
import markdown from "eslint-plugin-markdown";
import n from "eslint-plugin-n";
import packageJson from "eslint-plugin-package-json/configs/recommended";
import perfectionistNatural from "eslint-plugin-perfectionist/configs/recommended-natural";
import * as regexp from "eslint-plugin-regexp";
import yml from "eslint-plugin-yml";
import tseslint from "typescript-eslint";

export default tseslint.config(
    {
        ignores: [
            "coverage*",
            "lib",
            "node_modules",
            "pnpm-lock.yaml",
            "**/*.snap",
        ],
    },
    {
        linterOptions: {
            reportUnusedDisableDirectives: "error",
        },
    },
    eslint.configs.recommended,
    ...jsonc.configs["flat/recommended-with-json"],
    ...markdown.configs.recommended,
    ...yml.configs["flat/recommended"],
    ...yml.configs["flat/prettier"],
    comments.recommended,
    jsdoc.configs["flat/recommended-typescript-error"],
    n.configs["flat/recommended"],
    packageJson,
    perfectionistNatural,
    regexp.configs["flat/recommended"],
    ...[...tseslint.configs.strict, ...tseslint.configs.stylistic].map(
        (config) => ({
            ...config,
            files: ["**/*.js", "**/*.ts", "**/*.tsx"],
            rules: {
                ...config.rules,
                // These off-by-default rules work well for this repo and we like them on.
                "jsdoc/informative-docs": "error",
                "logical-assignment-operators": [
                    "error",
                    "always",
                    { enforceForIfStatements: true },
                ],
                "operator-assignment": "error",

                // These on-by-default rules don't work well for this repo and we like them off.
                "jsdoc/require-jsdoc": "off",
                "jsdoc/require-param": "off",
                "jsdoc/require-property": "off",
                "jsdoc/require-returns": "off",
                "no-case-declarations": "off",
                "no-constant-condition": "off",

                // These on-by-default rules work well for this repo if configured
                "@typescript-eslint/no-unused-vars": [
                    "error",
                    { caughtErrors: "all" },
                ],
                "perfectionist/sort-objects": [
                    "error",
                    {
                        order: "asc",
                        "partition-by-comment": true,
                        type: "natural",
                    },
                ],

                // Stylistic concerns that don't interfere with Prettier
                "no-useless-rename": "error",
                "object-shorthand": "error",
            },
        }),
    ),
    ...[
        ...tseslint.configs.strictTypeChecked,
        ...tseslint.configs.stylisticTypeChecked,
    ].map((config) => ({
        ...config,
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parserOptions: {
                project: "./tsconfig.eslint.json",
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            // These on-by-default rules work well for this repo if configured
            "@typescript-eslint/no-unnecessary-condition": [
                "error",
                {
                    allowConstantLoopConditions: true,
                },
            ],
            "@typescript-eslint/prefer-nullish-coalescing": [
                "error",
                { ignorePrimitives: true },
            ],
        },
    })),
    {
        files: ["*.jsonc"],
        rules: {
            "jsonc/comma-dangle": "off",
            "jsonc/no-comments": "off",
            "jsonc/sort-keys": "error",
        },
    },
    {
        files: ["**/*.{yml,yaml}"],
        rules: {
            "yml/file-extension": ["error", { extension: "yml" }],
            "yml/sort-keys": [
                "error",
                {
                    order: { type: "asc" },
                    pathPattern: "^.*$",
                },
            ],
            "yml/sort-sequence-values": [
                "error",
                {
                    order: { type: "asc" },
                    pathPattern: "^.*$",
                },
            ],
        },
    },
);
