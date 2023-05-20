import express from 'express';
import routes from './src/shared/http/routes';
import { errorMiddleware } from './src/shared/http/middlewares/errorMiddleware';

const app = express();
app.use(express.json());
app.use(routes);
app.use(errorMiddleware);

app.listen(3000, () => console.log('App running at port 3000'));