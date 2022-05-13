import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/NoteContext'
import { Noteitem } from './Noteitem';
import AddNote from './AddNote';



export const Note = () => {

const context = useContext(NoteContext)

  const {notes, getNote} = context;
  
  useEffect(() => {
      getNote()
  },[])
  
  return (
    <>

    <AddNote/>
    <div className="row my-3">
        <h2>My Notes</h2>
          {notes.map((note)=>{
            return <Noteitem key={note._id} note={note}/>
          })}
      </div>
      </>
  )
}
