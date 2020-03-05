# Reece Code Test -- Server

## Important

This is only the server of the whole application, if you want to experience/ check the whole functionalities of it, please pull the
[client](https://github.com/yuchenQ/reece-test-client).

Or run ```git clone https://github.com/yuchenQ/reece-test-client.git <target_folder>``` to make a quick pull.

**You should run server before running client.**

## Overview

Koa 2, Mongoose, MongoDB Atlas(remote database), Babel, Ramda, Eslint, Prettier.

## Issues

Need token to access to MongoDB Atlas, while not included in the repo, use your MongoDB Atlas token to initiate the db.

```sh
// .env
ATLAS_URI=<your mongodb atlas token>
SERVER_PORT=8000 // customize listening port, default is 8000
```

## Getting Started

### 1. Prerequisites

- Git
- Node(& npm): any 12.x version starting with 12.14.1 or greater

### 2. Installation

1. `npm i` to install the website's npm dependencies

### 3. Running development version

`npm run start:dev` to start the development version of server.

### 4. Running production version

`npm run start:prod` to start the production version of server.

## Running tests

### Linting

ESLint &n StyleLint, check syntax, find problems, and enforce code style.
`npm run lint` to run linting for codebase.

## Deployment

### 1. Build

`npm run build` to build website artifacts

- Tool: Webpack, Babel
- Artifacts: `./build`
