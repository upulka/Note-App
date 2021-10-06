const express = require('express');
const router = express.Router();
const Note = require("../models/noteModel");

//creating a new note and insert it into the database
router.route("/create").post((req , res) =>{
    const title = req.body.title;
    const content = req.body.content;
    //creating new document in the note model
    const newNote = new Note({
        title,
        content
    });
    newNote.save();
})

//retrieve the notes
router.route("/notes").get((req , res) =>{
    Note.find().then(foundNote => res.json(foundNote));
})

module.exports = router;