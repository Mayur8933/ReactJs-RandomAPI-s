import React ,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { Redirect } from "react-router-dom";
import { UserInfoContext } from "../Context/Context";
import DogImage from '../dog.png' 
import CatImage from '../cat.png'

  
const Home = () =>{
    const context = useContext(UserInfoContext);

    //PUt Anypage behind login

    if (!context.user?.uid) {
        return <Redirect to="/signin" />;
    }
    return (
        <div>
              <div>
                <Link to='/dog'><img className='img-fluid' style={{}} alt='' src={DogImage} /></Link>
                <Link to='/cat'><img className='img-fluid' style={{}} alt='' src={CatImage} /></Link>
              </div>
        </div>
    )
}

export default Home;