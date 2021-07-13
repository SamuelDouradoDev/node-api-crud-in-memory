import express, { response } from 'express'
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js'

const app = express()
const PORT = 5000

app.use(bodyParser.json())

app.use('/users', usersRoutes)

// Creating new route. 
app.get('/', (request, response) => {
    response.send('Hello from HomePage!')
})

app.listen(PORT, () => console.log(`Server runing on http://localhost:${PORT}`))