import React, { Component } from 'react';

class Counter extends Component {

    constructor() {
        super();

        //state must be a dictionary
        this.state = {
            'count' : 0
        };
    }

    //increment = () => { //shortened form of function declaration
    //increment = function() { //doesn't work.
    increment() { //works
        this.setState({'count': this.state.count + 1}); //works
        //this.state.count += 1; //doesn't work
    };

    render() {
        var currentColor = 'blue';

        if(this.state.count % 2 === 0) {
            currentColor = 'red';
        }

        return (
            <div onClick={this.increment} style={{'backgroundColor' : currentColor}}>
                Counter for {this.props.name} : {this.state.count}
            </div>
        )
    }

    
}

//This means that whenever someone imports something from Counter.js
//the default will be this Counter class.
export default Counter;