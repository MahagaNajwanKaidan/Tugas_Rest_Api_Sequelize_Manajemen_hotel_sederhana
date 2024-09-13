import express from 'express';
import { createReviews, getReviews, getReviewsById, updateReviews, deleteReviews } from "../controller/ReviewsController.js";

const Router = express.Router();

Router.get("/", getReviews);    // Get all reviews
Router.get("/find/:id", getReviewsById); // Get a review by ID
Router.post("/create", createReviews); // Create a new review
Router.put("/update/:id", updateReviews); // Update a review by ID
Router.delete("/delete/:id", deleteReviews); // Delete a review by ID

export default Router;
