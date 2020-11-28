const express = require('express');
const router = express.Router();

// @route     GET api/auth
// @desc      Get a logged in user
// @access    Private
router.get('/',(req,res) => {
  res.send("Get Logged in User");
})

// @route     POST api/auth
// @desc      Authorise user and Get token
// @access    Public
router.post('/',(req,res) => {
  res.send("Log in User");
})

module.exports = router;
