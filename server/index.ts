// const { Server } = require("socket.io");
// const {createServer} = require("http");
// import { createServer } from "http";
import {Server} from 'socket.io';

// const httpServer = createServer();
const io = new Server({
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on('sendVal', (time, name, message)=>{ 
    socket.broadcast.emit('receiveVal', time, name, message);
  })
});

io.listen(3000);