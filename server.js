const config = require('./config');

// Require (third-party) modules
const express = require('express'),
    compression = require('compression'),
    revManifest = require('./static/rev-manifest'),
    router = require('./scripts/modules/router'),
    // Create new express app in 'app'
    app = express();

// function for setting cache-control headers
const cacheMiddleWare = (req, res, next) => {
    res.setHeader('Cache-Control', 'max-age=365000000, immutable');
    next();
};

// gzip files
app.use(compression())
    // cache css and js files and images
    .use(/.*-[0-9a-f]{10}\..*/, cacheMiddleWare)
    .use(/.*.(jpg|jpeg|png|gif|ico|svg)$/, cacheMiddleWare)

    .set('view engine', 'ejs')
    .set('views', 'views')

    .use(express.static('static'))

    .get('/', (req, res) => {
        router.basicPage(res, 'home', 'Datepicker Prototype v1', revManifest);
    })

    .get('/offline', (req, res) => {
        router.basicPage(res, 'offline', 'Oeps! Je bent offline. Probeer het later opnieuw!', revManifest);
    })

    .listen(config.port, () => {
        console.log(`Application started on port: ${config.port}`);
    });