# hooks-ts-quiz

A Typescript in React exercise with Custom Hooks and some regEx logic.

Features:

- React Hooks
- Custom hook using regexp to replace HTML entities.
- Custom hook to shuffle questions and answers.
- display US/UK spelling discrepancies according to country code
- limit fill-in answers requiring numbers to only numerical responses

## Setup

This repo provides a React application bootstrap. To get setup, run these commands:

- Install dependencies:

```sh
npm install
```

- Run it locally

```sh
npm start
```

The command above will:

- Start an HTTP server for the API (localhost:4000);
- Start an HTTP server (powered by react-scripts) for the front-end (localhost:3000);

### API instructions

This repository provides a basic API (running under port 4000) that returns the required data for the application.
The API will be available after running the `npm start` command.  

#### GET Questions List

`http://localhost:4000/api/questions`
