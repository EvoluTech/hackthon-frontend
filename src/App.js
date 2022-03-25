
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './Tamby/Login/Login'
function App() {
  return (
    <div className="body">
      <Router>
        <Route exact path="/" component={Login}></Route>
       </Router>  
  </div>
  );
}

export default App;
