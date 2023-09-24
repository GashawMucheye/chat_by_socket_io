const express = require('express');
const colors = require('colors');
const app = express();
const { createServer } = require('http');
const { Server } = require('socket.io');

const PORT = process.env.PORT || 8080;

const cors = require('cors');
const { Socket } = require('dgram');
const { log } = require('console');
app.use(cors());

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log(`User Connected:${socket.id}`);
  socket.on('send_message', (data) => {
    console.log(data);
  });
});

server.listen(PORT, () =>
  console.log(`server running on port:${PORT}`.yellow.underline.bold)
);
