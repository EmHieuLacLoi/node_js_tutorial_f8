const express = require('express')
const app = express()
const port = 3000

app.get('/test', (req, res) => {
    return res.send('Hello!')
})

app.listen(port, () => console.log(`example link: http://localhost:${port}/`))