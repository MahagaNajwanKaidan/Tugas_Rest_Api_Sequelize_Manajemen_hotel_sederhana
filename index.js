import express from "express";
import Booking from "./models/BookingModel.js";
import Room from "./models/RoomModel.js";
import User from "./models/UserModel.js";
import Payment from "./models/PaymentModel.js"
import Reviews from "./models/ReviewsModel.js";
import "./models/index.js"
import cors from "cors";
import db from "./utils/connection.js"; // Import konfigurasi database
import user from "./routes/UserRoutes.js"; // Import user routes
import room from "./routes/RoomRoutes.js"; // Import room routes
import booking from "./routes/BookingRoutes.js"; // Import booking routes
import reviews from "./routes/ReviewsRoutes.js";
import payment from "./routes/PaymentRoutes.js";



// dotenv.config();
// const port = process.env.PORT;
const app = express();
app.use(express.json())

await db.sync();
// Routes
app.use('/user',user); // Menghubungkan user routes ke endpoint "/api/users"
app.use('/room',room); // Menghubungkan room routes ke endpoint "/api/rooms"
app.use('/booking',booking); // Menghubungkan booking routes ke endpoint "/api/bookings"
app.use('/reviews', reviews);
app.use('/payment', payment);

// Start server
app.listen(process.env.PORT,()=>{
    console.log('localhost berjalan')
})