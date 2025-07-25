import React, { useState, useContext } from 'react'
import noteContext from '../context/notes/noteContext'

const Noteitem = (props) => {
    const { note, updatenote } = props;
    const context = useContext(noteContext);
    const { deleteNote } = context;

    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fa-solid fa-trash mx-3" onClick={() => deleteNote(note._id)}></i>
                        <i className="fa-solid fa-pen-to-square mx-3" onClick={() => updatenote(note)}></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem