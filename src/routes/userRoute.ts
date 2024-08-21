import express from 'express';
import { createUser, deleteUser, getAllUsers, getAUser, updateUser } from '../contollers/userController';

const router = express.Router();

router.post('/create', createUser);
router.get('/users', getAllUsers);
router.get('/user/:id', getAUser);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;