import ReactDOM from 'react-dom'


const Numbers = ({filterableArray, filterElement}) => {

   
filterElement ? 
filterableArray.filter(note => note.name.toLowerCase().includes(filterElement.toLowerCase())) :
filterableArray
    
}

export default Numbers