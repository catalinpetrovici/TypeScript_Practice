import express, { NextFunction, Request, Response } from 'express';
import startServer from './startServer';
import todoRoutes from './routes/todoRoutes';
import { json } from 'body-parser';

const app = express();

app.use(json());
app.use('/todo', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

startServer(app);
