import express from 'express'

import { getAllUsers, deleteUser } from '../controllers/users'
import { isAuthentication, isOwner } from '../middlewares'

export default (router: express.Router) => {
  router.get('/users', isAuthentication, getAllUsers)
  router.delete('/delete/:id', isAuthentication, isOwner, deleteUser,)
}