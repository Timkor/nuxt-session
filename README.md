# nuxt-session
Add session support in Nuxt.js, accessible in server middleware using [express](https://github.com/expressjs/express) and [express-session](https://github.com/expressjs/session)


## Quick start

1. Add `nuxt-session` dependency using npm to your project:
```
npm install nuxt-session
```
	
2. Add  `nuxt-session`  to  `modules`  section of  `nuxt.config.js`:

    
```javascript
{    
    modules: ['nuxt-session'],
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
The `session` object will automatically be injected into the context of `nuxt-api`.  

File `/server/api/cart/add.js`:
```javascript
export default {

    method: 'POST',

    params: {
        productId: {
            type: String,
            required: true
        }
    },

    call({productId}, {session}) {

        if (!session.cart) {
            session.cart = [];
        }

        session.cart.push(productId);

        return session.cart;
    }
};
```

### Usage in nuxtServerInit

File `/store/index.js`:
```javascript
export const actions = {
    
    async nuxtServerInit({dispatch, commit}, {req}) {

        // Get session ID:
        const sessionId = req.session.id;

        // Or set initial cart state:
        if (session && session.cart) {
            dispatch('cart/setProducts', session.cart);
        }
    }
};
```


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