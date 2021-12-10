const express = require('express');
const app = express()
const port = 3000
const movieDB = require("./routes/router")

app.use('/', movieDB)
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.listen(port, () => {console.log(`Server listening at http://localhost:${port}`)})