# Contributing

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Default Branch](#default-branch)
- [Commits](#commits)
  - [Structure](#structure)
    - [Header](#header)
      - [Type](#type)
      - [Scope](#scope)
      - [Description](#description)
    - [Body](#body)
    - [Footer](#footer)
  - [Examples](#examples)x
- [Pull Requests](#pull-requests)
- [Code Guidelines](#code-guidelines)

## Default Branch

The default branch of this repository is `main`.

## Commits

Commits should follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format. Add any relevant JIRA ticket numbers to the bottom of the commit.

Each commit message consists of a **header**, an optional **body** and an optional **footer**. The header has a special format that includes a **type**, an optional **scope** and a **subject**:

### Semantic commit message
Refers to this file to update commit pattern [commit-msg](/.husky/commit-msg)
```
[scope?]<type>: <description>

[optional body]

[footer(s)]

# Example
[TNT-0000]docs: add contributing documentation
docs: add contributing documentation
```

#### Header

- The header is mandatory and the scope of the header is optional.
- Avoid committing lines longer than 72 characters: this allows the message to be easier to read on git tools

##### Type

Valid types are:

- **feat:** A new feature
- **fix:** A bug fix
- **docs:** Documentation only changes
- **style:** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor:** A code change that neither fixes a bug nor adds a feature
- **perf:** A code change that improves performance
- **test:** Adding missing or correcting existing tests
- **chore:** Changes to the build process or auxiliary tools and libraries such as documentation generation
- **ci:** CI/CD changes

##### Scope

The scope may represent anything impacted by the commit (e.g. a component, an epic, ticket,...), this help navigating through the commit

##### Description

The description contains a succinct overview of the change:

- Use the imperative, present tense: "change" not "changed" nor "changes"
- Don't capitalize the first letter
  - There is a linting rule preventing this
- No period (.) at the end

#### Body

Use your best judgment to format the body, keeping it helpful and tidy, using the same rules from the subject above.

Write one or more lines as bullet points, for instance:

```
* do this
* do that
```

### Examples

```
[TNT-0000]docs: add contributing documentation

* add pull request template
* add ADR section and folder structure
* add table of contents and relevant sections

TNT-0001 TNT-0002
```

## Pull Requests

- Pull requests will follow the [PR Template](../.github/PULL_REQUEST_TEMPLATE.md).
- Pull requests require 2 approvals prior to merging.
- Pull requests do not require a ticket number in the title.
- Automated actions are executed for every PR opened against `main`. These actions will run tests, check types, and lint the codebase to offer a base level check of code quality.

## Code Guidelines

More details on [Code Guidelines](./CODE_GUIDELINES.md).
