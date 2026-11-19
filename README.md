# SwiatRamble

[SwiatRamble](https://github.com/berwincr/SwiatRamble) is an interactive cultural discovery app for exploring countries, traditions, food, history, festivals, and landmarks. Explore the world map, read cultural stories, take quizzes, and collect passport stamps as you learn.

## Features

- Interactive world map with country borders, search, zoom, and exploration markers
- Country guides covering culture, history, food, clothing, languages, festivals, arts, and geography
- Cultural stories with search, category filters, and saved stories
- Culture quizzes with score history
- Passport stamps, wishlists, favorites, and achievements
- Profile customization, including avatar uploads
- Spin the Globe for a random country discovery

## Getting started

### Requirements

- Node.js and npm

### Install and run

```bash
npm ci
npm run dev
```

Vite prints a local development URL in the terminal after the server starts.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Profiles and saved progress

The app currently stores profile information and progress in the browser's `localStorage`; it does not use a server or provide real authentication. The profile form creates a local profile on that browser. Guests can explore and play quizzes, but XP, levels, and achievement rewards are enabled only after creating a local profile. Avatar uploads are also stored locally in the browser.

## Technology

- React
- TypeScript
- Vite
- Tailwind CSS
- Oxlint

## Build

Create a production build with:

```bash
npm run build
```

The generated `dist/` directory is a build artifact and is excluded from Git by `.gitignore`.
