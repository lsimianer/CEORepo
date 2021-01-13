import React from 'react';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect, 
  useLocation
} from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
//  import components 
import Home from './pages/Home';

// css master
import './App.css';

const Oswald =  "'Oswald', sans-serif";

const theme = createMuiTheme({
  typography: {
    fontFamily: Oswald,    
    }
  }
);

const AppPages = () => {
  const location = useLocation();
  return (
    <>
    <Route exact path="/" component={Home}/> 
    <Redirect to="/" />
    </>
  );
};



function App() {

  return (
        <Router>
          <AppPages />
        </Router>
  );
}

export default App;

