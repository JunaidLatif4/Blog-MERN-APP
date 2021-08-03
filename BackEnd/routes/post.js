const router = require("express").Router();
const multer = require('multer');
const mongoose = require("mongoose");
const fs = require('fs');
const { promisify } = require("util")
const pipeline = promisify(require("stream").pipeline)

const authenticate = require("../middleware/authenticate")

const Post = require("../models/Post");




// CREATE
const upload = multer();
router.post('/createpost', upload.single("file"), async (req, res) => {

    const fileName = "img" + Math.floor(Math.random() * 1000) + req.file.originalName;
    console.log(fileName)
    await pipeline(req.file.stream, fs.createWriteStream(`${__dirname}/../public/imgs/${fileName}`))

    let newPost = new Post({
        title: req.body.title,
        img: "http://localhost:5000/imgs/" + fileName,
        // dec: req.body.dec,
        author: req.body.author,
        // category: req.body.cat,
    });
    await newPost.save()
        .then((data) => {
            res.json(data)
        }).catch((err) => {
            2
            res.json(err)
        })

});



// DELETE
router.delete('deletepost', async (req, res) => {


})

module.exports = router;