import mongoose from "mongoose";
import validator from "validator";


const reservationSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please provide your first name"],
        trim: true,
        minlength: [3, "First name should be at least 3 characters"],
        maxLength: [30, "First name should not exceed 30 characters"],
    },
    lastname: {
        type: String,
        required: [true, "Please provide your last name"],
        trim: true,
        minlength: [3, "Last name should be at least 3 characters"],
        maxLength: [30, "Last name should not exceed 30 characters"],
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        unique: true,
        validate: [validator.isEmail, "Please provide a valid email"],
    },
    phone: {
        type: String,
        required: [true, "Please provide your phone number"],
        validate: [validator.isMobilePhone, "Please provide a valid phone number"],
        minlength: [10, "Phone number should be at least 10 digits"],
        maxLength: [13, "Phone number should not exceed 13 digits"],
    },
    time: {
        type: String,
        required: [true, "Please provide the reservation time"],
    },
    date: {
        type: Date,
        required: [true, "Please provide the reservation date"],
    },
})

export const Reservation = mongoose.model("Reservation", reservationSchema);
