import Payment from "../models/PaymentModel.js"


// Get all payments
export const getPayments = async (req, res) => {
    try {
        const payments = await Payment.findAll();
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Get a payment by ID
export const getPaymentById = async (req, res) => {
    try {
        const { id } = req.params;
        const payment = await Payment.findByPk(id);
        if (payment) {
            res.status(200).json(payment);
        } else {
            res.status(404).json({ message: 'Payment not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new payment
export const createPayment = async (req, res) => {
    try {
        const { amount, paymentMethod, paymentDate, userId } = req.body;
        const payment = await Payment.create({ amount, paymentMethod, paymentDate, userId });
        res.status(201).json(payment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a payment by ID
export const updatePayment = async (req, res) => {
    try {
        const { id } = req.params;
        const { amount, paymentMethod, paymentDate, userId } = req.body;
        const payment = await Payment.findByPk(id);
        if (payment) {
            await payment.update({ amount, paymentMethod, paymentDate, userId });
            res.status(200).json(payment);
        } else {
            res.status(404).json({ message: 'Payment not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a payment by ID
export const deletePayment = async (req, res) => {
    try {
        const { id } = req.params;
        const payment = await Payment.findByPk(id);
        if (payment) {
            await payment.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Payment not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
