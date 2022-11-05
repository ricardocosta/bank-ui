# Bank UI

[![codecov](https://codecov.io/gh/ricardocosta/bank-ui/branch/main/graph/badge.svg?token=T5FJHNAKPA)](https://codecov.io/gh/ricardocosta/bank-ui)

[Nx](https://nx.dev/) monorepo for the Bank project UI.

## 🗂 Structure

- The `apps` directory contains all the apps and correspondent E2E tests.
- The `tools` directory contains generic tooling and scripts that can be used through the project.

## 🔌 Running

The apps have a set of targets configured, depending on the app type. \
Check the `project.json` file in each app to see the details, including the value of `<app-name>`.

Run a target with:
`yarn nx run <app-name>:<target>`

Example:
`yarn nx run sandbox:lint`

**Regular Apps**

| Target         | Description                                     |
| :------------- | :---------------------------------------------- |
| `build`        | Build the application.                          |
| `dev`          | Run the application in dev mode.                |
| `preview`      | Locally preview production build.               |
| `test`         | Run the test.                                   |
| `testCoverage` | Run the tests generating a coverage report.     |
| `testUi`       | Run the tests with the UI dashboard.            |
| `testWatch`    | Run the tests in watch mode.                    |
| `lint`         | Lint the application with ESLint.               |
| `format`       | Format the application with Prettier.           |
| `formatDry`    | Check if the application is properly formatted. |
| `ts`           | Check if the application is compiling.          |
| `seedDb`       | Generate a seed DB for a local REST server.     |

**E2E Apps**

| Target    | Description                         |
| :-------- | :---------------------------------- |
| `e2e`     | Run the E2E tests.                  |
| `codegen` | Launch Playwright's code generator. |

## Coverage

This project is configured with Codecov to automatically check if Pull Requests keep code coverage levels.

<img src="https://codecov.io/gh/ricardocosta/bank-ui/branch/main/graphs/icicle.svg?token=T5FJHNAKPA" alt="Current code coverage">
