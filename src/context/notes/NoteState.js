import NoteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"

  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Fetch all note
  const getNotes = async (title, description, tag) => {
    // API Call!
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwOTIzN2YxYzVlM2MwMmUxNjk1ZWU4In0sImlhdCI6MTc0NTY2MTE5MH0.3bgfeb9eS8f6JEChULNM4GTSTkkv3xDxiDHObr39m04"
      }
    });

    const json = await response.json();
    console.log(json)
    setNotes(json)
  };

  // Add a new note
  const addNote = async (title, description, tag) => {
    // API Call!
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwOTIzN2YxYzVlM2MwMmUxNjk1ZWU4In0sImlhdCI6MTc0NTY2MTE5MH0.3bgfeb9eS8f6JEChULNM4GTSTkkv3xDxiDHObr39m04"
      },
      body: JSON.stringify({title, description, tag})
    });

    const json = await response.json();

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
  const deleteNote = async (id) => {
    // API Call!
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwOTIzN2YxYzVlM2MwMmUxNjk1ZWU4In0sImlhdCI6MTc0NTY2MTE5MH0.3bgfeb9eS8f6JEChULNM4GTSTkkv3xDxiDHObr39m04"
      },
    });

    const json = await response.json();

    console.log("The id of deleted item is: " + id)
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);
    console.log("Note deleted successfully");
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    // API Call!
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwOTIzN2YxYzVlM2MwMmUxNjk1ZWU4In0sImlhdCI6MTc0NTY2MTE5MH0.3bgfeb9eS8f6JEChULNM4GTSTkkv3xDxiDHObr39m04"
      },
      body: JSON.stringify({title, description, tag})
    });

    const json = await response.json();

    let newNote = JSON.parse(JSON.stringify(notes))

    // Logic to edit in client!
    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id === id) {
        newNote[index].title = title;
        newNote[index].description = description;
        newNote[index].tag = tag;
        break;
      }
    }
    // console.log(newNote)
    setNotes(newNote);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;