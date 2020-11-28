const express = require('express');
const router = express.Router();

// @route     GET api/contacts
// @desc      Get all contacts of a user
// @access    Private
router.get('/',(req,res) => {
  res.send("Gets  All contact");
})

// @route     POST api/auth
// @desc      Add new contact
// @access    Private
router.post('/',(req,res) => {
  res.send("Add contact");
})

// @route     GET api/auth/:id
// @desc      Update contact
// @access    Private
router.put('/:id',(req,res) => {
  res.send("Update Contact");
})

// @route     Delete api/auth/:id
// @desc      Delete contact
// @access    Private
router.delete('/:id',(req,res) => {
  res.send("Delete Contact");
})

module.exports = router;
