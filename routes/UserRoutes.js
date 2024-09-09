import express from "express";
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from "../controller/UserController.js";

const Router = express.Router();

Router.get('/',getAllUsers)
Router.get('/find/:id',getUserById)
Router.post('/create',createUser)
Router.put('/update/:id',updateUser)
Router.delete('/delete/:id',deleteUser)

export default Router;
