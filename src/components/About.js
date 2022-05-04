import React, { useContext }  from 'react'
import NoteContext from '../context/NoteContext'

const About = () => {
  const a = useContext(NoteContext)
  return (
    <>
    <p>This is about page, Hi I am  {a.name}, My Job role is {a.role}</p>
    </>
  )
}

export default About