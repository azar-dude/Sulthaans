const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Backend is ready to recive data....");
    res.end();
})

// Signup route
app.post('/sulthaans', async (req, res) => {
    const { firstName, lastName, email, phone, guests, date, time, requests } = req.body;

    db.query('INSERT INTO sulthaans (First_Name , Last_Name , email , Phone_Number , Guests , Booking_Date , Booking_Time , request) VALUES (?, ?, ?, ?, ?,?,?,?)',
        [firstName, lastName, email, phone, guests, date, time, requests],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'User registered successfully!' });
        }
    );
});

// Login route
// app.post('/login', (req, res) => {
//     const { email, password } = req.body;

//     db.query('SELECT * FROM users WHERE email=?', [email], async (err, results) => {
//         if (err) return res.status(500).json({ error: err.message });
//         if (results.length === 0) return res.status(401).json({ error: 'User not found' });

//         const user = results[0];

//         // compare password
//         const match = await bcrypt.compare(password, user.password);
//         if (!match) return res.status(401).json({ error: 'Invalid password' });

//         // create token
//         const token = jwt.sign({ id: user.id, email: user.email }, 'secret123', { expiresIn: '1h' });
//         res.json({ message: 'Login successful', token });
//     });
// });

app.listen(4000, () => {
    console.log('Server running at http://localhost:4000');
});
