# Bank UI

UI for the Bank application.

## 🔌 Running

You can run the application locally with:

```
$ pnpm dev
```

The application will be available at [http://localhost:3000/](http://localhost:3000/).


## 📦 Publishing

To publish a new version of the project:

1. Create a branch for the release:

```
$ git checkout -b release_$(date -u +"%Y%m%d")
```

2. Preview the changes to `CHANGELOG` and predicted tag:

```
$ pnpm run release:dry
```

3. Update the `CHANGELOG` file automatically based on the commits:

```
$ pnpm run release
```

4. Open a Pull Request against `main` and have it merged.

5. Update your local `main` branch, generate the new tag and push it:

```
$ git checkout main
$ git pull
$ pnpm release:tag
$ git push --tags
```
