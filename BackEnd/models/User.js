const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    profile_pic: {
        type: String,
        default: ""
    },
    tokens: [
        {
            token: {
                type: String,
                require: true
            }
        }
    ]
},
    { timestamps: true }
);


// Generate AuthToken
UserSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        // console.log("Token is Created === " , token)
        return token;
    } catch (err) {
        console.log("Error While generateAuthToken")
    }
}


module.exports = mongoose.model("User", UserSchema);