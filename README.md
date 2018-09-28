# nuxt-session (WIP)
Add session support in Nuxt.js, accessible in server middleware using [express](https://github.com/expressjs/express) and [express-session](https://github.com/expressjs/session)


## Quick start

1. Add `nuxt-session` dependency using npm to your project:
```
npm install nuxt-session
```
	
2. Add  `nuxt-session`  to  `modules`  section of  `nuxt.config.js`:

    
```javascript
{    
    modules: [
        'nuxt-session', 
    ],
}
```

## Usage

### Usage in Nuxt.js serverMiddleware:
```javascript
module.exports = (req, res, next) => {
    
    // Get the session ID:
    console.log(req.session.id);

    // Assign some value to session:
    req.session.someKey = 'some value';
    
    // Get some value:
    const someOtherValue = req.session.someOtherKey;
    
    
    next();
}
```
	
### Usage in nuxt-api module:

TODO

## Configure

Pass the [express-session](https://github.com/expressjs/session) options directly into this module:
    
```javascript
{    
    modules: [
        [
            'nuxt-session', 
            {
                // express-session options:
                name: 'nuxt-session-id',
                secret: 'some secret key'
            }
        ],
    ],
}
```