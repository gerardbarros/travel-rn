import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'

// @desc    auth user/set token
// route    POST /api/users/auth
// @access  Public
const authUser = asyncHandler (async (req, res) => {
    res.status(200).json({ message: 'Auth User'})
})

// @desc    Register new user
// route    POST /api/users/
// @access  Public
const registerUser = asyncHandler (async (req, res) => {
    const { name, email, password } = req.body
    console.log(name)
    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }

    res.status(200).json({ message: 'Register User'})
})

// @desc    Logout user
// route    POST /api/users/logout
// @access  Public
const logoutUser = asyncHandler (async (req, res) => {
    res.status(200).json({ message: 'Logout User'})
})

// @desc    Gett user profile
// route    GET /api/users/profile
// @access  Private (need JWT)
const getUserProfile = asyncHandler (async (req, res) => {
    res.status(200).json({ message: 'User Profile'})
})

// @desc    Update user profile
// route    PUT /api/users/profile
// @access  Private (need JWT)
const updateUserProfile = asyncHandler (async (req, res) => {
    res.status(200).json({ message: 'Update Profile'})
})

export { 
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}