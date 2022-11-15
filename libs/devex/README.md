# Devex

This project is an [Nx](https://nx.dev) plugin that holds custom generators and executors for Developer Experience tasks.

## Generators

### `app`

Generate a new app and matching E2E testing application with the defined tech stack.

🔌 **Running**

Run `yarn nx g @ricardocosta/devex:app <app-name>` to create a new app under `apps/app-name`.

🔧 **Options**

| Option       | Default | Description                                                   |
| :----------- | :------ | :------------------------------------------------------------ |
| `name`       | -       | The name of the app                                           |
| `tags`       | -       | Tags to be added to the app NX configuration                  |
| `directory`  | -       | Name of the directory to create the app under (inside `apps)` |
| `e2e`        | `true`  | Whether or not to create a matching E2E testing application   |
| `restServer` | `false` | Whether or not to bootstrap a REST server using `json-server` |
