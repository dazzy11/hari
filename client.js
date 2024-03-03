
// Establish a connection to the server
const socket = io();

// Event handler for sending messages
function sendMessage(message) {
  socket.emit('message', message);
}

// Event handler for receiving messages
socket.on('message', function(message) {
  console.log('Received message:', message);
  // Update the chat interface with the new message
  // (e.g., append it to the chat window)
});
