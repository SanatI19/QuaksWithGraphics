const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 5500 });

server.on('connection', (socket) => {
  console.log('A player connected.');

  // Listen for messages from the client
  socket.on('message', (message) => {
    console.log('Received:', message);

    // Broadcast the message to all connected clients
    server.clients.forEach((client) => {
      if (client !== socket && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // Handle client disconnection
  socket.on('close', () => {
    console.log('A player disconnected.');
  });
});

console.log('WebSocket server is running on ws://localhost:8080');


// create socket
const socket = new WebSocket('ws://good-muskox-vastly.ngrok-free.app/online.js');

// Connection opened
socket.addEventListener('open', (event) => {
  console.log('Connected to the WebSocket server.');

  // Send a message to the server
  socket.send(JSON.stringify({ type: 'playerJoined', data: 'Hello, Server!' }));
});

// Listen for messages from the server
socket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);
  console.log('Message from server:', message);

  // Handle the received message (update game state, etc.)
});

// Connection closed
socket.addEventListener('close', (event) => {
  console.log('Disconnected from the WebSocket server.');
});
