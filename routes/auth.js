const express = require('express');
const router = express.Router();




// @route GET api/auth
// @desc Auth user anf get token
// @access Public 
router.post('/',(req,res)=>res.send('log in user'));


// @route GET api/auth
// @desc Get logged in user
// @access Private 
router.get('/',(req,res)=>res.send('get logged-in a user'));

module.exports = router;
