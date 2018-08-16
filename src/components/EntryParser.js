import React from 'react'
import Note from './Note'
import JustOne from './JustOne'


const EntryParser = ({notesToShow}) => {
        
  if (notesToShow.length >= 250) {
   return (
     <p> Enter a value to start filtering. </p>
   )
  } else if (notesToShow.length >= 10) {
    return (
    <p> Too many matches, specify another filter. </p>
    )
  } else if (notesToShow.length === 1) {
    return (
      notesToShow.map(note => <JustOne key={note.name} note={note}/>)
    )
  }
   else {
    return (
      notesToShow.map(note => <Note key={note.name} note={note} />)
    )
  }
}

export default EntryParser