# Store Directory

## Overview

The `store` directory plays a crucial role in our Vue application. It leverages the power of Vue's Composition API to manage the global state. This approach utilizes composables to create reactive and modular state management logic. This directory is home to all our state logic, using Vue's reactivity system to create a more flexible and maintainable state management solution.

## Structure

Each file within this directory represents a specific domain of the application's state. These files should export a composable function that provides access to reactive state and methods to manipulate it.

## Usage

Import the store composable into your component and use it to access or modify the global state. The reactive nature of Composition API ensures that your components remain reactive to state changes.
