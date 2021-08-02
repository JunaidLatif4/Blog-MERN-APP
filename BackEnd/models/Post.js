const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        typeof: String,
    },
    dec: {
        typeof: String,
    },
    first_name: {
        typeof: String,
    },
    categories: {
        typeof: String,
    },
},
    { timestamps: true }
)

module.exports = mongoose.model("Post", PostSchema);