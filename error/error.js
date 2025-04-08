class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
  }}
  export const errorMIddleware = (err, req, res, next) =>{
err.message = err.message || "Internal Server Error";
err.statusCode = err.statusCode || 500;
return res.status(err.statusCode).json({
    success: false,
    message: err.message,
    statusCode: err.statusCode,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,  
})
}
