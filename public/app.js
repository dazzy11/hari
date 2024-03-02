// Function to switch chat to a particular contact
function switchChat(contactName) {
    // Update chat profile info based on the selected contact
    document.getElementById("chat-profile-name").innerText = contactName;

    // Clear existing messages in the chat box (you may want to retain old messages)
    document.getElementById("chat-box").innerHTML = "";

    // You may add logic here to load previous messages for this contact

    // Update the online status (this is just a placeholder)
    document.getElementById("chat-online-status").innerText = "Online";
}

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

// Function to handle key press (Enter key to send message)
function handleKeyPress(event) {
    if (event.keyCode === 13) { // 13 is the keycode for the Enter key
        sendMessage(); // Call sendMessage function when Enter key is pressed
    }
}
