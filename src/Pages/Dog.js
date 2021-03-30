import React, {useState} from "react"
import Axios from "axios";
import './Dog.css'

import {
  Container,
  Button
} from "reactstrap";

import {Link} from 'react-router-dom'

import DogCard from '../ShowInfo/DogCard'
import { toast } from "react-toastify";

const Dog = () => {
  const [dog, setDog] = useState('');
  const [dogbuttonName,setDogButtonName] = useState('Show Dog Images')

  const fetchDogDetails = async () => {
    try {    
      const {data} = await Axios.get(`https://dog.ceo/api/breeds/image/random/3`);
      setDog(data);
      setDogButtonName('Change Image')
      console.log(data);
    } catch (eror) {
      toast("Not able to locate user", { type: "error" });
    }
  };
  

  return (
    <div className='Dog'>
      <Container>
             {dog ? <Link to='/cat'><h4 className='catImg_link'>Go to Cat Images</h4></Link> : ''}
              <Button style={{backgroundColor:'skyblue',color:'black'}} className='DogBtn' onClick={fetchDogDetails}>
                {dogbuttonName}
              </Button>
            {dog ? <DogCard Dog={dog} /> : ''}
      </Container>
    </div>
  );
};

export default Dog;
