import express from 'express';
import routes from './routes/index';

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log('App running at port 3000'));