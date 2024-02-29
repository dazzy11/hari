function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var messageText = messageInput.value;

    if (messageText.trim() !== "") {
        var chatBox = document.getElementById("chat-box");
        var messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.textContent = messageText;
        chatBox.appendChild(messageElement);

        // Clear the input field after sending the message
        messageInput.value = "";

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

