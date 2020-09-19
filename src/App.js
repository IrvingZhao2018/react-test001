import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

// function App() {
//     return (
//         <div className="App">
//             <h1>Hi, I'm a React App</h1>
//             <p> This works! </p>
//             <button>Switch Name</button>
//             <Person name={"Max"} age={"28"}/>
//             <Person name={"Irving"} age={"18"}>My Hobbies: SDE</Person>
//             <Person name={"Dummy"} age={"280"}/>
//         </div>
//     );
//     // return React.createElement('div', null, 'h1', 'Hello World');
//     // return React.createElement('div', {className:'App'}, React.createElement('h1',null, 'Hello World'));
// }

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Irving', age: 18},
            {name: 'Dummy', age: 999}
        ],
        otherState: 'some other val'
    }

    switchNameHandler = (newName) => {
        // console.log('Was clicked!');
        // this.state.persons[0].name = 'MaxMax';
        //Override
        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: 'Irving', age: 18},
                {name: 'Dummy', age: 99}
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Max', age: 28},
                {name: 'Irving', age: 18},
                {name: event.target.value, age: 999}
            ]
        })
    }

    render() {
        const style = {
            backgroundColor: "white",
            font: 'inherit',
            border: '1x solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p> This works! </p>
                <button
                    style={style}
                    onClick={this.switchNameHandler.bind(this, 'switched by .bind()')}>.bind()</button>
                {/*if this.switchNameHandler(), would call when rendering,*/}
                {/*but should call when click. Therefore, just use reference here*/}


                <button onClick={() => this.switchNameHandler('switched by ArrowFunction')}>Arrow Function</button>
                {/*inefficient, react can re-render too often*/}
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click={this.switchNameHandler.bind(this, 'switched on text')}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                >Hobbies: SDE</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                    changed={this.nameChangedHandler}
                />
                <input type="text" onChange={this.nameChangedHandler}/>
            </div>
        );
    }
}

export default App;
