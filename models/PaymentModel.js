import { DataTypes } from 'sequelize';
import db from '../utils/connection.js';

const Payment = db.define('Payment', {
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  bookingId: { // Foreign key ke Booking
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: { // Foreign key ke User
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Payment;
