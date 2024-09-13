import db from '../utils/connection.js'; // Import konfigurasi database
import User from './UserModel.js'; // Import model User
import Booking from './BookingModel.js'; // Import model Booking
import Room from './RoomModel.js'; // Import model Room
import Reviews from './ReviewsModel.js'; // Import model Reviews
import Payment from './PaymentModel.js'; // Import model Payment
import "./associations.js"; 

// Sinkronisasi database
// await db.sync({ force: true }); // Hati-hati dengan opsi force: true, ini akan menghapus semua data
