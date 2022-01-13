import React, { Component } from 'react';
import produce from "immer";

class Counter extends Component {
    state={
        value: 0,
    }
    incrementCounter = ()=>{
        this.setState(
            produce(this.state, draftState => {
                console.log("draftState",draftState);
                console.log("State value",this.state);
                draftState.value +=1;
            })
        )
    }
    render() { 
        return <div>
            <div>Counter App value {this.state.value}</div>
            <button onClick={this.incrementCounter}>increment</button>
        </div>;
    }
}
 
export default Counter;