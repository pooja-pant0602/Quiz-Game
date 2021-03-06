import React, {useState} from 'react';
import {Card} from 'antd';
import EditSettings from './editSettings';
import '../style.css';

function Settings() {
    //const [questions, setQuestions] = useState("10");
    const cardStyle = {
        width: 500,
        borderRadius: 10,
        marginTop: 20
    }

    return (
        <div className="cardContainer">
        <Card title="Help us prepare your quiz!" hoverable style={cardStyle}>
            <EditSettings />
        </Card>
        </div>
    )
}

export default Settings
