const conn = require.main.require('./config/database.js');
const { DataTypes } = require('sequelize');
const Match = require('./Match');

const WorldCup = conn.define('WorldCups', {
    Year:               { type: DataTypes.INTEGER,    allowNull: false, primaryKey: true },
    Country:            { type: DataTypes.STRING(12), allowNull: false },
    Winner:             { type: DataTypes.STRING(10), allowNull: false },
    RunnersUp:          { type: DataTypes.STRING(25), allowNull: false },
    Third:              { type: DataTypes.STRING(11), allowNull: false },
    Fourth:             { type: DataTypes.STRING(14), allowNull: false },
    GoalsScored:        { type: DataTypes.INTEGER,    allowNull: false },
    QualifiedTeams:     { type: DataTypes.INTEGER,    allowNull: false },
    MatchesPlayed:      { type: DataTypes.INTEGER,    allowNull: false },
    Attendance:         { type: DataTypes.STRING(9),  allowNull: false },
}, {
    createdAt: false,
    updatedAt: false
});

WorldCup.hasMany(Match, { foreignKey: 'Year_Cup' });
Match.belongsTo(WorldCup, { foreignKey: 'Year_Cup' });

module.exports = WorldCup;

