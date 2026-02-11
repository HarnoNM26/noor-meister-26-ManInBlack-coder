import express, { Request, Response} from 'express' 
const app = express();

import healthRouter from '../src/routes/health'
import readings from '../src/routes/DataImport'
import eleringPrices from '../src/routes/elering'

const port = process.env.PORT || '3000'

app.use(express.json());


app.get('/', (req: Request ,res: Response) => {
    res.send('hello');
});

app.use('/api/readings', readings)
app.use('/api/health', healthRouter)
app.use('/api/nps', eleringPrices)



app.listen(port, () => {
    console.log('app is running on 3000')
} )