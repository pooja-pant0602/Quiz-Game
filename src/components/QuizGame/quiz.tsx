import React, {useState} from 'react'
import {Question} from '../../interfaces/templates';
import {Button, Card} from 'antd';
import Option from './option';

interface Props {
    questions: Question[];
}

const cardStyle = {
    marginTop: 20,
    borderRadius: 5,
}

const nextQuestion = (index: number, setIndex: (val: number) => void, 
                        setShowAns: (val: boolean) => void, num: number) => {
    setShowAns(false);
    if(index + 1 < num) {
        setIndex(index + 1);
    } else {
        return;
    }
    
}

function Quiz({questions}: Props) {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showAns, setShowAns] = useState(false);
    const [status, setStatus] = useState("");
    const no_of_questions = questions.length;

   if(questions[index].question !== "nan"){
       return (
           <div className="cardContainer" style={{marginTop: 80}}>
            <div className="scoreContainer">
                <p>{`Score: ${score}/${no_of_questions}`}</p>
            </div>
           <Card hoverable title={questions[index].question} style={cardStyle}>
               <Option correct_answer={questions[index].correct_answer} incorrect_answers={questions[index].incorrect_answers}
                score={score} setScore={setScore} showAns={showAns} setShowAns={setShowAns} setStatus={setStatus}/>

                <Button type="primary" style={{width: "100%", height: 50, marginTop: 40}} onClick={() => nextQuestion(index, setIndex, setShowAns, no_of_questions)}>Next Question</Button>
           </Card>

            {showAns ? <div className="status">
               <p>{`That is ${status}!`}</p>
           </div> : null}
           </div>
       )
   } else {
       return null;
   }
}

export default Quiz;
