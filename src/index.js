const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Http Logger
// app.use(morgan('combined'))

// Template engine handlebars
app.engine(
    'hbs',
    handlebars({
        extname: 'hbs',
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
console.log('Path: ', path.join(__dirname, 'resources/views'));

// Routing
route(app);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});