import React, { useState, useContext } from 'react'
import noteContext from '../context/notes/noteContext'


const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const { showAlert } = props;

    const [ note, setNote ] = useState({ title: "", description: "", tag: "default" });
    const handleClick = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        addNote(note.title, note.description, note.tag);
        showAlert("Successfully Added", "success");
        setNote({title: "", description: "", tag: ""})
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <h1>Add Note</h1>
            <div className="container my-5">
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange} value={note.title} minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name='description' onChange={onChange} value={note.description} minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name='tag' minLength={5} onChange={onChange} value={note.tag} required />
                    </div>
                    <button type="submit" disabled={note.title.length<5 || note.description.length<5} className="btn btn-primary" onClick={handleClick}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote