import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem'
import AddNote from './AddNote';
import { use } from 'react';

const Note = () => {
    const context = useContext(noteContext);
    const { notes, getNotes } = context;

    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])

    const ref = useRef(null);
    const [ note, setNote ] = useState({ etitle: "", edescription: "", etag: "" });

    const updatenote = (currentnote) => {
        ref.current.click();
        setNote({ etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag });
    }

    const handleClick = (e) => {
        console.log("Updating the note...", note);
        e.preventDefault(); // Prevent the default form submission behavior
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }

    return (
        <>
            <AddNote />

            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="container my-5">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" onChange={onChange} value={note.etitle} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name='edescription' onChange={onChange} value={note.edescription} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name='etag' onChange={onChange} value={note.etag} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <h2>Your Notes</h2>
                <div className="row my-3">
                    {notes.map((note) => {
                        return <Noteitem key={note._id} updatenote={updatenote} note={note} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Note