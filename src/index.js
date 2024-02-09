//install with package manager express

const express = require('express') //import express

const app = express(); //express app

app.get("/", (request, response) => {
    return response.json(
        {
            message: "Hello World!"
        }
    )
})


app.listen(3333)