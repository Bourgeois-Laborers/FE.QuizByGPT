# Components Folder

This folder contains all the Vue.js components used in the project.

## Structure

## Conventions

-   Component names should be multi-word, except for root App component.
-   Component names should start with the highest-level (often most general) words and end with descriptive modifying words.
-   Each component is defined in its own file. The file name is the name of the component in `PascalCase`

## Props

-   Always use `camelCase` for prop names.
-   Props should be as detailed as possible, which means you should specify their types and require them if necessary.

## Events

-   Component events should be named in `kebab-case`.

## Best Practices

-   Components should be small and focused on a single purpose.
-   Components should communicate with each other using props and events.
-   Keep component templates small and simple. If a template gets too large, consider breaking it up into smaller components.
