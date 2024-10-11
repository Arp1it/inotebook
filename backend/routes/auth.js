const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const JWT_SECRET = "Arp1itisahacker"

// Create a user using Post "/api/auth/createuser". Dosn't required auth
router.post("/createuser", [
    body('name', "username length must be at least 3 character").isLength({min:3}),
    body('email', "enter a valid email").isEmail(),
    body('password', "password length must be at least 5 chars").isLength({min:5})
], async(req, res)=>{

    const result = validationResult(req);
    if (result.isEmpty()) {

      const salt = await bcrypt.genSalt(10);
      secpass = await bcrypt.hash(req.body.password, salt);
      
      return await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secpass
      })
      .then(user=>res.json(
        {authToken: jwt.sign({ user: user.id }, 'shhhhh')}
      ))
      .catch(err => res.status(500).json({error: "Please enter a unique value for email", err}))

    }
  
    res.status(400).json({ errors: result.array() });

})

module.exports = router