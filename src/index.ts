import "reflect-metadata";

import express from 'express';

import './database/connect';
import router from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.listen(3001, () => console.log('server is running at http://localhost:3001'));