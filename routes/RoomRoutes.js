import express from "express";
import { getAllRooms, getRoomById, createRoom, updateRoom, deleteRoom } from "../controller/RoomController.js";

const router = express.Router();

router.get("/room", getAllRooms);
router.get("/room/find:id", getRoomById);
router.post("/room/create", createRoom);
router.put("/room/update:id", updateRoom);
router.delete("/room/delete:id", deleteRoom);

export default router;
