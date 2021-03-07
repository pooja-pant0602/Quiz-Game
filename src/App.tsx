import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Heading from './components/Heading/heading';
import Welcome from './components/Welcome/welcome';
import Settings from './components/Settings/settings';
import Quiz from './components/QuizGame/quiz';
import {Question} from './interfaces/templates';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions]: [Question[], (val: Question[])=> void] = useState([{
    category: "nan",
    type: "nan",
    difficulty: "nan",
    correct_answer: "nan",
    incorrect_answers: ["nan"],
    question: "nan"
  }]);

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
              <Settings setQuestions={setQuestions}/>
              </div>
          </Route>

          <Route path="/quiz">
            <Quiz questions={questions}/>
          </Route>

          <Route path="/">
            <Redirect to="/welcome"/>
          </Route>
          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
