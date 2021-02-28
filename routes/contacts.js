const express = require('express');
const router = express.Router();

// @route GET api/contacts
// @desc Register all user contacts
// @access Public 
router.get('/',(req,res)=>res.send('Get all contacts'));

// @route POST api/contacts
// @desc add new contact
// @access Public 
router.post('/',(req,res)=>res.send('add contact'));

// @route PUT api/contacts/:id
// @desc Register all user contacts
// @access Public 
router.put('/:id',(req,res)=>res.send('update contact'));



// @route DELETE api/contacts/:id
// @desc Register all user contacts
// @access Public 
router.delete('/:id',(req,res)=>res.send('delete contact'));

module.exports = router;
