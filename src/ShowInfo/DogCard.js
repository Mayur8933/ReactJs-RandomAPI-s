import React from 'react'
import '../Pages/Dog.css'
import "bootstrap/dist/css/bootstrap.min.css";

const DogCard = ({Dog}) => {
    return(
        <div className='Dog_card'>
            <img className='dogImg' alt='' src={Dog.message?.[0]} />
        </div>
    )
}

export default DogCard
