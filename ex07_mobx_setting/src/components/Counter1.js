import React from 'react';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';

/*
    Decorator를 사용한 Counter
*/
// 최하단에 있던 observer가 위로 올라옴
@observer
class Counter extends React.Component {
    @observable number = 0;

    @action
    increase = () => {
        this.number++;
    }

    @action
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

// **** decorate는 필요없어짐
// decorate(Counter, {
//     number: observable,
//     increase : action,
//     decrease : action
// })

//export default observer(Counter);

export default Counter;