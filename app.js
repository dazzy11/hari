// Function to send a message
function sendMessage() {
    // Get the message input element
    var messageInput = document.getElementById("message-input");

    // Get the value of the message input
    var message = messageInput.value;

    // Check if the message is not empty
    if (message.trim() !== "") {
        // Create a new message element
        var messageElement = document.createElement("div");
        messageElement.innerText = message;

        // Add appropriate class based on message type
        messageElement.classList.add("message", "sent"); // Assume sent message

        // Add the message element to the chat box
        var chatBox = document.getElementById("chat-box");
        chatBox.appendChild(messageElement);

        // Clear the message input
        messageInput.value = "";

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
function handleKeyPress(event) {
    if (event.keyCode === 13) { // 13 is the keycode for the Enter key
        sendMessage(); // Call sendMessage function when Enter key is pressed
    }
}