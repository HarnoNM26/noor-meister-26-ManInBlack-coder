import express, {  Response} from 'express' 
import healthRouter from '../src/routes/health'

const app = express();
const port = process.env.PORT || '3000'
app.use(express.json());

app.get('/', (res: Response) => {
    res.send('hello');
});
app.use('/api/health', healthRouter)

app.listen(port, () => {
    console.log('app is running on 3000')
} )