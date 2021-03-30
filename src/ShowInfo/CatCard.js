import React from 'react'
import '../Pages/Cat.css'
import "bootstrap/dist/css/bootstrap.min.css";

const CatCard = ({cat}) => {
    return(
           <div className='Cat_card'>
                <img className='catImg' alt='' src={cat?.[0]?.url}/>
           </div>
    )
}

export default CatCard
