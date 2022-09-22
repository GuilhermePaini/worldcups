const conn = require.main.require('./config/database.js');
const { DataTypes } = require('sequelize');

const Match = conn.define('WorldCupMatches', {
    MatchID:            { type: DataTypes.INTEGER,    allowNull: false, primaryKey: true },
    Year_Cup:           { type: DataTypes.INTEGER,    allowNull: false, /*references: {model: WorldCup, key: 'year' }*/},
    Datetime:           { type: DataTypes.STRING(21), allowNull: true },
    Stage:              { type: DataTypes.STRING(24), allowNull: true },
    Stadium:            { type: DataTypes.STRING(50), allowNull: true },
    City:               { type: DataTypes.STRING(34), allowNull: true },
    Home_Team_Name:     { type: DataTypes.STRING(26), allowNull: true },
    Away_Team_Goals:    { type: DataTypes.INTEGER,    allowNull: true },
    Away_Team_Name:     { type: DataTypes.STRING(26), allowNull: true },
    Win_conditions:     { type: DataTypes.STRING(45), allowNull: true },
    Referee:            { type: DataTypes.STRING(36), allowNull: true },
    Home_Team_Initials: { type: DataTypes.STRING(3),  allowNull: true },
    Away_Team_Initials: { type: DataTypes.STRING(3),  allowNull: true },
}, {
    createdAt: false,
    updatedAt: false
});

module.exports = Match;

