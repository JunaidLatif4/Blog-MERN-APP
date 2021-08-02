const router = require("express").Router();
const mongoose = require("mongoose");

const Post = require("../models/Post");




// CREATE
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



// DELETE
router.delete('deletepost' , async (req , res)=>{

    
})

module.exports = router;