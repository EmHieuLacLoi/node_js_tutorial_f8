const Course = require("../models/Course");

class SiteController {
  // [GET] /
  index(req, res) {
    Course.find({})
      .then((courses) => {
        // Do something with the courses data, e.g., render a view
        res.json(courses);
      })
      .catch((err) => {
        // Handle the error
        console.error(err);
        res.status(500).send("An error occurred");
      });
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
