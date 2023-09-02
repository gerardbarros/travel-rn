import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
const port = process.env.PORT || 6000
import userRoutes from './routes/userRoutes.js' 

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Cookie parser middleware
app.use(cookieParser())

app.use('/api/users', userRoutes)
app.use(notFound)
app.use(errorHandler)

app.get('/', (req, res) => res.send('Server is running'))

app.listen(port, () => console.log(`Server started on port ${port}`))