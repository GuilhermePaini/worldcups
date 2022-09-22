const { Sequelize } = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize(
    process.env.DATABASE, 
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        dialect: process.env.DATABASE_DRIVER
    }   
);

async function test_conn() {
    try {
        await sequelize.authenticate();
        console.log("Connection established!");
    } catch (err) {
        console.log("Unable to connect to database: " + err.message);
    }
}

test_conn();

module.exports = sequelize;