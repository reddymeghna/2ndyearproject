import React, { useEffect, useState, useRef } from 'react';
import styles from "./styles.module.css";
import Screenshot from "../assets/Screenshot.png";
import nouserlogo from "../assets/nouserlogo.png";

const LeftSection = () => {
    const [chatHistory, setChatHistory] = useState([]);
    const chatHistoryRef = useRef(null);

    useEffect(() => {
        const fetchChatHistory = async () => {
            try {
                const response = await fetch('http://localhost:5000/chat-history');
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                setChatHistory(data);
            } catch (error) {
                console.error("Error fetching chat history:", error);
            }
        };

        fetchChatHistory();
    }, []);

    useEffect(() => {
        // Scroll to the top of the chat history container
        if (chatHistoryRef.current) {
            chatHistoryRef.current.scrollTo(0, 0);
        }
    }, [chatHistory]);

    return (
        <div className={styles.leftSection}>
            <div className={styles.newChat}>
                <div>
                    <img src={Screenshot} alt="ChatGPT Logo" width={50} height={50} />
                    <p className={styles.text1}>VERILOG GPT</p>
                </div>
            </div>
            <div className={styles.chatHistory} ref={chatHistoryRef}>
                {chatHistory.map((chat, index) => (
                    <div key={index} className={styles.chatItem}>
                        <p className={styles.chatPrompt}>{chat.prompt}</p>
                        <p className={styles.chatResponse}>{chat.generated_text}</p>
                        <p className={styles.chatTimestamp}>{new Date(chat.timestamp).toLocaleString()}</p>
                    </div>
                ))}
            </div>
            <div className={styles.userInfo}>
                <div className={styles.newChat}>
                    <img src={nouserlogo} alt="ChatGPT" width={50} height={50}/>
                    <p className={styles.text2}>meghnareddy@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default LeftSection;
