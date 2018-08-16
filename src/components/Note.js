/*import React from 'react'
import JustOne from './JustOne'

const Note = ({ note }) => {
  
  
  return (
    <li onClick={() => <JustOne key={note.name} note={note} />}>{note.name} </li>
  )
}

export default Note
*/
import React from 'react'

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? 'make not important' : 'make important'
   
  return (
    <li> {note.content} <button onClick={toggleImportance}>{label}</button></li>
  )
}

export default Note