import express, { request, response } from 'express'
import { v4 as uuidv4} from 'uuid'

const router = express.Router()

const users = [
    {
        id: uuidv4(),
        firstName: "John",
        lastName: "Doe",
        age: 25
    }, 
    {
        id: uuidv4(),
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
    users.push({ ...user, id: uuidv4() })
    response.send(`User with the name ${user.firstName} added to the database!`)
})

router.get('/:id', (request, response) => {
    console.log(`User id is ${request.params.id}`)
    const user = users.find(u => u.id === request.params.id)
    response.send(user)
})

export default router