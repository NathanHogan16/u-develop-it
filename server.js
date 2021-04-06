const mysql = require ('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// Connect to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //your mysql username
        user: 'root',
        //your mysql password
        password: 'Squarepants1!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);


app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

//Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});