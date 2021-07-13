import express, { response } from 'express'
import bodyParser from 'body-parser'

const app = express()
const PORT = 5000

app.use(bodyParser.json())

app.get('/', (request, response) => {
    console.log('[Teste]')
    response.send('Hello from HomePage!')
})

app.listen(PORT, () => console.log(`Server runing on http://localhost:${PORT}`))