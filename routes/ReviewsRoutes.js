import express from 'express';
import { createReviews, getReviews, getReviewsById, updateReviews, deleteReviews } from "../controller/ReviewsController.js";

const router = express.Router();

router.post('/', createReviews); // Create a new review
router.get('/', getReviews);    // Get all reviews
router.get('/:id', getReviewsById); // Get a review by ID
router.put('/:id', updateReviews); // Update a review by ID
router.delete('/:id', deleteReviews); // Delete a review by ID

export default router;
