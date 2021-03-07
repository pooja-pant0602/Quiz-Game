import React from 'react';
import {Button} from 'antd';
import {useHistory} from "react-router-dom";
import '../style.css';

interface Props {
    score: number;
}

function GameOver({score}: Props) {
    const history = useHistory();
    return (
        <div className="cardContainer" style={{marginTop: 150}}>
            <div className="status" style={{fontSize: 30}}>
            <p>GAME OVER</p>
            <p>{`Your final score is ${score}`}</p>
            </div>

            <div className="btnContainer">
                <Button size="large" onClick={() => history.push("/settings")}>Play Again</Button>
                <Button size="large" onClick={() => history.push("/welcome")} style={{marginLeft: 20}}>Finish Game</Button>
            </div>
        </div>
    )
}

export default GameOver
