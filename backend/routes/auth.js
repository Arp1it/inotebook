const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require("../middleware/fetchuser");


const JWT_SECRET = "Arp1itisahacker"

// Create a user using Post "/api/auth/createuser". Dosn't required auth
router.post("/createuser", [
  body('name', "username length must be at least 3 character").isLength({ min: 3 }),
  body('email', "enter a valid email").isEmail(),
  body('password', "password length must be at least 5 chars").isLength({ min: 5 })
], async (req, res) => {

  let success = false

  const result = validationResult(req);
  if (result.isEmpty()) {

    const salt = await bcrypt.genSalt(10);
    secpass = await bcrypt.hash(req.body.password, salt);

    return await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secpass
    })
      .then(user => res.json(
        { success: true, authtoken: jwt.sign({ user: user.id }, JWT_SECRET) }
      ))
      .catch(err => res.status(500).json({ success, error: "Please enter a unique value for email", err }))

  }

  res.status(400).json({ success, errors: result.array() });

})



// Create a user using Post "/api/auth/login". Dosn't required auth
router.post("/login", [
  body('email', "enter a valid email").isEmail(),
  body('password', "Please enter password").exists()
], async (req, res) => {
  let success = false;

  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({ success, error: "Please enter a valid Credentials" });
    };

    const passwordcompare = await bcrypt.compare(password, user.password);

    if (!passwordcompare) {
      return res.status(400).json({ success, error: "Please enter a valid Credentials" });
    };

    const payload = {
      user: {
        id: user.id
      }
    }

    const authtoken = jwt.sign(payload, JWT_SECRET)
    success = true;
    res.send({ success, authtoken: authtoken })

  } catch (error) {
    console.log(error)
    res.status(500).json("Internal Server error occured!")
  }

})


// Create a user using Post "/api/auth/getuser". required auth
router.post("/getuser", fetchuser, async (req, res) => {

  try {
    userId = req.user.id
    const user = await User.findById(userId).select("-password")
    res.send(user)
  }
  catch (error) {
    console.log(error)
    res.status(500).json("Internal Server error occured!")
  }

})

module.exports = router