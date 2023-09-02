// Be able to parse cookie

import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// protects routes so you have to be logged in to access route
const protect = asyncHandler(async(req, res, next) => {
    let token

    token = req.cookies.jwt

    //check for cookie
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decoded.userId).select('-password')

            next()
        } catch (error) {
            res.status(401)
            throw new Error('Not authorized. Invalid token')
        }
    } else {
        res.status(401)
        throw new Error('Not authorized user. No token')
    }
})

export { protect }