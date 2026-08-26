const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Create Postgres connection pool (pg)
if (process.env.DATABASE_URL && process.env.DATABASE_URL.startsWith('mysql')) {
    console.warn('⚠️  DATABASE_URL appears to be a MySQL URL. Replace it with a Postgres URL for Supabase (postgres://...).');
}

const db = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL && process.env.DATABASE_URL.startsWith('postgres') ? { rejectUnauthorized: false } : false,
});

// Test Database Connection & Log Success
db.connect((err, client, release) => {
    if (err) {
        console.error('❌ Database connection failed:', err.message);
    } else {
        console.log('✅ Connected to Postgres database successfully via URL');

        // Ensure users table exists in the cloud database (Postgres syntax)
        const createUsersTable = `
            CREATE TABLE IF NOT EXISTS app_users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(255) NOT NULL UNIQUE,
                email VARCHAR(255) NOT NULL UNIQUE,
                password_hash VARCHAR(255) NOT NULL,
                role VARCHAR(50) DEFAULT 'customer',
                is_verified BOOLEAN DEFAULT FALSE,
                verification_token VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;
        client.query(createUsersTable, (err) => {
            if (err) console.error('❌ Error creating users table:', err.message);
        });

        release();
    }
});

// API Route to Get All Products
app.get('/api/products', (req, res) => {
    db.query('SELECT * FROM products', (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(result.rows);
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
    const sql = 'INSERT INTO app_users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id';
    db.query(sql, [username, email, password], (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            // Postgres unique violation error code
            if (err.code === '23505') {
                return res.status(409).json({ error: 'Username or email already exists' });
            }
            return res.status(500).json({ error: 'Database error during registration', details: err.message });
        }
        res.status(201).json({ message: 'Registration successful!', id: result.rows[0].id });
    });
});

// User Login Route
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Please provide email and password' });
    }

    const sql = 'SELECT * FROM app_users WHERE email = $1 AND password_hash = $2';
    db.query(sql, [email, password], (err, result) => {
        if (err) {
            console.error('Error during login:', err);
            return res.status(500).json({ error: 'Database error during login' });
        }

        if (result.rows.length > 0) {
            res.status(200).json({ message: 'Login successful', username: result.rows[0].username });
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});