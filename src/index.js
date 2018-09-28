const express = require('express');
const session = require('express-session');

const defaultOptions = require('./constants/options');

module.exports = function (moduleOptions) {

    const app = express();

    const options = {
        
        ...defaultOptions,
        ...moduleOptions
    };

    app.use((req, res, next) => {
        console.log('reg session')
        next();
    })
    app.use(session(options));

    // Add server middleware to beginning:
    this.options.serverMiddleware.unshift(app);
};