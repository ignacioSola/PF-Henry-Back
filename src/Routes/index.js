const { Router } = require('express');

const { Pet } = require('../db.js');
// const pets = require('./routePets')
// const donation = require('./routeDonation')
//const user = require('./routeUser')



const router = Router();

router.get('/',(req, res) => {
    Pet.findAll().then(r=>res.send(r));
})


// router.use('/pets', pets)
// router.use('/donation', donation)
// router.use('/user', user)

module.exports = router;