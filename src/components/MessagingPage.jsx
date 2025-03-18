import React, { useState } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import "./Messaging.css";

const MessagingPage = () => {
  const [messages, setMessages] = useState([
    { sender: "Filmmaker", content: "Hey, I love your script!" },
    { sender: "Screenwriter", content: "Thanks! Let’s collaborate." },
  ]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { sender: "Screenwriter", content: message }]);
  };

  return (
    <div className="messaging-page">
      <h1>Messages</h1>
      <MessageList messages={messages} />
      <MessageInput onSend={handleSendMessage} />
    </div>
  );
};

export default MessagingPage;
