/*

import React from 'react'
import Note from './components/Note'
import axios from 'axios'
import EntryParser from './components/EntryParser'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      notes: [],
      newNote: '',
      showAll: true,
      countryFilter: '',
      warning: "insert "
    }
    console.log('constructor')
  }

  toggleVisible = () => {
    this.setState({ showAll: !this.state.showAll })
  }

  addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: this.state.newNote,
      date: new Date(),
      important: Math.random() > 0.5,
      
    }
    axios.post)

    const notes = this.state.notes.concat(noteObject)

    this.setState({
      notes,
      newNote: ''
    })
  }

  componentWillMount() {
    console.log('did mount')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ notes: response.data })
      })
  }

  handleNoteChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNote: event.target.value })
  }
  
  countryFilterChange = (event) => {
    console.log(event.target.value)
    this.setState({ countryFilter: event.target.value })

  }

  render() {
    console.log('render')
    const notesToShow = 
    this.state.countryFilter ? 
    this.state.notes.filter(note => note.name.toLowerCase().includes(this.state.countryFilter.toLowerCase())) :
    this.state.notes

    const label = this.state.showAll ? 'vain tärkeät' : 'kaikki'

    return (
      <div>
        <h1>Muistiinpanot</h1>
      
       
        <form onSubmit={this.addNote}>
          <input 
            value={this.state.countryFilter} 
            onChange={this.countryFilterChange}
          />
 <ul>       
          <EntryParser notesToShow={notesToShow} />
        </ul>        </form>
      </div>
    )
  }
}

export default App
*/

