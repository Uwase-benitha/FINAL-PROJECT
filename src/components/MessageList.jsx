import React from "react";
import "./Messaging.css";

const Message = ({ sender, content }) => {
  return (
    <div className="message">
      <strong>{sender}:</strong>
      <p>{content}</p>
    </div>
  );
};

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <Message key={index} sender={msg.sender} content={msg.content} />
      ))}
    </div>
  );
};

export default MessageList;
