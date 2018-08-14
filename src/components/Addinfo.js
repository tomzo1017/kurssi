import ReactDOM from 'react-dom'

import React from 'react'

const Addinfo = ({nameProp, numProp, nameFunc, numFunc}) => {

return (
<div>
nimi: <input  value={nameProp} onChange={nameFunc}/>
numero: <input value={numProp} onChange={numFunc} />
  <button type="submit">lisää</button>
    </div>
)
}
export default Addinfo