/*
import React from 'react'
import Note from './components/Note'
import axios from 'axios'
import noteService from './services/notes'
import Rajaus from './components/Rajaus'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      notes: [],
      newNote: '',
      showAll: true
    }
  }

  toggleVisible = () => {
    this.setState({ showAll: !this.state.showAll })
  }
componentDidMount() {
  noteService
    .getAll()
    .then(response => {
      this.setState({notes: response})
    })
}
  addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: this.state.newNote,
      date: new Date(),
      important: Math.random() > 0.5,
   
    }

    noteService
    .create(noteObject)
    .then(newNote => {
      this.setState({
        notes: this.state.notes.concat(newNote),
        newNote: ''
      })
    })
  }

  addNumber = ({newnameval, newnumberval, valueArray }) => {
    event.preventDefault()
    const nameObject = {
      name: newnameval,
      number: newnumberval
    }
  

  const persons = valueArray.concat(nameObject)
  const namereg = newnameval
  const numreg = newnumberval
  const seen = new Set();
  
  const hasDuplicates = persons.some(function(currentObject) {
    return seen.size === seen.add(currentObject.name).size;
  })
  if (!namereg.replace(/\s/g, '').length || !numreg.replace(/\s/g, '').length) {

    alert("field cant be empty.");
  }  else if (hasDuplicates){
    alert ("no duplicates!") 
  }  else {
  this.setState({
      persons, 
      newName: '',
      showAll: true
  })
  console.log(persons)
}


}

  componentWillMount() {
    console.log('will mount')
   noteService
      .getAll()
      .then(notes => {
        console.log('promise fulfilled')
        this.setState({notes })
      })
  }

  handleNoteChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNote: event.target.value })
  }

  toggleImportanceOf = (id) => {
    return () => {
     noteService
     .getAll()
     const note = this.state.notes.find(n => n.id === id)

     console.log("note")
     const changedNote = {...note, important: !note.important }
     noteService
     .update(id, changedNote)
     .then(changedNote => {
      const note = this.state.notes.find(n => n.id === id)

        this.setState({
         notes: this.state.notes.map(note => note.id !== id ? note: changedNote)
         
       })
     })
     .catch(error => {
       alert(`muistiinpano '${note.content}' on jo valitettavasti poistettu palvelimelta.`)
       this.setState({ notes: this.state.notes.filter(n => n.id !== id)})
     })
  
    }
  }
  render() {
    const notesToShow =
      this.state.showAll ?
        this.state.notes :
        this.state.notes.filter(note => note.important === true)

    const label = this.state.showAll ? 'vain tärkeät' : 'kaikki'

    return (
      <div>
        <h1>Muistiinpanot</h1>
        <div>
          <button onClick={this.toggleVisible}>
            näytä {label}
          </button>
        </div>
        <ul>
          {notesToShow.map(note => <Note key={note.id} note={note}  />)}
        </ul>
        <form onSubmit={this.addNote}>
          <input 
            value={this.state.newNote} 
            onChange={this.handleNoteChange}
          />
          <button type="submit">tallenna</button>
        </form>
      </div>
    )
  }
}

export default App

*/
/*
import React from 'react'
import Kurssi from './components/Kurssi'
import Note from './components/Note'
import noteService from './services/notes'
import './index.css'
import Notification from './components/Notification'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons:
      [], 
      newName: '',
      newNumber: '',
      nameFilter: '',
      error: null

    }
  }


  componentDidMount() {
    noteService 
    .getAll()
    .then(response => {
      this.setState({persons: response})
    })

  }

  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }
  handleNameFilter = (event) => {
    console.log(event.target.value)
    this.setState({ nameFilter: event.target.value })
 
  }
  handleNmbrChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
  }

  addNumber = (event) => {
    event.preventDefault()
    const nameObject = {
      name: this.state.newName,
      number: this.state.newNumber
      
    }
  
  
    const persons = this.state.persons.concat(nameObject)
    const namereg = this.state.newName
    const numreg = this.state.newNumber
    const seen = new Set();
    const hasDuplicates = persons.some(function(currentObject) {
      return seen.size === seen.add(currentObject.name).size;
    })
    if (!namereg.replace(/\s/g, '').length || !numreg.replace(/\s/g, '').length) {
  
      alert("field cant be empty.");
    }  else if (hasDuplicates){
          const prompt = window.confirm(`${this.state.newName} already exists in contacts. Do you want to replace it?`)
          if (prompt) {
          const duplicateName = this.state.persons.find(n => n.name === this.state.newName)
          console.log(duplicateName)
          const newnumber = this.state.newNumber
          const duplicateReplacement = {...duplicateName, number: newnumber}
          console.log(duplicateReplacement)
          noteService
          .update(duplicateReplacement.id, duplicateReplacement)
          .then(duplicateReplacement => {
            const persons = this.state.persons.filter(n => n.name !== this.state.newName)
            this.setState({
              persons: persons.concat(duplicateReplacement),
              error: `lisättiin ${this.state.newName}`
            })
            setTimeout(() => {
              this.setState({error: null})
            }, 5000)
          })
          .catch(error => {
              this.setState({error: `${this.state.newName} on valitettavasti poistettu jo järjestelmästä.`,
              persons: this.state.persons.filter(n => n.name !== this.state.newName)})
          })
        }
      } else {
      noteService
      .create(nameObject)
      .then(newNum => {
    this.setState({
      persons: this.state.persons.concat(newNum),
       error: `lisättiin ${this.state.newName}`
    
    })
    
    setTimeout(() => {
      this.setState({error: null})
    }, 5000)
  })
  

  }
}

 removeContact = (id) => {
   return () => {
  const individual = this.state.persons.find(n => n.id === id)
  const deletedPerson = {...individual}
  console.log(deletedPerson)
  noteService
  .remove(id, deletedPerson)
  .then(response => {
    const persons = this.state.persons.filter(n => n.id !== id)
   const result = window.confirm("do you really wanna delete this number?")
    if (result) {
    this.setState({
      persons,
     
    })
  
  }
  })
 }
}
  
  render() {
      const numbersToShow = 
        this.state.nameFilter ? 
        this.state.persons.filter(note => note.name.toLowerCase().includes(this.state.nameFilter.toLowerCase())) :
        this.state.persons


    return (
      <div>
        <h1>Puhelinluettelo</h1>
        <Notification message={this.state.error}/>

        <form onSubmit={this.addNumber}>
        <div>
          rajaa näytettäviä: <input value={this.state.nameFilter} onChange={this.handleNameFilter}/>
          </div>
          <div>
            nimi: <input  value={this.state.newName} onChange={this.handleNumberChange}/>
            

            </div>
            <div>
            numero: <input value={this.state.newNumber} onChange={this.handleNmbrChange} />
              </div>
              <div>
              <button type="submit">lisää</button>
                </div>
          </form>  
          <h2> Numerot </h2>
            <ul>
            {numbersToShow.map(note => <Note key={note.name} eventFactory={this.removeContact(note.id)} note={note} />)}
            </ul>
      </div>
    )
  }
}
export default App

*/
import React from 'react'
import Note from './components/Note'
import axios from 'axios'
import noteService from './services/notes'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      notes: [],
      newNote: '',
      showAll: true
    }
  }

  toggleVisible = () => {
    this.setState({ showAll: !this.state.showAll })
  }

  addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: this.state.newNote,
      date: new Date().new,
      important: Math.random() > 0.5,
      id: this.state.notes.length + 1
    }

    const notes = this.state.notes.concat(noteObject)

    this.setState({
      notes,
      newNote: ''
    })
  }

  componentDidMount() {
    noteService
    .getAll()
    .then(response => {
      this.setState({notes: response})
    })
  }

  handleNoteChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNote: event.target.value })
  }
  toggleImportanceOf = (id) => {
    return () => {
      const note = this.state.notes.find(n => n.id === id)
      const changedNote = { ...note, important: !note.important }
  
      noteService
        .update(id, changedNote)
        .then(changedNote => {
          const notes = this.state.notes.filter(n => n.id !== id)
          this.setState({
            notes: notes.concat(changedNote)
          })
        })
        .catch(error => {
          alert(`muistiinpano '${note.content}' on jo valitettavasti poistettu palvelimelta`)
          this.setState({ notes: this.state.notes.filter(n => n.id !== id) })
        })
    }
  }
  render() {
    const notesToShow =
      this.state.showAll ?
        this.state.notes :
        this.state.notes.filter(note => note.important === true)

    const label = this.state.showAll ? 'vain tärkeät' : 'kaikki'

    return (
      <div>
        <h1>Muistiinpanot</h1>
        <div>
          <button onClick={this.toggleVisible}>
            näytä {label}
          </button>
        </div>
        <ul>
          {notesToShow.map(note => <Note key={note.id} note={note} toggleImportance={this.toggleImportanceOf(note.id)}/>)}
        </ul>
        <form onSubmit={this.addNote}>
          <input 
            value={this.state.newNote} 
            onChange={this.handleNoteChange}
          />
          <button type="submit">tallenna</button>
        </form>
      </div>
    )
  }
}


export default App