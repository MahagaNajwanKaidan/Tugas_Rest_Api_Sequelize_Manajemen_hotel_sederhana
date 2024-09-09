import express from "express";
import { getAllBookings, getBookingById, createBooking, updateBooking, deleteBooking } from "../controller/BookingController.js";

const router = express.Router();

router.get("/", getAllBookings);
router.get("/find:id", getBookingById);
router.post("/create", createBooking);
router.put("/update:id", updateBooking);
router.delete("/delete:id", deleteBooking);

export default router;
