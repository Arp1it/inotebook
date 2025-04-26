const express = require('express');
const router = express.Router()
const Notes = require('../models/Notes');
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require('express-validator'); // Import body and validationResult


// Route 1: Get all the notes using GET "/api/notes/fetchallnotes". Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {

    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

// Route 2: Add a new note using POST "/api/notes/addnote". Login required
router.post("/addnote", fetchuser, [
    body('title', "Enter a valid title!").isLength({ min: 3 }),
    body('description', "Description length must be at least 5 chars!").isLength({ min: 5 })
], async (req, res) => {

    try {
        const { title, description, tag } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save()
        res.json(savedNote)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

module.exports = router