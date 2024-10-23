const Course = require("../models/Course.js");
const {mongooseToObject} = require('../../util/mongoose.js')

class CourseController {
  // [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
    .then(course => 
      res.render('courses/show', { course: mongooseToObject(course)})
    )
    .catch(next)
  }

  // [Get] /courses/create
  create(req, res, next) {
    res.render('courses/create')
  }

  // [post] /courses/store
  store(req, res, next) {
    const formData = req.body
    const course = new Course(formData)
    course.save()
    .then(() => res.redirect('/'))
    .catch(e => res.send(e))
  }
}

module.exports = new CourseController();
