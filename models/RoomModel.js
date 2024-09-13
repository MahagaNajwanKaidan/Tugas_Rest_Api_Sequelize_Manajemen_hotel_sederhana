import { DataTypes } from 'sequelize';
import db from '../utils/connection.js';

const Room = db.define('Room', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    room_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    harga: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    // timestamps: true,
    tableName: 'room',
});

export default Room;

