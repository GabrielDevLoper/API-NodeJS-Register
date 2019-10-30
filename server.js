const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Client", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true
});

requireDir("./src/models");

app.use("/", require("./src/Routes"));

//Porta usada, podendo ser alterada
app.listen(3000);