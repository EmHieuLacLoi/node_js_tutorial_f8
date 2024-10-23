const newsRouter = require('./news')
const coursesRouter = require('./courses')
const siteRouter = require('./site')
function route(app) {
    // link/news/newsrouter
    app.use('/news', newsRouter)
    // link/courses/:slug
    app.use('/courses', coursesRouter)
    // link/
    app.use('/', siteRouter)
}

module.exports = route