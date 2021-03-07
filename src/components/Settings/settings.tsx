import React from 'react';
import {Card} from 'antd';
import EditSettings from './editSettings';
import {Question} from '../../interfaces/templates';
import '../style.css';

interface Props {
    setQuestions: (newQuestions: Question[]) => void
}

function Settings({setQuestions}: Props) {
    const cardStyle = {
        width: 700,
        borderRadius: 10,
        marginTop: 20,
    }

    return (
        <div className="cardContainer">
        <Card title="Help us prepare your quiz!" hoverable style={cardStyle}>
            <EditSettings setQuestions={setQuestions}/>
        </Card>
        </div>
    )
}

export default Settings
