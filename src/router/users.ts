import express from 'express'

import { getAllUsers, deleteUser, updateUser } from '../controllers/users'
import { isAuthentication, isOwner } from '../middlewares'

export default (router: express.Router) => {
  router.get('/users', isAuthentication, getAllUsers)
  router.delete('/users/:id', isAuthentication, isOwner, deleteUser)
  router.patch('/users/:id', isAuthentication, isOwner, updateUser)
}