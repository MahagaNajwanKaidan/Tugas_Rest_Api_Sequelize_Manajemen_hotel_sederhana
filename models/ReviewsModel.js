import { DataTypes } from 'sequelize';
import db from '../utils/connection.js';
import User from './UserModel.js';  // Impor model User
import Room from './RoomModel.js';  // Impor model Room

const Reviews = db.define('Reviews', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    userId: {  // Foreign key ke tabel User
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,  // Model yang direferensikan
            key: 'id',    // Primary key dari model User
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    roomId: {  // Foreign key ke tabel Room
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
    // timestamps: false,
    tableName: 'reviews',
});

export default Reviews;




