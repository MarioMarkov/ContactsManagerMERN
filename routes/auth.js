const express = require('express');
const router = express.Router();
const { body, validationResult, check } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const config = require('config');


const User = require('../models/User')

//Login Authentication


router.get('/',auth,async (req,res)=>{
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user)

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error')
    }
})




// @route GET api/auth
// @desc Auth user anf get token
// @access Public 
router.post('/',[
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
],async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }

    const {email,password} = req.body;
    try {
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({msg:"Invalid credentials"});
        }

        const isMatch= await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({msg: "Invalid credentials"});
        }

        const payload={
            user:{
                id:user.id
            }
        }
  
        jwt.sign(payload, config.get('jwtSecret'),{
            expiresIn: 36000
        },(err,token)=>{
            if(err){
                throw err;
            }
            res.json({token});
        });
  
    } catch (error) {
        console.error(err.message);
        res.status(500).send("Server error")
    }
});




module.exports = router;
