import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p> This works! </p>
        </div>
    );
    // return React.createElement('div', null, 'h1', 'Hello World');
    // return React.createElement('div', {className:'App'}, React.createElement('h1',null, 'Hello World'));
}

export default App;
