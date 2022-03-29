
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Tamby/Login/Login'
import Inscription from './Tamby/Login/Inscription/Inscription'
import Header from './Tamby/Menu/Header'
import Chat from './Tamby/Chat/Chat'
function App() {
  return (
    <div className="body">
      <Router>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/inscription" component={Inscription}></Route>
        <Route exact path="/Home" component={Header}></Route>
        <Route exact path="/Chat" component={Chat}></Route>
        <Route exact path="/Groupe" component={Header}></Route>
      </Router>
    </div>
  );
}

export default App;
 