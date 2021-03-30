import React, { useState} from "react";
import Axios from "axios";
import {Link} from 'react-router-dom'
import './Cat.css'

import {
  Container,
  Button,
} from "reactstrap";

import { toast } from "react-toastify";
import CatCard from "../ShowInfo/CatCard";

const Cat = () => {
  const [cat ,setCat] = useState('');
  const [catButtonName,setCatButtonName] = useState('Show Cat Images')

  const fetchCatDetails = async () => {
    try {
      const {data} = await Axios.get(`https://api.thecatapi.com/v1/images/search`);
      setCat(data);
      setCatButtonName('Change Image')
      console.log(data);
    } catch (eror) {
      toast("Not able to locate user", { type: "error" });
    }
  };

  return (
    <div className='Cat'>
    <Container className='cont'>
           { cat ?  <Link to='/dog'><h4 className='dogImg_link'>Go to Dog Images</h4></Link> : ''}
            <Button style={{backgroundColor:'skyblue',color:'black'}} className='catbtn' onClick={fetchCatDetails}>
              {catButtonName}
            </Button>
          {cat ? <CatCard cat={cat} /> : ''}
    </Container>
  </div>
  );
};

export default Cat;

