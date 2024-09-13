import User from "../models/UserModel.js"
import Room from "../models/RoomModel.js"
import Booking from "../models/BookingModel.js"
import Reviews from "../models/ReviewsModel.js"
import Payment from "../models/PaymentModel.js"

const createSeeder = async () => {
    const user = await User.create({
        name: "joni",
        email: "joni.doe@example.com",
        phonenumber: "02191507015",
    });

    const user2 = await User.create({
        name: "kaii",
        email: "kaii.doe@example.com",
        phonenumber: "02191507011",
    });

    const room = await Room.create({
        room_number: "101",
        type: "single",
        harga: "100.000",
    });

    const room2 = await Room.create({
        room_number: "102",
        type: "double",
        harga: "150.000",
    });

    const booking = await Booking.create({
        type: "single",
        checkindate: "2021-3-20",
        checkoutdate: "2021-3-21",
        total: "100.000",
        userId: user.dataValues.id,
        roomId: room.dataValues.id,
    });

    const booking2 = await Booking.create({
        type: "double",
        checkindate: "2021-3-20",
        checkoutdate: "2021-3-21",
        total: "150.000",
        userId: user2.dataValues.id,
        roomId: room2.dataValues.id,
    });

    const payment = await Payment.create({
        price: "100.000",
        paymentMethod: "cash",
        paymentDate: new Date(),
        bookingId: booking2.dataValues.id, // Assign bookingId dengan ID dari Booking
        userId: user2.dataValues.id, // Assign userId
    });

    const payment2 = await Payment.create({
        price: "150.000",
        paymentMethod: "cash",
        paymentDate: new Date(),
        bookingId: booking2.dataValues.id, // Assign bookingId dengan ID dari Booking
        userId: user2.dataValues.id // Assign userId
    });

    const reviews = await Reviews.create({
        rating: 5,
        comment: "INI KAMARnya sangat bagus dan nyaman",
        userId: user.dataValues.id,
        roomId: room.dataValues.id,
    });

    const reviews2 = await Reviews.create({
        rating: 5,
        comment: "Beautiful Room",
        userId: user2.dataValues.id,
        roomId: room2.dataValues.id,
    });

    // Query data termasuk reviews dan payment
    const findUserByBooking = await User.findAll({
        attributes: ["name", "email", "phonenumber"],
        include: [
            {
                model: Booking,
                required: true,
                include: [
                    {
                        model: Payment, // Mengikutsertakan Payment
                        required: true,
                    },
                    {
                        model: Reviews, // Mengikutsertakan Reviews
                        required: true,
                    },
                ],
            },
        ],
    });

    const findRoomByBooking = await Room.findAll({
        attributes: ["room_number", "type", "harga"],
        include: [
            {
                model: Booking,
                required: true,
                include: [
                    {
                        model: Payment,
                        required: true,
                    },
                    {
                        model: Reviews,
                        required: true,
                    },
                ],
            },
        ],
    });

    const findBookingByUser = await Booking.findAll({
        where: {
            userId: user.dataValues.id,
            roomId: room.dataValues.id,
            paymentId: payment.dataValues.id,
        },
        attributes: ["type", "checkindate", "checkoutdate", "userId", "roomId", "paymentId"],
        include: [
            {
                model: User,
                required: true,
            },
            {
                model: Room,
                required: true,
            },
            {
                model: Payment,
                required: true,
            },
            {
                model: Reviews,
                required: true,
            },
        ],
    });
    console.log("Payment created:", payment);
    return { findBookingByUser, findUserByBooking, findRoomByBooking };
};

const { findUserByBooking: user, findBookingByUser: booking, findRoomByBooking: room } = await createSeeder();

user.map((a, i) => {
    console.log(a);
});
