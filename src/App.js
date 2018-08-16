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

    const parseNotes = () => {
      if (notesToShow.length >= 10) {
        console.log("length")
      }
    }
    parseNotes()
      
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