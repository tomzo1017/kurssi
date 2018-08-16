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
componentDidMount() {
  noteService
    .getAll()
    .then(notes => {
      this.setState({notes})
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



  componentWillMount() {
    console.log('will mount')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ notes: response.data })
      })
  }

  handleNoteChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNote: event.target.value })
  }

  toggleImportanceOf = (id) => {
    return () => {
     const url = `http://localhost:3001/notes/${id}`

     const note = this.state.notes.find(n => n.id === id)
     console.log("note")
     const changedNote = {...note, important: !note.important }
     noteService
     .update(id, changedNote)
    
     .then(changedNote => {
    

       this.setState({
         notes: this.state.notes.map(note => note.id !== id ? note: changedNote)
         
       })
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
          {notesToShow.map(note => <Note key={note.id} note={note} toggleImportance={this.toggleImportanceOf(note.id)} />)}
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