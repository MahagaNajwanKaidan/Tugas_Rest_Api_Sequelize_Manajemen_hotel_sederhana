import { DataTypes } from 'sequelize';
import db from '../utils/connection.js';
// import User from './UserModel.js';
// import Room from './RoomModel.js';

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
    userId: { // Foreign key to User
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    roomId: { // Foreign key to Room
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false,
    tableName: 'reviews',
});

export default Reviews;



