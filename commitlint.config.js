module.exports = { 
    extends: ["@commitlint/config-conventional"],
    parserPreset: {
        parserOpt: {
            headerPattern: /^[(JIRA|TICKET_REF)\-[0-9]+\](feat|fix|docs|style|refactor|perf|test|chore|ci):[\d\S\d]$/,
            headerCorrespondence: ["type", "scope", "subject"],
        }
    },
    rules: {
        // "scope-case": [2, "always", "upper-case"],
        // "type-enum": [2, "always", ["feat", "fix", "docs", "style", "refactor", "perf", "test", "chore", "ci"]],
        // "type-empty": [2, "never"],
        // "subject-empty": [2, "never"],
        // "references-empty": [2, "never"],
        "header-max-length": [0, "always", 100],
    }
};
