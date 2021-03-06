const router = require("express").Router();
const multer = require('multer');
const mongoose = require("mongoose");
const fs = require('fs');
const { promisify } = require("util")
const pipeline = promisify(require("stream").pipeline)

const Post = require("../models/Post");




// AllPosts
router.get('/allposts', async (req, res) => {

    await Post.find()
        .then((data) => {
            res.json(data)
        }).catch((err) => {
            console.log("Error While getting All posts ====== ", err)
            res.json(err)
        })
})



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



// EDIT POST
router.patch('/editpost/:id', async (req, res) => {
    let id = req.params.id;
    let title = req.body.title
    Post.findOneAndUpdate({ _id: id }, { title: title }, { new: true })
        .then((data) => {
            console.log("The Update Data === ", data)
            res.json(data)
        }).catch((err) => {
            console.log("ERROR WHILE UPDATE == ", err)
        })
})

// DELETE
router.delete('/deletepost/:id', async (req, res) => {

    let id = req.params.id

    await Post.findOneAndDelete({ _id: id })
        .then((data) => {
            console.log("DELETED === ", data)
            res.json({ err: false })
        }).catch((err) => {
            console.log("ERROR WHILE DELETING")
        })
})



// AddComment
router.post('/addcomment', async (req, res) => {

    let id = req.body.id
    let comment = req.body.newComment

    Post.updateOne({ _id: id }, { $push: { comments: comment } })
        .then((data) => {
            console.log("Comment ADDED SUCCESS = ", data)
            res.json({ err: false, data })
        }).catch((err) => {
            console.log("ERROR WHILE ADDING COMMENT ", err)
        })

})



// POPULARITY Incriment
router.patch('/popularadd/:id', async (req, res) => {
    let id = req.params.id;
    let newPopular = req.body.newPopular
    await Post.findOneAndUpdate({ _id: id }, { popular: newPopular })
    .then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
})



// POPULARITY Decriment
router.patch('/popularmin/:id', async (req, res) => {
    let id = req.params.id;
    let newPopular = req.body.newPopular
    await Post.findOneAndUpdate({ _id: id }, { popular: newPopular })
    .then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
})

module.exports = router;