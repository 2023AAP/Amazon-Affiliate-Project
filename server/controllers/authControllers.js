const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const jwt = require("jsonwebtoken");
const { attachCookiesToResponse, createTokenUser } = require('../utils')

const register = async (req, res) => {
    //check if the email is already exists
    const { email, name, password, confirmPassword } = req.body
    console.log(req.body)

    const emailAlreadyExists = await User.findOne({ email })

    // check if the email already exists
    if (emailAlreadyExists) {
        return res.status(400).json({ error: "Email Already Exists" });
    }

    //first registered user is an admin
    const isFirstAccount = await User.countDocuments({}) === 0
    const role = isFirstAccount ? 'admin' : 'user';

    const user = await User.create({ name, email, password, confirmPassword, role });

    console.log(user)

    //issue a jwt
    const tokenUser = createTokenUser(user)

    // Attach paylaod as Cookie to Response
    attachCookiesToResponse({ res, user: tokenUser });

    res.status(StatusCodes.CREATED).json({ tokenUser })
}

module.exports = {
    register
}