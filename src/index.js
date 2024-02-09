//install with package manager express

const express = require('express') //import express

const app = express(); //express app


app.use(express.json())


app.get("/courses", (request, response) => {


    /*     
        QueryParams 
        const pageQuery = request.query.page;
        const pageOrder = request.query.order;
        console.log(pageOrder)
        console.log(pageQuery) */



    return response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3",
        "Curso 4"
    ]
    )
})
app.post("/courses", (request, response) => {
    const body = request.body
    console.log(body)

    return response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3",
        "Curso 4"
    ])
})

app.put("/courses/:id", (request, response) => {
    /* //Destructure route param
        const { id } = request.params 
        console.log(id) */

    return response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3",
        "Curso 4"
    ])
})

app.patch("/courses/:id", (request, response) => {
    return response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3",
        "Curso 4"
    ])
})


app.delete("/courses/:id", (request, response) => {
    return response.json([
        "Curso 3",
        "Curso 1",
        "Curso 2",

    ])
})

app.listen(3333)