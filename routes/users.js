import express, { request, response } from 'express'

const router = express.Router()

router.get('/', (request, response) => {
    response.send('Hello')
})

export default router