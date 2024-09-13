import express from "express";
import { getAllBookings, getBookingById, createBooking, updateBooking, deleteBooking } from "../controller/BookingController.js";

const Router = express.Router();

Router.get("/", getAllBookings);
Router.get("/find/:id", getBookingById);
Router.post("/create", createBooking);
Router.put("/update:id", updateBooking);
Router.delete("/delete:id", deleteBooking);

export default Router;
