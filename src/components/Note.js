import React from 'react'
import JustOne from './JustOne'

const Note = ({ note }) => {
  
  
  return (
    <li onClick={() => <JustOne key={note.name} note={note} />}>{note.name} </li>
  )
}

export default Note