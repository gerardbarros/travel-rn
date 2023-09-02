import express from 'express'
const router = express.Router()
import { 
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.post('/', registerUser) // register
router.post('/auth', authUser)
router.post('/logout', logoutUser) //logout
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

export default router