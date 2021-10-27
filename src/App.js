import "./App.css";
import Home from './Home/Home';
import MovieContent from "./MovieContent/MovieContent";
import NavBar from './NavBar/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Trailer from "./Trailer/Trailer";
import React,{useEffect, useState} from 'react';
import { MovieContext } from "./Contexte/Context";
import Login from './Login/Login'
import Dashboard from "./Dashboard/Dashboard";

function App(props) {

  const Page ='App';


  const [Movies, setMovies] = useState(MovieContext);
  const [CopieMovies,setCopieMovies] = useState(Movies);


  const FilterMovie = (text) =>{

    if (text !== '') {

      setMovies([...Movies.filter(movie => movie.title.toLowerCase().includes(text.toLowerCase()))]);

    } else {

      setMovies([...CopieMovies]);

    }  

  }

  return (

    

    <Router>


    <div className="App">

   

    <NavBar name={Page} filterM = {FilterMovie}/>
     
     <Switch>
     
     <Route path='/' component={Home} exact/>
     <Route path='/MovieContent' component ={MovieContent}/>
     <Route path='/Trailer' component ={Trailer}/>
     <Route path='/Dashboard' component ={Dashboard}/>
    

     </Switch>

      <Login/>

    </div>
    
    </Router>

  );
}

export default App;
