const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db');
const Chat = require('./models/Chat');

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Use CORS middleware
app.use(cors());
app.use(bodyParser.json());                              

app.post('/generate-verilog', async (req, res) => {
    const prompt = req.body.prompt;
    try {
        const response = await axios.post(
            'https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B-Instruct',
            { inputs: prompt },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        const generatedText = response.data[0].generated_text;

        // Save chat history to MongoDB
        const chat = new Chat({
            prompt,
            generated_text: generatedText
        });

        await chat.save();

        res.json({ generated_text: generatedText });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating Verilog code');
    }
});

app.get('/chat-history', async (req, res) => {
    try {
        const chats = await Chat.find().sort({ timestamp: -1 });
        res.json(chats);
    } catch (error) {
        console.error('Error fetching chat history:', error);
        res.status(500).send('Error fetching chat history');
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
