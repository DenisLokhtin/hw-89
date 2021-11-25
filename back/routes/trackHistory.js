const express = require('express');
const TrackHistory = require('../models/TrackHistory');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const Artists = await TrackHistory.find();
        res.send(Artists);
    } catch (e) {
        res.sendStatus(500);
    }
});


router.post('/',  async (req, res) => {
    const track = await TrackHistory.findOne();

    if (!track) {
        return res.status(401).send({error: 'wrong token'})
    }
});

module.exports = router;