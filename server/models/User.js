const mongoose = require("mongoose");
const validator = require('validator')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Provide name'],
        minlength: 3,
        maxlength: 30,
    },
    email: {
        type: String,
        required: [true, 'Please Provide email'],
        validate: [validator.isEmail, "Please enter a valid email"],
    },
    password: {
        type: String,
        required: [true, 'Please Provide Password'],
        minlength: 6,
    },
    confirmPassword: {
        type: String,
        required: [true, 'Please Provide Password'],
        minlength: 6,
        validate: {
            validator: function (value) {
                return value === this.password;
            },
            message: 'Password and Confirm Password must match'
        }
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'creator'],
        default: 'user',
    },
    image: {
        type: String,
    },
    phoneNo: {
        type: String,
    },
    address: {
        type: String,
    },
}, { timestamps: true });

// Hash Password
UserSchema.pre('save', async function () {

    // don't hash the password again if its not modified
    if (!this.isModified('password') || !this.isModified('confirmPassword')) return;

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    this.confirmPassword = await bcrypt.hash(this.confirmPassword, salt);
});

module.exports = mongoose.model("User", UserSchema);
