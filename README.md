##### Outscore backend server

## Prerequisites

-   We need node 14.14.0 version, at least, for this project to work.
-   Activate ES modules with "type": "module"
    -   [node.js](https://nodejs.org/en/)
    -   [node.js Documentation](https://nodejs.org/api/packages.html#packages_package_json_and_file_extensions)

## Build

1 - Install heroku CLI

-   [Heroku Cli Guide](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

2 - Create .evn file with the API key
API*FOOTBALL_KEY=\_Insert key here*

3 - Install dependencies:
npm install

4 - Launch application:
npm run start

## Technical overview

    - Node:
         Frameworks:
            - [Express](http://expressjs.com/)

        MiddleWare:
            - [Cors](https://www.npmjs.com/package/cors)
            - [compression](https://www.npmjs.com/package/cors)
            Logging:
            - [morgan](https://www.npmjs.com/package/morgan)
            - [winston](https://www.npmjs.com/package/winston)

        Http Requests:
            - [Axios](https://github.com/axios/axios)

        Cache:
            - [node-cache](https://www.npmjs.com/package/node-cache)

    -Lint:
        [ESlint](https://github.com/eslint/eslint)
        [Prettier](https://github.com/prettier/prettier)

## File structure

src
│ index.js # App entry point
└───config # Environment variables and configuration related stuff
└───loaders # Split the startup process into modules
└───resources # All the business logic is here
└───utils # reusable code is here

## Run linter

This project uses ESlint and Prettier to check code style.

```
npm run format
```

depoly
flyctl deploy
