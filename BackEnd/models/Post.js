const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,

    },
    img:{
        type:String
    },
    dec: {
        type: String,
        default: "Default"
    },
    author: {
        type: String,
        default: ""
    },
    category: {
        type: String,
        default: "default"
    },
    comments :[
        {
            msg:{
               type:String,
               require:true
            },
            author:{
                type:String,
                require:true
            }
        }
    ]
},
    { timestamps: true }
)

module.exports = mongoose.model("Post", PostSchema);