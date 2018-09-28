module.exports = {

    name: 'nuxt-session-id',

    secret: 'nuxt-session-secret',
    
    cookie: { 
        maxAge: 1000 * 60 * 60 * 24 * 7 * 52
    },
    
    saveUninitialized: false,
    
    resave: true
};