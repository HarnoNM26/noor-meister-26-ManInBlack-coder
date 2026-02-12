import express, { Request, Response, NextFunction } from 'express';
const app = express();

import healthRouter from '../src/routes/health'
import readings from '../src/routes/DataImport'
import eleringPrices from '../src/routes/elering'
import syncPrices from '../src/routes/elering'

const port = process.env.PORT || '3000'

interface AppError extends Error {
    statusCode?: number;
    isOperational?: boolean;
}


app.use(express.json());

app.get('/', (req: Request ,res: Response) => {
    res.send('hello');
});

app.use('/api/readings', readings)
app.use('/api/health', healthRouter)
app.use('/api/nps', eleringPrices)
app.use('api/sync', syncPrices)

const globalErrorHandler = ( 
    err: AppError,
    req: Request,
    res: Response,
    next: NextFunction,
): void => {
    console.error('Error caught: ', err.message);
    console.error('Stack trace', err.stack);

    const statusCode = err.statusCode || 500;
    const message = err.isOperational ? err.message : "GLOBAL MESSAGE: Something went wrong!"

    res.status(statusCode).json({
        success: false,
        message,
        ...(process.env.NODE_ENV === "developement" && {stack: err.stack})
    });
};

app.use(globalErrorHandler)

app.listen(port, () => {
    console.log('app is running on 3000')
})