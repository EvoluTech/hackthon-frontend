
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Tamby/Login/Login'
import Inscription from './Tamby/Login/Inscription/Inscription'
function App() {
  return (
    <div className="body">
      <Router>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/inscription" component={Inscription}></Route>
      </Router>
    </div>
  );
}

export default App;
