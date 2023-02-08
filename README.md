# VS Code Launcher

A lightweight, simple utility app to make the process of opening multiple VS Code windows easier.

## Primary Technologies

- [Tauri](https://tauri.app/)
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Material UI](https://mui.com/)
- [Tailwind](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Progress

**This app is still in development and there are no available releases.**

### Feature Checklist

- Basic
  - Add new project entries
  - Save entries to SQLite databse
  - Ability to categorize projects
  - Select projects with checkboxes
  - Launch separate VS Code windows for each project selected
  - Create releases for Windows, MacOS, and Linux
- Nice-to-have's
  - Options menu
    - Flag to save selected projects and populate on app launch
    - Flag to close the app after launching VS Code window(s)
  - Sorting
    - Sort or drag-to-reorder projects within a category
    - Sort or drag-to-reorder categories

## Development

### Install Node

1. Download and install [Node LTS](https://nodejs.org/en/) and make sure it is added to your PATH variable. **If on Linux or Mac OS, I recommend installing Node with [nvm](https://github.com/nvm-sh/nvm)**.
2. Install `yarn` globally.
    1. In your teminal, run this command:

```bash
npm i -g yarn@latest
```

### Install Rust
Follow the [tauri prerequisites guide](https://tauri.app/v1/guides/getting-started/prerequisites/) for your OS to install Rust and any other required tools

### Install Node Modules

In your terminal, navigate to the project directory and run this command:

```bash
yarn
```

### Starting Up the App

Start up the development server by running this command in your terminal:

```bash
yarn tauri:dev
```

**Alternatively**, you can start debugging with VS Code by running the `Debug` launch command.

Tauri will take a minute or two to download and install all of its dependencies. Afterwards, the app should open up in your OS's default web viewer. You can also see the app in a browser at [http://localhost:3000](http://localhost:3000).
