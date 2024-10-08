const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');


// Create a user using Post "/api/auth". Dosn't required auth
router.post("/", [
    body('name', "username length must be at least 3 character").isLength({min:3}),
    body('email', "enter a valid email").isEmail(),
    body('password', "password length must be at least 5 chars").isLength({min:5})
], (req, res)=>{

    const result = validationResult(req);
    if (result.isEmpty()) {
      
      return User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }).then(user=>res.json(user))
      .catch(err => res.status(500).json({error: "Please enter a unique value for email", err}))

    }
  
    res.status(400).json({ errors: result.array() });

})

module.exports = router