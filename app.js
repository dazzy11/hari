body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0; /* Light gray background color */
}

.chat-container {
    max-width: 500px;
    margin: 50px auto;
    background-color: #fff; /* White background */
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); /* Shadow effect */
    padding: 20px;
}

.chat-box {
    height: 300px;
    overflow-y: auto;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #f9f9f9; /* Light gray background color */
    border-radius: 5px;
}

.message {
    background-color: #cce6ff; /* Light blue background color */
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 5px;
}

.user-message {
    background-color: #d9ead3; /* Light green background color */
}

.message-input-container {
    display: flex;
}

#message-input {
    flex: 1; /* Take remaining space */
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

button {
    padding: 10px 20px;
    background-color: #007bff; /* Blue button color */
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px; /* Add some space between the input field and button */
}

button:hover {
    background-color: #0056b3; /* Darker blue button color on hover */
}
/* Add this CSS to your existing styles.css file */

.header {
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #007bff; /* Blue header background color */
    color: #fff; /* White text color */
}

.profile-info img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
}

.profile-info h2 {
    margin: 0;
}

.online-status {
    display: flex;
    align-items: center;
    margin-left: auto; /* Push the online status to the right */
}

.dot {
    height: 10px;
    width: 10px;
    background-color: #0dbd00; /* Green dot color */
    border-radius: 50%;
    margin-right: 5px;
}

.online-status p {
    margin: 0;
}
