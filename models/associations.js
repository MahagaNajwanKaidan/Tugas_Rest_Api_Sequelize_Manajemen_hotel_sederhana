import User from './UserModel.js';
import Booking from './BookingModel.js';
import Payment from './PaymentModel.js';
import Reviews from './ReviewsModel.js';
import Room from './RoomModel.js';

// User associations
User.hasMany(Booking, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
User.hasMany(Payment, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
User.hasMany(Reviews, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// Booking associations
Booking.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Booking.belongsTo(Room, { foreignKey: 'roomId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Booking.hasOne(Payment, { foreignKey: 'bookingId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// Payment associations
Payment.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Payment.belongsTo(Booking, { foreignKey: 'bookingId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// Reviews associations
Reviews.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Reviews.belongsTo(Room, { foreignKey: 'roomId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// Room associations
Room.hasOne(Booking, { foreignKey: 'roomId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Room.hasOne(Reviews, { foreignKey: 'roomId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

