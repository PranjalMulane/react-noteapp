import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState=(props)=>{
   
    
    const noteInitial = 
    [
        {
          "_id": "62680efbec15bc83b4d62958",
          "user": "62680ea4ec15bc83b4d62955",
          "title": "Assignment3",
          "description": "asdfedfsd",
          "tag": "php2",
          "date": "2022-04-26T15:25:48.000Z",
          "__v": 0
        },
        {
          "_id": "6272939e2a7b7f33f360220a",
          "user": "62680ea4ec15bc83b4d62955",
          "title": "Ajjfib",
          "description": "asdfedfsd",
          "tag": "php2",
          "date": "2022-05-04T14:54:22.014Z",
          "__v": 0
        },
        {
            "_id": "6272939e2a7b7f33f360220a",
            "user": "62680ea4ec15bc83b4d62955",
            "title": "Titleeeee",
            "description": "asdfedfsd",
            "tag": "php2",
            "date": "2022-05-04T14:54:22.014Z",
            "__v": 0
          },
          {
            "_id": "6272939e2a7b7f33f360220a",
            "user": "62680ea4ec15bc83b4d62955",
            "title": "Assignment3",
            "description": "asdfedfsd",
            "tag": "php2",
            "date": "2022-05-04T14:54:22.014Z",
            "__v": 0
          }
    ]

    const [notes, setNotes]= useState(noteInitial)

    return(
        <NoteContext.Provider value={{notes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;