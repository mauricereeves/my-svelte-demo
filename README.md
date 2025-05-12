# SvelteKit Todo Demo

A simple todo application built with SvelteKit and TypeScript. This project serves as a learning exercise to explore SvelteKit's features, including:

- Server-side rendering
- Form handling
- TypeScript integration
- Tailwind CSS styling
- Cookie-based user sessions

## Getting Started

First, install dependencies:

```bash
yarn install
```

## Development

Start the development server:

```bash
yarn dev

# or start the server and open the app in a new browser tab
yarn dev -- --open
```

## Building

To create a production version of your app:

```bash
yarn build
```

You can preview the production build with `yarn preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Features

- Create, read, and delete todos
- Persistent user sessions using cookies
- TypeScript for type safety
- Tailwind CSS for styling
- Server-side form handling
- Focus management for better UX
