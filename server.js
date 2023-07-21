import express, { json, urlencoded } from 'express';
import fileupload from 'express-fileupload';
import cors from 'cors';
import { Server } from 'http';
import { rateLimiter } from './middleware/rate-limiter.js';

const PORT = process.env.EXPRESS_PORT || 3000;
const app = express();

app.use(cors('*'));

app.use(fileupload());
app.use(json({ limit: '50mb' }));
app.use(urlencoded({ extended: false, limit: '50mb' }));
app.use(rateLimiter);

app.get('/ping', async (req, res) => {
  res.status(200).json({
    success: true,
    message: 'pong',
  });
});

const httpServer = new Server(app);
httpServer.listen(PORT, function () {
  console.log(`[setup] server started on port ${PORT}`);
});
