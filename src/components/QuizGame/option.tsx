import React from 'react';
//import {getOptions} from '../../utils';
import {Button} from 'antd';

interface Props {
    correct_answer: string;
    incorrect_answers: string[];
    score: number;
    setScore: (val: number) => void;
    showAns: boolean;
    setShowAns: (val: boolean) => void;
    setStatus: (val: string) => void;
}

const handleClick = (option: string, correct_ans: string, score: number,
                    setShowAns: (val: boolean) => void, setScore: (val: number) => void,
                    setStatus: (val: string) => void) => {
    if(option === correct_ans) {
        setScore(score+1);
        setStatus("correct");
    } else {
        setStatus("incorrect");
    }
    setShowAns(true);
}

const getOptions = (correct_ans: string, incorrect_ans: string[]) => {
    const rand_index = Math.random() * (incorrect_ans.length + 1);
    const options = [...incorrect_ans];
    options.splice(rand_index, 0, correct_ans);
    return options;
}

function Option({correct_answer, incorrect_answers, score, setScore, showAns, setShowAns, setStatus}: Props) {
    const options = getOptions(correct_answer, incorrect_answers);
    console.log(options);
    return (
        <div>
            {options.map((option) => {
                return <Button key={option} shape="round" style={
                    {width: "100%", margin: 10, background: showAns && option === correct_answer ? "rgb(149, 228, 149)" : "#fff"}} onClick={() => handleClick(option, correct_answer, score, setShowAns, setScore, setStatus)}>{option}</Button>
            })}
        </div>
    )
}

export default Option;
