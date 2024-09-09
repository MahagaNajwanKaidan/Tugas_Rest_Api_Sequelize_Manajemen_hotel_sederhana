import express from "express";
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from "../controller/UserController.js";

const router = express.Router();

router.get("/user", getAllUsers);
router.get("/user/find/:id", getUserById);
router.post('/user/create',createUser)
router.put("/user/update/:id", updateUser);
router.delete("/user/delete:id", deleteUser);

export default router;
