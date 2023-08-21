const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        default: "testemail@gmail.com"
    },
    typeOfUser: {
        type:String,
        default: "junior",
        enum: ["junior", "senior", "admin", "client"]
    },
    Skills:{
        type: Array,
        default: []
    },
    Description:{
        type: String,
        default: "No description"
    }
}, {collection: "users"})

module.exports = mongoose.model("users", UserSchema)