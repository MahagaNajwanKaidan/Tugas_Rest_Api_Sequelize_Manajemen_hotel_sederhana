import express from 'express';
import { createPayment, getPayments, getPaymentById, updatePayment, deletePayment } from "../controller/PaymentController.js"

const router = express.Router();

router.post('/', createPayment); // Create a new payment
router.get('/', getPayments);    // Get all payments
router.get('/:id', getPaymentById); // Get a payment by ID
router.put('/:id', updatePayment); // Update a payment by ID
router.delete('/:id', deletePayment); // Delete a payment by ID

export default router;
