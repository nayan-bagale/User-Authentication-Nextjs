const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({ "Name": "Nayan" })
})

app.get('/:word', (req, res) => {
    console.log(req.params.word)
    res.redirect('/')
})



app.listen(5000, () => {
    console.log("Connected to Port 5000.")
})