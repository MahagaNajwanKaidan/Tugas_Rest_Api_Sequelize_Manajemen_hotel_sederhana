import express from "express";
import { getAllRooms, getRoomById, createRoom, updateRoom, deleteRoom } from "../controller/RoomController.js";

const Router = express.Router();

Router.get("/", getAllRooms);
Router.get("/find/:id", getRoomById);
Router.post("/create", createRoom);
Router.put("/update/:id", updateRoom);
Router.delete("/delete/:id", deleteRoom);

export default Router;
