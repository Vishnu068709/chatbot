import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import './styles/ChatStyles.css';

const App: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);

    const addMessage = (message: string) => {
        setMessages([...messages, message]);
    };

    return (
        <div className="chat-container">
            <ChatWindow messages={messages} />
            <MessageInput onSendMessage={addMessage} />
        </div>
    );
};

export default App;