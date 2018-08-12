import React from 'react'
import Kurssi from './components/Kurssi'
import Note from './components/Note'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        {
          name: 'Arto Hellas'
        }
        
      ], 
      newName: ''
    }
  }

  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  addNumber = (event) => {
    event.preventDefault()
    const nameObject = {
      name: this.state.newName
    
    }
  

  const personsoriginal = this.state.persons
  const persons = this.state.persons.concat(nameObject)
  const namereg = this.state.newName

  if (!namereg.replace(/\s/g, '').length) {

    alert("field cant be empty.");
  }  else if (personsoriginal.includes("paska")){
    console.log("piss") 
  } else {
  this.setState({
      persons, 
      newName: '',
      showAll: true
  })
  console.log(personsoriginal)
}
  }
  render() {
    

    return (
      <div>
        <h1>Puhelinluettelo</h1>
        <form onSubmit={this.addNumber}>
          <div>
            nimi: <input  value={this.state.newName} onChange={this.handleNumberChange}/>
            <button type="submit">lisää</button>

            </div>
            <div>
              </div>
          </form>  
          <h2> Numerot </h2>
            <ul>
            {this.state.persons.map(note => <Note key={note.name} note={note}/>)}
            </ul>
      </div>
    )
  }
}
export default App