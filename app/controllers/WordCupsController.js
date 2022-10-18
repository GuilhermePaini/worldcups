const WorldCup = require('../models/worldcups/WorldCup.js');
const Match = require('../models/worldcups/Match.js');

const { Op } = require('sequelize');

module.exports = app => {

    app.use('/worldcups', [ app.config.auth.authenticate() ]);

    app.get('/worldcups/:year', async (req, res) => {

        try {
            const result = await WorldCup.findOne({
                attributes: ['Country', 'Winner', 'RunnersUp'],
                where: { year: req.params.year }
            });

            if (result == null)
                return res.status(404).send("Not found");

            return res.status(200).json(result);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    })

    app.get('/worldcups/finals/:year', async (req, res) => {
        try {
            const result = await Match.findOne({
                attributes: [
                    'Datetime',
                    'Stadium',
                    'Home_Team_Name',
                    'Away_Team_Name',
                    'Home_Team_Goals',
                    'Away_Team_Goals',
                    'Win_conditions'],
                where: {
                    Year_Cup: req.params.year,
                    Stage: "final"
                }
            });

            if (result == null)
                return res.status(404).send("Not found");

            return res.status(200).json(result);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    });

    app.get('/worldcups/country/:country', async (req, res) => {

        const country = req.params.country.toLowerCase();

        try {
            const result = await WorldCup.findAll({
                attributes: [
                    'Year',
                    'Country',
                    'Winner',
                    'RunnersUp',
                    'Third',
                    'Fourth'],
                where: {
                    [Op.or]: [
                        { "Winner": country },
                        { "RunnersUp": country },
                        { "Third": country },
                        { "Fourth": country }
                    ]
                }
            });

            if (result.length === 0)
                return res.status(404).send("Not found");

            result.forEach((elem) => {
                for (const [key, value] of Object.entries(elem.dataValues)) {
                    if (typeof (value) === "string" && value.toLocaleLowerCase() === country)
                        elem.dataValues.Position = key;
                }

                delete elem.dataValues.Winner;
                delete elem.dataValues.RunnersUp;
                delete elem.dataValues.Third;
                delete elem.dataValues.Fourth;
            });

            return res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ msg: err.message });
        }
    });

    app.get('/worldcups/details/:year', async (req, res) => {
        try {
            const result = await Match.findOne({
                attributes: [
                    'Datetime',
                    'Stadium',
                    'Home_Team_Goals',
                    'Away_Team_Goals',
                    'WorldCup.RunnersUp',
                    'WorldCup.Country',
                    'WorldCup.Winner',
                ],
                where: {
                    Year_Cup: req.params.year,
                    Stage: "final",
                },
                include: [{
                    attributes: [],
                    model: WorldCup
                }],
                raw: true,
            });

            if (result == null)
                return res.status(404).send("Not found");

            return res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ msg: err.message });
        }
    });

    app.post('/worldcups', async (req, res) => {

        const request = req.body;

        try {
            const newCup = WorldCup.build(request);

            if (newCup instanceof WorldCup)
                await newCup.save();

            return res.status(201).json(newCup);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    });
}