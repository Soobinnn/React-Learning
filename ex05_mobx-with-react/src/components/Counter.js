import React from 'react';
import {decorate, observable, action} from 'mobx';
import {observer} from 'mobx-react';

/*
    기본 Counter
*/
class Counter extends React.Component {
    number = 0;

    increase = () => {
        this.number++;
    }

    descrease = () => {
        this.number--;
    }

    render() {
        return (
            <div>
                <h1>{this.number}</h1>
                <button onClick={this.increase}>+1</button>
                <button onClick={this.descrease}>-1</button>
            </div>
        );
    }

}

decorate(Counter, {
    number: observable,
    increase : action,
    decrease : action
})

export default observer(Counter);