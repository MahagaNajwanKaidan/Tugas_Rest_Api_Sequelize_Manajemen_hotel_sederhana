import express from 'express';
import { createPayment, getPayments, getPaymentById, updatePayment, deletePayment } from "../controller/PaymentController.js"

const Router = express.Router();

Router.get("/", getPayments);    // Get all payments
Router.get("/find/:id", getPaymentById); // Get a payment by ID
Router.post("/create/", createPayment); // Create a new payment
Router.put("/update/:id", updatePayment); // Update a payment by ID
Router.delete("/delete/:id", deletePayment); // Delete a payment by ID

export default Router;
