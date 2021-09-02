const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    index(req, res, next) {
        // res.json("ahihi");
        Course.find({})
            .then(courses => {
                res.render('home', { courses: mutipleMongooseToObject(courses) })
            })
            .catch(next)
    }
}

module.exports = new SiteController();
