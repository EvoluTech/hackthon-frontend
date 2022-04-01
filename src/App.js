
import './App.css';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Login from './Tamby/Login/Login'
import Inscription from './Tamby/Login/Inscription/Inscription'
import Acceuil from './Tamby/Acceuill/Acceuill'
import Chat from './Tamby/Chat/Chat'
import Groupe from './Tamby/Groupe/Groupe'
import { useEffect, useState } from 'react';
function App() {
 const [logged,setlogged] = useState(false);

    
 setInterval(() => {
       
const token = localStorage.getItem("token");  

  if (token) {
    setlogged(true);
  }else{
    setlogged(false)
  }
 }, 1000);
  
  return (
    
    <div className="body">
      <Router>
     
      <Route exact path="/Home" component={Acceuil}></Route> 
     <Route exact path="/Chat" component={Chat}></Route> 
     <Route exact path="/Groupe" component={Groupe}></Route> 
     <Route exact path="/" component={Login}></Route>
    <Route exact path="/ListGroupe/Groupe" component={Groupe}></Route>
        <Route exact path="/inscription" component={Inscription}></Route>
      </Router>
    </div>
  );
}

export default App;
