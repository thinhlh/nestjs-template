module.exports = { 
    extends: ["@commitlint/config-conventional"],
    parserPreset: {
        parserOpt: {
            headerPattern: /^[(JIRA|TICKET_REF)\-[0-9]+\](feat|fix|docs|style|refactor|perf|test|chore|ci):[\d\S\d]$/,
            headerCorrespondence: ["type", "scope", "subject"],
        }
    },
    rules: {
        "header-max-length": [0, "always", 100],
    }
};
