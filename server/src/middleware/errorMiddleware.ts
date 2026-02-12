import  { Request, Response, NextFunction } from 'express';


interface AppError extends Error {
    statusCode?: number;
    isOperational?: boolean;
}


const globalErrorHandler = ( 
    err: AppError,
    req: Request,
    res: Response,
    next: NextFunction,
): void => {
    console.error('Error caught: ', err.message);
    console.error('Stack trace', err.stack);

    const statusCode = err.statusCode || 500;
    const message = err.isOperational ? err.message : "Something went wrong!"

    res.status(statusCode).json({
        success: false,
        message,
        ...(process.env.NODE_ENV === "developement" && {stack: err.stack})
    });
};

app.use(globalErrorHandler)