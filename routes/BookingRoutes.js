import express from "express";
import { getAllBookings, getBookingById, createBooking, updateBooking, deleteBooking } from "../controller/BookingController.js";

const router = express.Router();

router.get("/booking", getAllBookings);
router.get("/booking/find:id", getBookingById);
router.post("/booking/create", createBooking);
router.put("/booking/update:id", updateBooking);
router.delete("/booking/delete:id", deleteBooking);

export default router;
