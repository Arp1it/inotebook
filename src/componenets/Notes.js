import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem'
import AddNote from './AddNote';

const Note = () => {
    const context = useContext(noteContext);
    const { notes, getNotes } = context;

    useEffect(() => {
        getNotes()
    }, [])

    return (
        <>
            <AddNote />
            <div>
                <h2>Your Notes</h2>
                <div className="row my-3">
                    {notes.map((note) => {
                        return <Noteitem key={note._id} note={note} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Note