const mongoose = require('mongoose');
const userSchema=mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email address is required"],
        trim: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
});
module.exports=mongoose.model('users',userSchema);