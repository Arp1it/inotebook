import NoteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) =>{
    const s1 = {
        "name": "Arpit",
        "class": "5B",
        "title": "Dangerous Programmer."
    }

    const [state, setState] = useState(s1);

    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Echo Cipher",
                "class": "1B",
                "title": "Dangerous Programmer or Hacker (Because he create weapons like malwares, viruses, etc.)"
            })
        }, 3000)
    }

    return (
        <NoteContext.Provider value={{ state:state, update:update }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;