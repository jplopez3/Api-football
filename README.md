
##### Outscore backend server
## Prerequisites
- We need node 14.14.0 version, at least, for this project to work. 
- Activate ES modules with "type": "module"
    - [node.js](https://nodejs.org/en/)
    - [node.js Documentation](https://nodejs.org/api/packages.html#packages_package_json_and_file_extensions)

## Build
1 - Install heroku CLI
- [Heroku Cli Guide](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
    
2 - Create .evn file with the API key 
    API_FOOTBALL_KEY=*Insert key here*

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

        Http Requests: 
            - [Axios](https://github.com/axios/axios)

        Cache:
            - [node-cache](https://www.npmjs.com/package/node-cache)


## File structure
src
│   app.js          # App entry point
└───config          # Environment variables and configuration related stuff
└───loaders         # Split the startup process into modules
└───services        # All the business logic is here