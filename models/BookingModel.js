// BookingModel.js
import { DataTypes } from 'sequelize';
import db from '../utils/connection.js';

const Booking = db.define('Booking', {
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    checkindate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    checkoutdate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userId: { // Foreign key to User
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    roomId: { // Foreign key to Room
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

export default Booking;

