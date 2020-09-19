import React from "react";

// a component is just a function which returns some jsx, some html
// ES6, function name started with lower case
// const person = (props) => {
//     return <p>I'm {props.name} and I am {props.age} years old!</p>
// };

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            {/*<input type="text" onChange={props.changed} value={props.name}/>*/}
            {/*can't change*/}

            <input type="text" onChange={props.changed} defaultValue={props.name}/>
        </div>
    );
};

export default person;

// function keyword directly
// function person(){
//     return <h2></h2>
// }

// ES5 syntax
// var person = function (){
//
// }