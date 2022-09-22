const WorldCup = require('../models/worldcups/WorldCup.js');
const Match = require('../models/worldcups/Match.js');

module.exports = app => {
    
    app.get('/worldcups', async (req, res) => {

        try {
            const result = await WorldCup.findAll();
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ msg: err.message }) 
        }
    })

    app.get('/matches', async (req, res) => {
        
        try {
            const result = await Match.findAll();
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ msg: err.message }) 
        }
    })
}