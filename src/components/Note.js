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

const Note = ({ note, eventFactory, toggleImportance}) => {
  const label = note.important ? 'make not important' : 'make important'
   
  return (
    <li className="note"> {note.name}{note.number}<button onClick={toggleImportance} /> <button onClick={eventFactory}> Poista </button></li>
  )
}

export default Note