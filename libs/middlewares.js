const bodyParser = require('body-parser')
const cors = require('cors');
const express = require('express');

module.exports = app => {
    console.log(app.config.auth);
    app.use(bodyParser.json());
    app.use(express.json())
    app.use(cors());
    app.use(app.auth.initialize())
}