import React from 'react';
import './App.css';
import NavigateBar from './components/NavigateBar';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactInfo from './components/pages/ContactInfo';

function App() {
  return (
    <>
      <Router>
        <NavigateBar />
        <Switch>
          <Route path="/home" exact component = {Home} />
          <Route path="/about" component = {About} />
          <Route path="/contactInfo" component = {ContactInfo} />
        </Switch>
      </Router>
    
    </>
  );
}

export default App;
