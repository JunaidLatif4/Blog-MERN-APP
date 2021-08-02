const express = require("express");
const mongoose = require("mongoose")

const app = express();

mongoose.connect("mongodb://localhost/leddit", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error While Connectiong to MongoDB ", err));

app.listen("4000", () => {
    console.log("BackEnd is running at 4000 Port")
});