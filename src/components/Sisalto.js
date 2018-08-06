import React from 'react'
import Osa from './components/Osa'
import App from './App'
const Sisalto = ({ notes }) => {
   
    return (
     <ul>
      {notes.map(note => <Osa key={note.id} note={kurssi} />)}
     </ul>
    )
  }

export default Sisalto