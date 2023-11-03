const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        contact: {
            type: Number,
            required: true,
        },
        moviename: {
            type: String,
            required: true,
        },
        tickets: {
            type: Number,
            require: true,
        },
    },
    { timestamps: true }
);

const Booking = mongoose.model("booking-datas", BookingSchema);

module.exports = Booking;