import React, {useState} from "react";
import './App.css';
import Person from './Person/Person';

const AppFunction = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Max', age: 28},
            {name: 'Irving', age: 18},
            {name: 'Dummy', age: 999}
        ],
        otherState: 'some other val'
    });

    const [otherState, setOtherState] = useState({otherState:'some other val'});

    console.log(personsState, otherState);
    const switchNameHandler = () => {
        // console.log('Was clicked!');
        // this.state.persons[0].name = 'MaxMax';
        //Override
        setPersonsState({
            persons: [
                {name: 'switched', age: 28},
                {name: 'Irving', age: 18},
                {name: 'Dummy', age: 99}
            ]
            // , otherState: personsState.otherState
        })
    }

    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p> This works! </p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}
            />
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}
            >
                Hobbies: SDE
            </Person>
            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}
            />
        </div>
    );
}

export default AppFunction;