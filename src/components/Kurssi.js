import React from 'react'


const Otsikko = ({ otsikko }) => {
    return (
      <h1> {otsikko} </h1>
    )
  }
  
  const Note = ({ note }) => {
      return (
        <p> {note.nimi} {note.tehtavia} </p>
      )
  }
  
  const Yhteensa = ({note}) => {
  const map1 = note.map(x => x.tehtavia);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  return (
    <p> Yhteensä {map1.reduce(reducer)} tehtävää</p>
  )
  }
  
  const Sisalto = ({ notes }) => {
    return (
      <div>
          
          {notes.map(note =><Note key={note.id} note={note}/>)}
          
      </div>
    )
  }
  
  const Kurssi = ({kurssit}) => {
    return (
      <div>
      <Otsikko otsikko={kurssit[0].nimi}/>
      <Sisalto notes={kurssit[0].osat} />
      <Yhteensa note={kurssit[0].osat}/>
      <Otsikko otsikko={kurssit[1].nimi}/>
      <Sisalto notes={kurssit[1].osat} />
      <Yhteensa note={kurssit[1].osat}/>
      </div>
    )
  }
  const kurssi = 0
  const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        }
      ]
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]


  
    export default Kurssi