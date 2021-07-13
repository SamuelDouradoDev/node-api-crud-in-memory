import express, { request, response } from 'express'

const router = express.Router()

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    }, 
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 24
    }
];

router.get('/', (request, response) => {
    console.log(users)
    response.send(users)
})

router.post('/', (request, response) => {
    const user = request.body
    users.push(user)
    response.send(`User with the name ${user.firstName} added to the database!`)
})

export default router