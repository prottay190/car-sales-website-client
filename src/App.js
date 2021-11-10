import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Cars from './Pages/MoreServices/Cars/Cars';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/purchase">
            <Purchase />
          </Route>
          <Route path="/moreServices">
            <Cars />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
