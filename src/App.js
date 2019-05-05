import React from 'react';
import './App.css';

import SimpleComponent from "./trial-components/SimpleComponent";
import ComponentWithProps from "./trial-components/ComponentWithProps";

function App() {
    return (
        <div className="App">
            <SimpleComponent/>
            <ComponentWithProps title={TitleFunc()} content={ContentFunc()}/>
        </div>
    );
}

function TitleFunc() {
    return (
        <h2>
            Title from function.
        </h2>
    );
}

function ContentFunc() {
    return (
        <p>
            Content from function.
        </p>
    );
}

export default App;
