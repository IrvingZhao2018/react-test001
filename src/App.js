import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {id: 'sad', name: 'Max', age: 28},
            {id: 'gf', name: 'Irving', age: 18},
            {id: 'vxc', name: 'Dummy', age: 999}
        ],
        otherState: 'some other val',
        showPersons: false
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

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        // Old Approach
        // const person = Object.assign({}, this.state.persons[personIndex])

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    }
    togglePersonHandler = () => {
        const doesShowPersons = this.state.showPersons;
        this.setState({
            persons: this.state.persons,
            showPersons: !doesShowPersons
        });
    }

    deletePersonHandler = (personIndex) => {
        // console.log(this.state.persons);  // reference
        // const persons = this.state.persons.splice(0); // copy
        const persons = [...this.state.persons]; // copy
        persons.splice(personIndex, 1); // remove element
        this.setState({persons: persons})
    }


    render() {
        const style = {
            backgroundColor: "green",
            color:"white",
            font: 'inherit',
            border: '1x solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed ={(event) => this.nameChangedHandler(event, person.id)}
                        />
                    })}
                    {/*<Person*/}
                    {/*    name={this.state.persons[0].name}*/}
                    {/*    age={this.state.persons[0].age}*/}
                    {/*    click={this.switchNameHandler.bind(this, 'switched on text')}*/}
                    {/*/>*/}
                    {/*<Person*/}
                    {/*    name={this.state.persons[1].name}*/}
                    {/*    age={this.state.persons[1].age}*/}
                    {/*>Hobbies: SDE</Person>*/}
                    {/*<Person*/}
                    {/*    name={this.state.persons[2].name}*/}
                    {/*    age={this.state.persons[2].age}*/}
                    {/*    changed={this.nameChangedHandler}*/}
                    {/*/>*/}
                </div>
            );

            style.backgroundColor = "red";
        }
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p> This works! </p>
                <button
                    style={style}
                    onClick={this.switchNameHandler.bind(this, 'switched by .bind()')}>switch.bind()
                </button>
                {/*if this.switchNameHandler(), would call when rendering,*/}
                {/*but should call when click. Therefore, just use reference here*/}


                <button onClick={() => this.switchNameHandler('switched by ArrowFunction')}>switch Arrow Function</button>
                {/*inefficient, react can re-render too often*/}

                <button style={style} onClick={() => this.togglePersonHandler()}> show persons</button>

                {persons}

                <input type="text" onChange={this.nameChangedHandler}/>
            </div>
        );
    }
}

export default App;
