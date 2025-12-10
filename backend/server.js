const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration - Allow your GitHub Pages domain
const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5000',
    'https://cs571-f25.github.io',  // Replace with your GitHub username/org
];

app.use(cors({
    origin: function(origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true
}));

app.use(express.json());

// MongoDB Connection (removed deprecated options)
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/messages_db';
mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ MongoDB connected successfully'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// Message Schema
const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    message: {
        type: String,
        required: true,
        maxlength: 1000
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.model('Message', messageSchema);

// Health check endpoint
app.get('/', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});

app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK',
        database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
        timestamp: new Date().toISOString()
    });
});

// GET all messages
app.get('/messages', async (req, res) => {
    try {
        const messages = await Message.find().sort({ timestamp: -1 });
        res.json(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
});

// POST new message
app.post('/messages', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validation
        if (!name || !message) {
            return res.status(400).json({ error: 'Name and message are required' });
        }

        if (message.length > 1000) {
            return res.status(400).json({ error: 'Message is too long (max 1000 characters)' });
        }

        const newMessage = new Message({
            name: name.trim(),
            email: email ? email.trim() : undefined,
            message: message.trim()
        });

        await newMessage.save();
        res.status(201).json(newMessage);
    } catch (error) {
        console.error('Error creating message:', error);
        res.status(400).json({ error: 'Failed to create message' });
    }
});

// DELETE message by ID (optional - for admin purposes)
app.delete('/messages/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMessage = await Message.findByIdAndDelete(id);
        
        if (!deletedMessage) {
            return res.status(404).json({ error: 'Message not found' });
        }
        
        res.json({ message: 'Message deleted successfully', deletedMessage });
    } catch (error) {
        console.error('Error deleting message:', error);
        res.status(400).json({ error: 'Failed to delete message' });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
});