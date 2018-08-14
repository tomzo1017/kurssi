import React from 'react'
import Kurssi from './components/Kurssi'
import Note from './components/Note'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        {
          name: 'Arto Hellas',
          number: "0408888032"
        }
        
      ], 
      newName: '',
      newNumber: '',
      nameFilter: ''
    }
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
  render() {
      const numbersToShow = 
        this.state.nameFilter ? 
        this.state.persons.filter(note => note.name.toLowerCase().includes(this.state.nameFilter.toLowerCase())) :
        this.state.persons


    return (
      <div>
        <h1>Puhelinluettelo</h1>
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
            {numbersToShow.map(note => <Note key={note.name} note={note}/>)}
            </ul>
      </div>
    )
  }
}
export default App