import React from 'react';
import '../style.css';

interface Props {
    message: string;
}

function Heading({message}: Props) {

    return (
        <div className="heading">{message}</div> 
    )
}

export default Heading;
