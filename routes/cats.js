var express = require('express');
var router = express.Router();

//GET /cats/fact
router.get("/fact", async function(req, res, next){
    await fetch("https://catfact.ninja/fact")
    .then(res => res.json())
    .then(data => {
        res.render("cats/fact", {
            fact: data.fact});

    })
});

//GET /cats/facts
router.get("/facts", async function(req, res, next){
    await fetch("https://catfact.ninja/facts")
    .then(res => res.json())
    .then(data => {
    
        console.log(data.data);
        res.render("cats/facts", {
            facts: data.data});

    })
});



module.exports = router;