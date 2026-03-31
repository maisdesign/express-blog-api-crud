const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routers/posts')
const postsData = require('./data/posts-data.js')

app.use(express.static('assets'))
app.use("/posts", postsRouter)
app.get('/', (req, res) => {

    res.type("html").send(`Server del mio blog`)
}
)
app.get('/bacheca', (req, res) => {
    res.json(postsData);
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})