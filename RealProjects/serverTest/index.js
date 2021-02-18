const express = require("express")
const app = express()

app.get('/:path', (req, res) => {
    const { path } = req.params;
    res.send(`<h1> Viewing Page ${path}! </h1>`)
})

app.listen(8080, () =>{
    console.log("Listening on port 3000.")
})