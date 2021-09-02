const Course = require('../models/Course');

class NewsController {
    // [GET] /news
    index(req, res, next) {
        // res.json("ahihi");
        Course.find({})
            .then(courses => res.render('news', { courses }))
            .catch(next)
    }

    show(req, res) {
        res.send('NEWS DETAILS');
    }
}

module.exports = new NewsController();
