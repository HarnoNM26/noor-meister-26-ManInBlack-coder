import express, { Request, Response} from 'express' 
import healthRouter from '../src/routes/health'

const app = express();
app.use(express.json());

const port = process.env.PORT || '3000'

app.get('/', (req: Request ,res: Response) => {
    res.send('hello');
});
app.use('/api/health', healthRouter)

app.listen(port, () => {
    console.log('app is running on 3000')
} )