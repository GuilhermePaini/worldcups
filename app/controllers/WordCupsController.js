const WorldCup = require('../models/worldcups/WorldCup.js');
const Match = require('../models/worldcups/Match.js');

module.exports = app => {
    
    app.get('/worldcups/:year', async (req, res) => {

        try {
            const result = await WorldCup.findOne({
                attributes: ['Country', 'Winner', 'RunnersUp'],
                where: { year: req.params.year }
            });

            if (result == null)
                res.status(404).send("Not found");

            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ msg: err.message }); 
        }
    })
}