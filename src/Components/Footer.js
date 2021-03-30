import React from 'react'
import {Container} from 'reactstrap'

const Footer = () => {
    return(
        <Container style={{
            backgroundColor: "#5CDB95"
             
        }} fluid
        tag='footer'
        className='text-center text-uppercase fixed-bottom p-3'
        >
         <h6 style={{color:'05386B'}}>ANIMAL Info App</h6>
        </Container>
    )
}
export default Footer