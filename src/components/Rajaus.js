import ReactDOM from 'react-dom'
import React from 'react'



const Rajaus = ({nameFilterProp, nameFilterChange, FilterArray}) => {
   
    return ( 
        <div>
          rajaa näytettäviä: <input value={nameFilterProp} onChange={nameFilterChange}/>
          </div>
    )
}


export default Rajaus