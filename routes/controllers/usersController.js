import { v4 as uuidv4} from 'uuid'

let users = [
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

export const getUsers  = (request, response) => {
    console.log(users)
    response.send(users)
}

export const createUser = (request, response) => {
    const user = request.body
    users.push({ ...user, id: uuidv4() })
    response.send(`User with the name ${user.firstName} added to the database!`)
}

export const getUser = (request, response) => {
    console.log(`User id is ${request.params.id}`)
    const user = users.find(u => u.id === request.params.id)
    response.send(user)
}

export const deleteUser = (request, response) => {
    console.log(`User id: ${request.params.id} was deleted`)
    users = users.filter(u => u.id !== request.params.id)
    response.send(`User id: ${request.params.id} was deleted`)
}

export const updateUser = (request, response) => {
    console.log(`User id: ${request.params.id} was updated`)
    const user = users.find(u => u.id === request.params.id)

    // Update all the key, values that was sent in body. 
    if(user) {
        user.firstName = request.body.firstName ? request.body.firstName : user.firstName
        user.lastName = request.body.lastName ? request.body.lastName : user.lastName
        user.age = request.body.age ? request.body.age : user.age;
    }
    response.send(`User id: ${request.params.id} was updated`)
}