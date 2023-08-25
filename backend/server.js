import express from 'express'
const port = 6000

const app = express()

app.get('/', (req, res) => res.send('Server is running'))

app.listen(port, () => console.log(`Server started on port ${port}`))