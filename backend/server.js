const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Create MySQL Connection Pool
const db = mysql.createPool(process.env.DATABASE_URL);

// Test Database Connection & Log Success
db.getConnection((err, connection) => {
    if (err) {
        console.error('❌ Database connection failed:', err.message);
    } else {
        console.log(`✅ Connected to MySQL database successfully via URL`);
        
        // Ensure users table exists in the new cloud database
        const createUsersTable = `
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(255) NOT NULL UNIQUE,
                email VARCHAR(255) NOT NULL UNIQUE,
                password_hash VARCHAR(255) NOT NULL,
                role VARCHAR(50) DEFAULT 'customer',
                is_verified TINYINT(1) DEFAULT 0,
                verification_token VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        connection.query(createUsersTable, (err) => {
            if (err) console.error('❌ Error creating users table:', err.message);
        });

        connection.release();
    }
});

// API Route to Get All Products
app.get('/api/products', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(results);
    });
});

// Root Test Route
app.get('/', (req, res) => {
    res.send('Fuego Uganda API is running...');
});

// User Registration Route
app.post('/api/register', (req, res) => {
    const { username, email, password } = req.body;
    
    // Validate request
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Please provide username, email and password' });
    }

    // Insert user into DB
    const sql = 'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)';
    db.query(sql, [username, email, password], (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            // Ignore duplicate entry errors for now
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(409).json({ error: 'Username or email already exists' });
            }
            return res.status(500).json({ error: 'Database error during registration' });
        }
        res.status(201).json({ message: 'Registration successful!' });
    });
});

// User Login Route
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ error: 'Please provide email and password' });
    }

    const sql = 'SELECT * FROM users WHERE email = ? AND password_hash = ?';
    db.query(sql, [email, password], (err, results) => {
        if (err) {
            console.error('Error during login:', err);
            return res.status(500).json({ error: 'Database error during login' });
        }
        
        if (results.length > 0) {
            res.status(200).json({ message: 'Login successful', username: results[0].username });
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});