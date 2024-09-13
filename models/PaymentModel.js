import { DataTypes } from 'sequelize';
import db from '../utils/connection.js';
import Booking from './BookingModel.js';  // Impor model Booking
import User from './UserModel.js';        // Impor model User

const Payment = db.define('Payment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
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
  bookingId: { // Foreign key ke tabel Booking
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Booking,  // Model yang direferensikan
      key: 'id',       // Primary key dari model Booking
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  userId: { // Foreign key ke tabel User
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,  // Model yang direferensikan
      key: 'id',    // Primary key dari model User
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
}, {
  // timestamps: false,
  tableName: 'payment',
});

export default Payment;
