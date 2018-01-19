'use strict';

const express = require( 'express' );
const app = express();
const volleyball = require( 'volleyball' );
const nunjucks = require( 'nunjucks' );
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');


app.listen(3000);

app.use(volleyball);

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views');

