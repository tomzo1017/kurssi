import React from 'react'
import Otsikko from './Otsikko'
const Kurssi = ({kurssi}) => {
 return (
<div>
    <Otsikko otsikko={(kurssi.nimi)}/>

    </div>

 )  
}

export default Kurssi