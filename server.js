const config = require('./config');

// Require (third-party) modules
const express = require('express'),
    compression = require('compression'),
    router = require('./scripts/modules/router'),
    // Create new express app in 'app'
    app = express();

// gzip files
app.use(compression())
    .set('view engine', 'ejs')
    .set('views', 'views')

    .use(express.static('static'))

    .get('/', (req, res) => {
        router.basicPage(res, 'home', 'Marijn\'s NS Reisplanner');
    })

    .get('/offline', (req, res) => {
        router.basicPage(res, 'offline', 'Oeps! Je bent offline. Probeer het later opnieuw!');
    })

    .listen(config.port, () => {
        console.log(`Application started on port: ${config.port}`);
    });