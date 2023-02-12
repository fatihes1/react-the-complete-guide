import React, { useState, useCallback } from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);

    console.log("APP RUNNING");

    // IF we know that this function will never change, we can use useCallback
    const toggleParagraphHandler = useCallback(() => {
        if(allowToggle) {
            setShowParagraph(prevShowParagraph => !prevShowParagraph);
        }
    }, [allowToggle]);

    const allowToggleHandler = () => {
        setAllowToggle(true);
    };

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={showParagraph} />
            <Button onClick={allowToggleHandler}>Allow Toggling</Button>
            <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
        </div>
    );
}

export default App;
