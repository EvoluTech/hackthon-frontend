
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Tamby/Login/Login'
import Inscription from './Tamby/Login/Inscription/Inscription'
import Acceuil from './Tamby/Acceuill/Acceuill'
import Chat from './Tamby/Chat/Chat'
function App() {
  return (
    <div className="body">
      <Router>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/inscription" component={Inscription}></Route>
        <Route exact path="/Home" component={Acceuil}></Route>
        <Route exact path="/Chat" component={Chat}></Route>
        <Route exact path="/Groupe" component={Acceuil}></Route>
      </Router>
    </div>
  );
}

export default App;
 