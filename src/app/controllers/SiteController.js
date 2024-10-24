const Course = require("../models/Course");
const {multipleMongooseToObject} = require('../../util/mongoose.js')

class SiteController {
  // [GET] /
  index(req, res, next) {
    Course.find({})
      .then(courses => {
        // chuyen sang obj literater voi handlebar
        courses = multipleMongooseToObject(courses)
        res.render('home', { courses });
      })
      .catch(next);
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
