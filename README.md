# Nootbook

## Introduction

Nootbook is an interactive web-based notebook application that allows users to create and edit documents consisting of two primary types of cells: code editor cells and text editor cells. Users can add, rearrange, and manipulate these cells within the notebook, compile code in the code cells, and use Markdown in the text editor cells. The notebook can be saved as a JavaScript file for later use. This project is developed using React with TypeScript, and it utilizes several libraries to provide this functionality.

This project is based on the course [React and TypeScript: Build a Portfolio Project](https://www.udemy.com/course/react-and-typescript-build-a-portfolio-project/). We would like to acknowledge the valuable learnings and inspiration from this course in building Nootbook.

## Features

- Create, edit, and manage code cells with real-time compilation previews.
- Create and edit text cells with support for Markdown markup.
- Add, move, and delete cells within the notebook.
- Save the notebook as a JavaScript file.

## Libraries and Technologies Used

### React

- **Description**: A popular JavaScript library for building user interfaces.
- **Usage**: The entire project is built with React, making it a single-page application.

### TypeScript

- **Description**: A statically typed superset of JavaScript.
- **Usage**: TypeScript is used to add strong typing to the project, improving code quality and maintainability.

### esbuild

- **Description**: A fast, parallel JavaScript bundler and minifier.
- **Usage**: Used to bundle and optimize the project's source code.

### unpkg

- **Description**: A fast, global content delivery network for everything on npm.
- **Usage**: Provides access to libraries and packages for client-side scripting in the project.

### Redux

- **Description**: A predictable state container for managing application state.
- **Usage**: Manages the application's state, allowing for the dynamic addition, removal, and reordering of notebook cells.

### Prettier

- **Description**: An opinionated code formatter to ensure consistent code styling.
- **Usage**: Ensures code consistency and readability throughout the project.

### Monaco Editor

- **Description**: A lightweight, fast code editor component based on Visual Studio Code.
- **Usage**: Provides the code editor cells' functionality, offering syntax highlighting and code editing features.

### MDEditor

- **Description**: A Markdown editor for React.
- **Usage**: Used for creating and editing text cells with Markdown support.

### localforage

- **Description**: A library for offline storage, improving web application performance.
- **Usage**: Utilized for efficient local storage and data persistence in the project.

### react-grid-layout

- **Description**: A draggable and resizable grid layout for React.
- **Usage**: Provides the grid layout functionality for the dynamic arrangement and resizing of notebook cells.

### Tailwind CSS

- **Description**: A utility-first CSS framework for rapid UI development.
- **Usage**: Provides the styling for the entire application, ensuring a responsive and visually appealing user interface.

## Usage

1. **Create Cells:**

   - Click the "Add Code" button to create a new code cell.
   - Click the "Add Text" button to create a new text cell.

2. **Edit Cells:**

   - Code Cells: Type code in the code editor. Code will compile in real-time in the preview iframe.
   - Text Cells: Edit the content with Markdown markup.

3. **Manipulate Cells:**

   - Drag and drop cells to rearrange them.
   - Click the "Delete" button to remove a cell.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the project on GitHub.
2. Create a new branch with a descriptive name.
3. Implement your changes and test them thoroughly.
4. Commit your changes with clear, concise messages.
5. Push your branch to your fork.
6. Create a pull request against the original repository.
