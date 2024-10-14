// src/components/chatbot/Chatbot.jsx
import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: input, sender: 'user' },
                { text: 'This is a response from the bot!', sender: 'bot' },
            ]);
            setInput('');
        }
    };

    return (
        <div className="chatbot-container">
            <div className="chat-window">
                <div className="messages">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`message ${msg.sender}`}
                        >
                            {msg.text}
                        </div>
                    ))}
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <button onClick={handleSend}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
