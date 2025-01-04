const { error } = require('console');
const express = require('express');
const Router = express();
const path = require('path');
const home = require('./routes/home');

Router.use('/', home);

Router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages', 'index.html'), (err) => {
        if (err) throw err;
    });
});

const PORT = process.env.PORT || 3000;

Router.listen(PORT, () => {
    console.log(`port running on port ${PORT}`);
});