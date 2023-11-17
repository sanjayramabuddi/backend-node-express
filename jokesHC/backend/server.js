// const express = require("express");
import express from "express"; // module js
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Joke 1",
            content: "This is Joke 1",
        },
        {
            id: 2,
            title: "Joke 2",
            content: "This is Joke 2",
        },
        {
            id: 3,
            title: "Joke 3",
            content: "This is Joke 3",
        },
        {
            id: 4,
            title: "Joke 4",
            content: "This is Joke 4",
        },
        {
            id: 5,
            title: "Joke 5",
            content: "This is Joke 5",
        },
        {
            id: 6,
            title: "Joke 6",
            content: "This is Joke 6",
        },
    ];
    res.send(jokes);
});

app.listen(port, () => {
    console.log(`Serving at port ${port}`);
});
