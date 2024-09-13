import Reviews from "../models/ReviewsModel.js";

// Get all reviews
export const getReviews = async (req, res) => {
    try {
        const reviews = await Reviews.findAll();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error getAll reviews', error: error.message });
    }
};

// Get a review by ID
export const getReviewsById = async (req, res) => {
    try {
        const { id } = req.params;
        const review = await Reviews.findByPk(id);
        if (review) {
            res.status(200).json(review);
        } else {
            res.status(404).json({ message: 'Reviews tidak ada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error reviews menggunakan id', error: error.message });
    }
};

// Create a new review
export const createReviews = async (req, res) => {
    try {
        const { rating, comment, roomId, userId } = req.body;
        const review = await Reviews.create({ rating, comment, roomId, userId });
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ message: 'Error create reviews', error: error.message });
    }
};

// Update a review by ID
export const updateReviews = async (req, res) => {
    try {
        const { id } = req.params;
        const { rating, comment, roomId, userId } = req.body;
        const [updated] = await Reviews.update({ rating, comment, roomId, userId }, {
            where: { id }
        });
        if (updated) {
            const updatedReview = await Reviews.findByPk(id);
            res.status(200).json(updatedReview);
        } else {
            res.status(404).json({ message: 'Reviews tidak ada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error update reviews', error: error.message });
    }
};

// Delete a review by ID
export const deleteReviews = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Reviews.destroy({
            where: { id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Reviews tidak ada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error delete review', error: error.message });
    }
};
