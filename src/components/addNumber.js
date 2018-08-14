import ReactDOM from 'react-dom'
import React from 'react'

const addNumber = ({newnameval, newnumberval, valueArray }) => {
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

export default addNumber