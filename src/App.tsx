import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Heading from './components/Heading/heading';
import Welcome from './components/Welcome/welcome';
import Settings from './components/Settings/settings';
import './App.css';

function App() {
  const [name, setName] = useState("");
  //const [topics, setTopics] = useState([]);
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/welcome">
            <div style={{marginTop: 150}}>
          <Heading message="QuizMe!"/>
          <Welcome name={name} setName={setName}/>
          </div>
          </Route>

          <Route path="/settings">
            <div style={{marginTop: 50}}>
            <Heading message={`Hey, ${name}...`}/>
              <Settings />
              </div>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
