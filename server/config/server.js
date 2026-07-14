const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/ecommerce')
    .then(() => {
        console.log('✅ MongoDB Connected Successfully!');
        console.log('📊 Database: ecommerce');
        console.log('🔗 Host: localhost:27017');
    })
    .catch((err) => {
        console.error('❌ MongoDB Connection Error:', err.message);
    });

// Middleware
app.use(express.json());

// Health API
app.get('/api/health', (req, res) => {
    res.json({
        message: 'E-commerce API is running',
        status: '✅ Healthy',
        timestamp: new Date().toISOString()
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`\n🚀 Server running on port ${PORT}`);
    console.log(`📡 Health API: http://localhost:${PORT}/api/health`);
    console.log(`✨ E-commerce API is ready!\n`);
});