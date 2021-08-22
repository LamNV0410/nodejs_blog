const newsRouter = require('./news');

function route(app) {
    app.use('/news', newsRouter);

    app.get('/news', (req, res) => {
        res.render('news');
    });

    app.get('/search', (req, res) => {
        res.render('search');
    });
}

module.exports = route;