const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname, 'public')));

// Routes for the two pages
app.get('/drums', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'drums.html'));
});

app.get('/piano', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'piano.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});