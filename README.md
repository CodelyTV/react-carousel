<p align="center">
  <a href="https://codely.com">
    <img src="https://user-images.githubusercontent.com/10558907/170513882-a09eee57-7765-4ca4-b2dd-3c2e061fdad0.png" width="300px" height="92px" alt="Codely logo"/>
  </a>
</p>

<h1 align="center">
  <⚡⚛️> Vite React Library Template (by Codely)
</h1>

<p align="center">
    <a href="https://github.com/CodelyTV/typescript-react_library-vite_template/actions/workflows/ci.yml"><img src="https://github.com/CodelyTV/typescript-react_library-vite_template/actions/workflows/ci.yml/badge.svg" alt="Build status"/></a>
    <a href="https://github.com/CodelyTV"><img src="https://img.shields.io/badge/CodelyTV-OS-green.svg?style=flat-square" alt="Codely Open Source"/></a>
    <a href="https://pro.codely.com"><img src="https://img.shields.io/badge/CodelyTV-PRO-black.svg?style=flat-square" alt="Codely Pro Courses"/></a>
</p>

<p align="center">
  Template for creating React libraries with TypeScript following best practices: Storybook for documentation, testing, Continuous Integration, and linting.
  <br />
  <br />
  <a href="https://github.com/CodelyTV/typescript-react_library-vite_template/stargazers">Stars are welcome 😊</a>
</p>

## 📚 Documentation

- `npm run docs`: Run Storybook documentation in dev mode
- `npm run build:docs`: Build Storybook documentation

## ✅ Testing

```
  npm run cy:open: Open Cypress in dev mode
  npm run cy:run: Execute Cypress in CLI
```

## 🔦 Linting

- `npm run lint`: Run linter
- `npm run lint:fix`: Fix lint issues

## 🚀 CI and Publishing

This template comes with a GitHub Actions workflow to automatically publish on any push to `main` when the `package.json` version number differs from the latest on npm. Please note that you need to create the package on NPM first.

For it to work you will need to add an `NPM_TOKEN` secret to your repo:

1. Create an automation token in NPM
   - [Documentation on npm tokens](https://docs.npmjs.com/about-access-tokens) and how to create them
2. Go to your GitHub Repository Settings / Secrets / Actions
3. Click on the "New repository secret" button
4. Fill in the form:
   - Name: `NPM_TOKEN`
   - Secret: the NPM token value

Read the [full documentation on the npm-publish action](https://github.com/JS-DevTools/npm-publish).

## 🌈 Tech Stack

- [TypeScript](https://www.typescriptlang.org)
- [Storybook](https://storybook.js.org/)
- [ESLint](https://eslint.org) and [Prettier](https://prettier.io) already configured with the [🤏 Codely's configuration](https://github.com/CodelyTV/eslint-config-codely)
- [Cypress](https://www.cypress.io/) with [Testing Library](https://testing-library.com/docs/cypress-testing-library) for acceptance/component tests
- [GitHub Action Workflows](https://github.com/features/actions) set up to run tests and linting on push
- [Makefile](https://github.com/CodelyTV/typescript-react_library-vite_template/blob/main/Makefile) for standardize how to run projects
- [Sass](https://sass-lang.com) to supercharge CSS with nested classes and more fun
- [.editorconfig](https://editorconfig.org) for sharing the IDE config

## 🤔 FAQ

### 👻 Why not adding `.vscode` or `.idea` to the `.gitignore` template

These are folders created due to personal environment preferences. We should ignore these personal development environment preferences to be ignored using your global `.gitignore` file and leave the project `.gitignore` file as clean as possible, that is, only containing the project specific rules.

You can create a `.gitignore_global` file with rules that will apply to all your repositories with:

```bash
touch ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
```

## 👌 Codely Code Quality Standards

Publishing this package we are committing ourselves to the following code quality standards:

- 🤝 Respect **Semantic Versioning**: No breaking changes in patch or minor versions
- 🤏 No surprises in transitive dependencies: Use the **bare minimum dependencies** needed to meet the purpose
- 🎯 **One specific purpose** to meet without having to carry a bunch of unnecessary other utilities
- ✅ **Tests** as documentation and usage examples
- 📖 **Well documented ReadMe** showing how to install and use
- ⚖️ **License favoring Open Source** and collaboration

## 🔀 Related information

This application was generated using the [<⚡⚛️> TypeScript React Library Template](https://github.com/CodelyTV/typescript-react_library-vite_template). Feel free to check it out and star the repo! 🌟😊🙌
