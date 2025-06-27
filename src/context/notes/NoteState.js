import NoteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) =>{
    const notesInitial = [{
    "_id": "680cb1c009aafd6f4bd5fa34",
    "user": "6709237f1c5e3c02e1695ee8",
    "title": "Hello First Note!",
    "description": "Hello world!",
    "tag": "personal",
    "date": "2025-04-26T10:13:20.453Z",
    "__v": 0
  },
  {
    "_id": "680cb1f309aafd6f4bd5fa3a6",
    "user": "6709237f1c5e3c02e1695ee8",
    "title": "Hello Third Note!",
    "description": "My Experience is so cool!",
    "tag": "public",
    "date": "2025-04-26T10:14:11.612Z",
    "__v": 0
  },
  {
    "_id": "680cb1f309aafd6f4bd5fa3a1",
    "user": "6709237f1c5e3c02e1695ee8",
    "title": "Hello Third Note!",
    "description": "My Experience is so cool!",
    "tag": "public",
    "date": "2025-04-26T10:14:11.612Z",
    "__v": 0
  },
  {
    "_id": "680cb1f309aafd6f4bd5fa3a",
    "user": "6709237f1c5e3c02e1695ee8",
    "title": "Hello Third Note!",
    "description": "My Experience is so cool!",
    "tag": "public",
    "date": "2025-04-26T10:14:11.612Z",
    "__v": 0
  },
  {
    "_id": "680cb1f309aafd6f4bd5fa3a9",
    "user": "6709237f1c5e3c02e1695ee8",
    "title": "Hello Third Note!",
    "description": "My Experience is so cool!",
    "tag": "public",
    "date": "2025-04-26T10:14:11.612Z",
    "__v": 0
  },
  {
    "_id": "680e2c2850e50f49add3a96f",
    "user": "6709237f1c5e3c02e1695ee8",
    "title": "Hello Fourth Note!",
    "description": "i am Experienced!",
    "tag": "public",
    "date": "2025-04-27T13:07:52.689Z",
    "__v": 0
  }];

  const [notes, setNotes] = useState(notesInitial);

  // Add a new note
  const addNote = (title, description, tag) => {
    console.log("Adding a new note...");
    const note = {
      "_id": "680e2c2850e50f49add3a966",
      "user": "6709237f1c5e3c02e1695ee0",
      "title": title,
      "description": description,
      "tag": tag,
      "__v": 0
    };
    setNotes(notes.concat(note));
  };

  // Delete a note
  const deleteNote = (id) => {
    console.log("The id of deleted item is: " + id)
    const newNotes = notes.filter((note) => {return note._id !== id});
    setNotes(newNotes);
    console.log("Note deleted successfully");
  };

  // Edit a note
   const editNote = (id, title, description, tag) => {

   }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;