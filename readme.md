# A simple Node server setup that uses Express, Webpack, Babel and Mocha. Created for rapid prototyping.

Clone and install:
`npm install`
`npm install --dev`

## Server

The Express server is in `server/server.js`.
Start it with `npm run start`
There is no build or production process at present.

## Webpack 

Used to bundle up the javascript files. Minification options would need adding for production.
webpack runs automaticaly with `npm run start`.
The config is in webpack.config.js
Nodemon is used to automatically detect file changes and rebundle them.

## Babel

Enables ES6 code to be used.
Installed as both a standard libary - for the server code, and a loader - for webpack.
Config is in `.bablerc` for the server and `webpack.config.js` for client side bundles.

## Mocha is setup for unit testing.

Run the tests with `npm run test`
Tests are in the `test` directory.

## Extra

Additional packages in package.json are:

`concurrently` : Enables the start script to run multiple items. In this case it starts both the server and the webpack process.

`nodemon` : Watches files for changes. Reloads the server when changes are detected.

`nodemon-webpack-plugin` : Makes nodemon available to webpack.

`should` : An assertion library for Mocha tests.


