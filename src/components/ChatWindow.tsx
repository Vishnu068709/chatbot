import React from 'react';
import './ChatStyles.css';

const ChatWindow = () => {
    const [messages, setMessages] = React.useState([]);

    const addMessage = (message) => {
        setMessages([...messages, message]);
    };

    return (
        <div className="chat-window">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        {msg}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatWindow;