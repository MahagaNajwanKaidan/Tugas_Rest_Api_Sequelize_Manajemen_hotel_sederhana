import { DataTypes } from 'sequelize';
import db from '../utils/connection.js';
import User from './UserModel.js'; // Impor model User
import Room from './RoomModel.js'; // Impor model Room

const Booking = db.define('Booking', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
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
    roomId: { // Foreign key ke tabel Room
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Room,  // Model yang direferensikan
            key: 'id',    // Primary key dari model Room
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
}, {
    tableName: 'booking',
});

export default Booking;
  

