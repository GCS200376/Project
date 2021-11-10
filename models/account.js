
const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({

    UserName : {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    Password : {
        type: String,
        required: true,
        trim: true,
    },
    FullName : {
        type: String,
        required: true,
        trim: true,
    },
    avatarlink : {
        type: String,
        default: src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg",
        require: false,
        trim: true,
    },

});

const Account = mongoose.model("Account", AccountSchema,"Account");
module.exports = Account;