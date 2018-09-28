const express = require('express');
const session = require('express-session');

const defaultOptions = require('./constants/options');

module.exports = function (moduleOptions) {

    const app = express();

    const options = {
        
        ...defaultOptions,
        ...moduleOptions
    };

    // 
    app.use(session(options));

    // Add server middleware to the beginning, so that is accessible in every middleware handler:
    this.options.serverMiddleware.unshift(app);
};