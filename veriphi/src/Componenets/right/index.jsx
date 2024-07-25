import React, { useState, useEffect } from 'react';
import styles from "./styles.module.css";
import { HashLoader } from 'react-spinners';
import nouserlogo from '../assets/nouserlogo.png';
import chatgptlogo2 from '../assets/chatgptlogo2.png';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-verilog'; // Import Verilog syntax highlighting
import './styles.module.css'; // Ensure this is your custom CSS file




const RightSection = () => {
    const [message, setMessage] = useState('');
    const [isSent, setIsSent] = useState(true);
    const [allMessages, setAllMessages] = useState([]);

    useEffect(() => {
        Prism.highlightAll();
    }, [allMessages]);

    const sendMessage = async () => {
        if (message.trim() === '') return;

        const newUserMessage = {
            role: "user",
            parts: [{ text: message }]
        };

        setAllMessages([...allMessages, newUserMessage]);
        setIsSent(false);

        try {
            const response = await fetch('http://localhost:5000/generate-verilog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: message }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            const responseMessage = result.generated_text || "No response";
            const newResponseMessage = {
                role: "model",
                parts: [{ text: responseMessage }]
            };

            setAllMessages([...allMessages, newUserMessage, newResponseMessage]);
        } catch (error) {
            console.error("An error occurred while querying the model:", error);
        }

        setMessage('');
        setIsSent(true);
    };

    const extractVerilogCode = (text) => {
        const regex = /```([\s\S]*?)```/g;
        const matches = text.match(regex);
        return matches ? matches.map((code) => code.replace(/```/g, '').trim()) : [];
    };

    return (
        <div className={styles.rightSection}>
            <div className={styles.rightin}>
                {allMessages.length > 0 ? (
                    <div className={styles.messages}>
                        {allMessages.map((msg, index) => (
                            <div key={index} className={styles.message}>
                                <img src={msg.role === 'user' ? nouserlogo : chatgptlogo2} width={50} height={50} alt="" />
                                <div className={styles.details}>
                                    <h2>{msg.role === 'user' ? 'You' : 'CHATGPT Bot'}</h2>
                                    {msg.role === 'model' && msg.parts[0].text.includes('```') ? (
                                        extractVerilogCode(msg.parts[0].text).map((code, idx) => (
                                            <pre key={idx}>
                                                <code className="language-verilog">{code}</code>
                                            </pre>
                                        ))
                                    ) : (
                                        <p>{msg.parts[0].text}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={styles.nochat}>
                        <div className={styles.s1}>
                            <h1>How can I help you today?</h1>
                        </div>
                    </div>
                )}
                <div className={styles.bottomsection}>
                    <div className={styles.messagebar}>
                        <input 
                            type='text' 
                            placeholder='Ask any verilog code...'
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                        {isSent ? (
                            <svg
                                onClick={sendMessage}
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                            </svg>
                        ) : (
                            <HashLoader color="#36d7b7" size={30} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSection;
