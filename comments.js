// Create a web server
// 1. Create a web server
// 2. Create a route for /comments
// 3. Send back some static comments data
// 4. Test your work!

// 1. Create a web server
const express = require('express');
const app = express();

// 2. Create a route for /comments
app.get('/comments', (req, res) => {
    res.send('Here are some comments');
});

// 3. Send back some static comments data
app.get('/comments', (req, res) => {
    res.send([{
        name: 'Andrew',
        comment: 'This is my comment'
    }, {
        name: 'Jack',
        comment: 'This is my comment'
    }]);
});

// 4. Test your work!
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});