import express from 'express';

const app = express();
const port = 3000;

// Sample endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

app.get('/', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
