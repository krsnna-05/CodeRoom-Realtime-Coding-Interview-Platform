import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const port = 3000;

const server = http.createServer(app);

const io = new Server(server);

export { server, app };
