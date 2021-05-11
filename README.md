# Ninja List

Ninja List is a website with the main purpose of using [Next.js](https://nextjs.org/), [Typescript](https://www.typescriptlang.org/) and [TailwindCSS](https://tailwindcss.com/) in a project. This project is a rewrite of the result from the [Next.js guide](https://github.com/iamshaunjp/nextjs-tutorial) made by iamshaunjp.

## Installation

You can install all required packages using npm

```bash
npm install
```

And you can build it for production with the following commands (this will also purge the TailwindCSS file):

```bash
next build
next start
```

## The Website

The website currently has three main pages:

- A homepage
- About page
- Ninja List: This list includes all users from the json data testing API.

## Changes made

The biggest difference to the original version is the complete rewrite from CSS to TailwindCSS and the change from Javascript to Typescript, which offers a better developer experience. 
Another addition to show of TailwindCSS better was the addition of images.