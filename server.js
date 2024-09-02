const express = require('express');
const app = express();
const port = 3000;

let rooms = [
    { location: 'Nagpur', price: 8000, size: 500, type: 'Private Room' },
    { location: 'Pune', price: 10000, size: 700, type: 'Shared Room' }
];

app.use(express.static('public')); // Serve static files from the 'public' folder
app.use(express.json());

app.get('/rooms', (req, res) => {
    res.json(rooms);
});

app.post('/rooms', (req, res) => {
    const room = req.body;
    rooms.push(room);
    res.json({ message: 'Room added successfully!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
