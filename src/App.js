import React, { useState } from 'react'
import './Pages/Dog.css'
import './Pages/Cat.css'

//pages
import Dog from './Pages/Dog'
import SignIn from './Pages/Signin'
import SignUp from './Pages/Signup'
import PageNotFound from './Pages/Pagenotfound'

//context
import { UserInfoContext } from './Context/Context'

//react-router
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//firebase
import firebase from "firebase/app";
import "firebase/auth";

//Initialize FirebaseAuth
import firebaseConfig from './FirebaseConfig/FireConfig'
import Header from './Components/Header'
import Footer from './Components/Footer'
import DogCard from './ShowInfo/DogCard'
import Home from './Pages/Home'
import Cat from './Pages/Cat'
firebase.initializeApp(firebaseConfig)

function App() {

  const [user , setUser] = useState(null)

  return (
    <Router>
        <ToastContainer/>
        <UserInfoContext.Provider value={{user , setUser}}>
        <Header/>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/cat' component={Cat} />
              <Route exact path='/dog' component={Dog}/>
              <Route exact path='/signin' component={SignIn} />
              <Route exact path='/signup' component={SignUp} />
              <Route exact path='/dogcard' component={DogCard} />
              <Route exact path='*' component={PageNotFound} />
          </Switch>
        <Footer/>  
        </UserInfoContext.Provider>
    </Router>
  );
}

export default App;
