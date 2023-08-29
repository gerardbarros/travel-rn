import express from 'express'
const router = express.Router()
import { 
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
} from '../controllers/userController.js'

router.post('/', registerUser) // register
router.post('/auth', authUser)
router.post('/logout', logoutUser) //logout
router.route('/profile').get(getUserProfile).put(updateUserProfile)

export default router