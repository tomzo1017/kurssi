import React from 'react'

const JustOne = ({ note }) => {
    const style = {
        width: '150px', 
        height: '100px'
    }
  
  return (
      <div>
    <h1>{note.name} </h1>
    <p> capital: {note.capital} </p>
    <p> population: {note.population} </p>
    <img  src= {note.flag} style={style}/>
    </div>
    
  )
  
}

export default JustOne