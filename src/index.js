const express = require('express');
const session = require('express-session');

const defaultOptions = require('./constants/options');

module.exports = function (moduleOptions) {

    // Accept module options as function:
    if (typeof moduleOptions == 'function') {
        moduleOptions = moduleOptions(session);
    }
    
    // Merge options with default options:
    const options = {
        
        ...defaultOptions,
        ...moduleOptions
    };

    // Setup the session middleware:
    const app = express();

    app.use(session(options));

    // Add server middleware to the beginning, so that is accessible in every middleware handler:
    this.options.serverMiddleware.unshift(app);
};