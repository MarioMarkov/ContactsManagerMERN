const express = require('express');
const router = express.Router();
const { body, validationResult, check } = require('express-validator');
const auth =  require('../middleware/auth');
const Contact = require('../models/Contact');
const contact =  require('../models/Contact')


const User = require('../models/User')

// @route GET api/contacts
// @desc Register all user contacts
// @access private 
router.get('/',auth, async(req,res)=>{
    try {
        //find most recent contacts
        const contacts = await Contact.find({user: req.user.id}).sort({date:-1});
        res.json(contacts);
    } catch (error) {
        console.error(error.message);

        res.status(500).send('Server Error');
    }
});

// @route POST api/contacts
// @desc add new contact
// @access Public 
router.post('/',[auth,[
    check('name','name is required').not().isEmpty()

]],async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }

    const {name,email,type,phone} = req.body;

    try {
        const newContact = new Contact({
            name,
            email,
            phone,
            type,
            user: req.user.id
        });

        const contact = await newContact.save();

        res.json(contact);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }


});

// @route PUT api/contacts/:id
// @desc Register all user contacts
// @access Public 
router.put('/:id',auth,async (req,res)=>{
    const {name,email,type,phone} = req.body;

    const contactFields = {};

    if(name) contactFields.name = name;
    if(phone) contactFields.phone = phone;
    if(email) contactFields.email = email;
    if(type) contactFields.type = type;

    try {
        let contact = await Contact.findById(req.params.id);

        if(!contact){
            res.status(404).json({msg:'Contact not found'})
        }

        //veify user has contact
        if(contact.user.toString() !== req.user.id){
            return res.status(401).json('Not Authorized');
        }

        contact = await Contact.findByIdAndUpdate(req.params.id,{$set: contactFields},{new:true})

        res.json(contact);

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }

});



// @route DELETE api/contacts/:id
// @desc Register all user contacts
// @access Public 
router.delete('/:id',auth,async (req,res)=>{
    try {
        let contact = await Contact.findById(req.params.id);

        if(!contact){
            res.status(404).json({msg:'Contact not found'})
        }

        //veify user has contact
        if(contact.user.toString() !== req.user.id){
            return res.status(401).json('Not Authorized');
        }

        await Contact.findByIdAndRemove(req.params.id);

        res.json({msg:"Contact Removed"});

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
