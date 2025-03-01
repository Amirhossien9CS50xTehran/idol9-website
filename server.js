const express = require('express');
const app = express();
const PORT = 5000;

// Define a route for "/"
app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});

// Define a route for "/pricing"
app.get('/pricing', (req, res) => {
    res.json({
        plan1: "Basic - $10/month",
        plan2: "Pro - $20/month",
        plan3: "Enterprise - $50/month"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
