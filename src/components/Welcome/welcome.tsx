import React from 'react';
import {Card, Input, Button} from 'antd';
import {useHistory} from "react-router-dom";
import '../style.css';

interface Props {
    name: string;
    setName: (newName: string) => void
}

export default function Welcome({name, setName}: Props) {
  const history = useHistory();
  console.log(name.length);
    const cardStyle = {
        width: 300,
        borderRadius: 5,
        margin: 20
      }

    const btnStyle = {
      width: "100%", 
      margin: 5 , 
      height: 50, 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center"
    }
    
    return (
      <Card style={cardStyle} hoverable>
        <div className="cardContainer">
      <Input style={{margin: 5, height: 50}} placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
      <Button type="primary" style={btnStyle} onClick={() => history.push("/settings")} disabled={name.length===0 ? true : false}> 
        <p className="btnText">Get Started</p> 
      </Button>
        
        </div>
      </Card>
    )
}
