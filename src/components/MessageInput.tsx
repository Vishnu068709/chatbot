import React, { useState } from 'react';

const MessageInput: React.FC<{ onSendMessage: (message: string) => void }> = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="message-input">
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="message-input-field"
            />
            <button type="submit" className="message-input-button">Send</button>
        </form>
    );
};

export default MessageInput;