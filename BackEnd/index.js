const express = require("express");
const mongoose = require("mongoose")

const authRoute = require("./routes/auth")

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost/leddit", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error While Connectiong to MongoDB ", err));


app.use("/show" , (req , res)=>{
    console.log("Requested")
})
app.use("/api", authRoute)

app.listen("5000", () => {
    console.log("BackEnd is running at 5000 Port")
});