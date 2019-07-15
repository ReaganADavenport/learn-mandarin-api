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

router.get('/nationalities', async (req,res,next)=>{
    const allNationalites = await CardModel.getAllNationalities();
    res.json(allNationalites).status(200);
});

router.get('/family', async (req,res,next)=>{
    const allFamily = await CardModel.getAllFamily();
    res.json(allFamily).status(200);
});

module.exports = router;