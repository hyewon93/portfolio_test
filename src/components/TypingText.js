import React, { useState, useEffect } from 'react';

const TypingText = ({text, speed, fontSize, color}) => {
    TypingText.defaultProps = {
        fontSize: '1em', 
        color: 'black'
    }
    const [Text, setText] = useState("");
    const [Count, setCount] = useState(0);

    useEffect(() => {
        let typingText = text ? text : "";
        let typingSpeed = speed ? speed : 100;
        const interval = setInterval(() => {
            setText((Text)=>{
            let updated = Text;
            updated = Text + typingText[Count];
            return updated;
            });
            setCount(Count + 1); 
        }, typingSpeed);
        Count === typingText.length && clearInterval(interval);
        return () => clearInterval(interval);
    })
    return (
        <p style={{fontSize:`${fontSize}`, color:`${color}`}} >{ Text }</p>
    )
};

export default TypingText;