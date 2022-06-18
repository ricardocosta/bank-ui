# Tools

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build tools` to build the library.

## Executors

### Validate

The `validate` executor runs the following targets in the invoked project:

- `lint`
- `format`
- `ts`

**Options**

| Option   | Default |   Type    | Description                                                                                   |
| :------- | :-----: | :-------: | :-------------------------------------------------------------------------------------------- |
| `dryRun` | `false` | `boolean` | Whether or not the `format` target is ran in dry run mode. If `true`, files are not modified. |
