import express, { request, response } from 'express'
import { createUser, getUsers, getUser, deleteUser, updateUser} from '../controllers/usersController.js'

const router = express.Router()

router.get('/', getUsers)

router.post('/', createUser)

router.get('/:id', getUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router