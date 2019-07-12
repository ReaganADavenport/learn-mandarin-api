const express = require('express'),
    router = express.Router();

const CardModel = require('../models/card');

/* GET home page. */
router.get('/', (req, res, next) => {
    res.send("Welcome to my API").status(200);
});

router.get('/greetings', async (req,res,next) =>{
    const allGreetings = await CardModel.getAllGreetings();
    res.json(allGreetings).status(200);
});

module.exports = router;