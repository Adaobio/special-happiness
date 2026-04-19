# Copilot Cloud Agent Instructions

## Repository Overview

**special-happiness** is a newly initialized repository owned by **Adaobio**. It is licensed under the **MIT License** (see `LICENSE` file).

As of this writing, the repository is in its early stages and does not yet contain application source code, build configuration, or test infrastructure. Agents should expect the project structure to evolve and should always verify the current state before making assumptions.

## Repository Structure

```
/
├── .github/
│   └── copilot-instructions.md   # This file — agent onboarding guide
├── LICENSE                        # MIT License
└── README.md                     # Project readme (minimal)
```

## Getting Started

### Prerequisites

No language runtime or package manager is currently required. When source code is added, check for:

- A `package.json` (Node.js/npm) or equivalent manifest for other ecosystems.
- A `Makefile`, `Dockerfile`, or CI workflow file (`.github/workflows/`) that documents build steps.

### Setup, Build, and Test

There are currently **no build or test commands** configured. Before attempting to build or test, always check for:

1. **`package.json`** — look for `scripts` (e.g., `npm install`, `npm run build`, `npm test`).
2. **`Makefile`** — look for targets like `make build`, `make test`.
3. **`.github/workflows/*.yml`** — CI workflows often document the canonical build and test steps.
4. **`README.md`** — may contain updated setup instructions.

If none of these exist, do not assume a build or test process — confirm with the user or note the absence.

## Conventions and Guidelines

### General

- **License**: MIT. All contributed code falls under this license.
- **Branch naming**: The default working branch pattern observed is `copilot/<task-description>`.
- **Commits**: Use clear, concise commit messages that describe the change.

### Code Style

No linter or formatter configuration exists yet. When adding code:

- Follow the conventions of whatever language and framework is adopted.
- If a linter config (e.g., `.eslintrc`, `.prettierrc`, `pyproject.toml`) is added later, always run it before committing.

### Testing

No test framework is configured yet. When tests are added:

- Verify the test command by checking `package.json` scripts or equivalent before running.
- Run tests after making changes to confirm nothing is broken.

## Errors and Workarounds Encountered During Onboarding

| # | Error / Observation | Workaround / Resolution |
|---|---------------------|------------------------|
| 1 | No `package.json` or build configuration found | This is expected for a newly initialized repo. Do not attempt `npm install` or similar commands until a manifest file is present. Always verify the existence of build files before running build/test commands. |
| 2 | Repository has only a single branch (`copilot/add-copilot-instructions-file`) with one commit | No default `main` or `master` branch was present at the time of onboarding. When creating PRs, verify the correct base branch. |
| 3 | Stored agent memories reference Jest testing and `src/`/`tests/` directories that do not exist in the current repo state | Previous agent memories may be stale or incorrect. Always verify the current repository contents rather than relying on cached memories. |

## Tips for Agents

1. **Always explore before acting.** Run `ls`, check for config files, and read `README.md` before making assumptions about the project.
2. **Check for CI workflows.** Look in `.github/workflows/` for existing CI/CD pipelines that define how the project is built, tested, and deployed.
3. **Verify dependencies exist before installing.** Do not run `npm install`, `pip install`, or similar without first confirming the relevant manifest file exists.
4. **Keep this file updated.** As the project evolves, update this file with new build commands, test instructions, conventions, and any new errors or workarounds discovered.
5. **Minimal changes.** Make the smallest changes necessary to accomplish the task. Avoid modifying unrelated code.
