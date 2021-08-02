const router = require("express").Router();
const mongoose = require("mongoose");

const Post = require("../models/Post");

router.post('/createpost', async (req, res) => {

    let newPost = new Post({
        title: req.body.title,
        dec: req.body.dec,
        author: req.body.author,
        category: req.body.cat,
    });
    await newPost.save()
        .then((data) => {
            res.json(data)
        }).catch((err) => {
            res.json(err)
        })

});

module.exports = router;