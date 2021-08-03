const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');
const cookieParser = require("cookie-parser");


const authRoute = require("./routes/auth")
const postRoute = require("./routes/post")

const app = express();
app.use(express.json());
app.use(express.static('public'))
// app.use('/public/imgs', express.static('public'))
app.use(cookieParser());
app.use(cors({
    origin: true,
    credentials: true,
}));
dotenv.config();

mongoose.connect("mongodb://localhost/leddit", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error While Connectiong to MongoDB ", err));


app.use("/show", (req, res) => {
    console.log("Requested")
})
app.use("/api", authRoute)
app.use('/post', postRoute)

// app.post('/token' , Auth )

app.listen(5000, () => {
    console.clear();
    console.log("BackEnd is running at 5000 Port")
});