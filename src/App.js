
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
     
       {logged ? <Route exact path="/Home" component={Acceuil}></Route> : <Redirect to={"/"} />  }
      {logged ? <Route exact path="/Chat" component={Chat}></Route> : <Redirect to={"/"} />  }
     {logged ?  <Route exact path="/Groupe" component={Groupe}></Route> :<Redirect to={"/"} />  }
     {!logged ? <Route exact path="/" component={Login}></Route> : <Redirect to={"/home"} />}
        <Route exact path="/inscription" component={Inscription}></Route>
      </Router>
    </div>
  );
}

export default App;
 