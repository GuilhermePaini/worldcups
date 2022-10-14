const express = require('express');
const consign = require('consign');

module.exports = () => {
    const app = express()
    
    consign()
    .include('config/auth.js')
    .then('libs/middlewares.js')
    .then('app/controllers')
    .into(app);
    
    return app;
}
