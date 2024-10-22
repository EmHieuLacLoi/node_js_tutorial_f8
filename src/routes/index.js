const newsRouter = require('./news')
const siteRouter = require('./site')
function route(app) {
    // link/news/newsrouter
    app.use('/news', newsRouter)
    // link/
    app.use('/', siteRouter)
}

module.exports = route