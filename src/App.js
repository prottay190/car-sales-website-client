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
import Login from './Pages/LogIn/Login/Login';
import Register from './Pages/LogIn/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/LogIn/Login/PrivateRoute/PrivateRoute';
import AddService from './Pages/AddService/AddService';
import Dashboard from './Pages/DashBoard/Dashboard/Dashboard';
import Orders from './Pages/DashBoard/Orders/Orders';
import Review from './Pages/Home/Review/Review';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/purchase">
              <Purchase />
            </PrivateRoute>
            <PrivateRoute path="/addservice">
              <AddService />
            </PrivateRoute>
            <Route path="/moreServices">
              <Cars />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/review">
              <Review />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
