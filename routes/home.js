const { Router } = require('express');
const home = Router();
const path = require('path');

home.get('/', (req, res)=> {res.send('sending to home')});

module.exports = home;