import { ErrorHandler } from "../error/error.js";
import {Reservation} from "../models/resrvationSchame.js";


export const sendReservation = async (req, res, next) => {
    const { firstname, lastname, email, phone, time, date } = req.body;
    if (!firstname || !lastname || !email || !phone || !time || !date) {
        return next(new ErrorHandler("Please provide all fields", 400));
    }
    try {
         await Reservation.create({
            firstname,
            lastname,
            email,
            phone,
            time,
            date,
        });
        return res.status(201).json({
            success: true,
            message: "Reservation created successfully",
            
        });
    } catch (error) {
        if (error.name === "ValidationError") {
           const validatorErrors = Object.values(error.errors).map((err)=> err.message)
           return next(new ErrorHandler(validatorErrors.join(", "), 400));
        }
    }
}