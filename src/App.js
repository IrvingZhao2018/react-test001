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

    switchNameHandler = () => {
        // console.log('Was clicked!');
        // this.state.persons[0].name = 'MaxMax';
        //Override
        this.setState({
            persons: [
                {name: 'switched', age: 28},
                {name: 'Irving', age: 18},
                {name: 'Dummy', age: 99}
            ]
        })
    }


    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p> This works! </p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                {/*if this.switchNameHandler(), would call when rendering,*/}
                {/*but should call when click. Therefore, just use reference here*/}
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
    }
}

export default App;
