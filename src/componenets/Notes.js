import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem'

const Note = () => {
    const context = useContext(noteContext);
    const { note, setNote } = context;

    return (
        <div>
            <h2>Your Notes</h2>
            <div className="row my-3">
                {note.map((note) => {
                    return <Noteitem note={note} />
                })}
            </div>
        </div>
    )
}

export default Note