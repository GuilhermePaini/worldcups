const conn = require.main.require('./config/database.js');
const { DataTypes } = require('sequelize');

const User = conn.define('Users', {
    id:         { type: DataTypes.INTEGER,      allowNull: false, primaryKey: true },
    username:   { type: DataTypes.STRING(255),  allowNull: false, unique: true },
    email:      { type: DataTypes.STRING(255),  allowNull: false, unique: true },
    password:   { type: DataTypes.STRING(255),  allowNull: false },
}, {
    createdAt: true,
    updatedAt: true,
});

module.exports = User;

