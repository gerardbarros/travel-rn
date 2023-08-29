import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
const port = process.env.PORT || 6000
import userRoutes from './routes/userRoutes.js' 

const app = express()

app.use('/api/users', userRoutes)
app.use(notFound)
app.use(errorHandler)

app.get('/', (req, res) => res.send('Server is running'))

app.listen(port, () => console.log(`Server started on port ${port}`))