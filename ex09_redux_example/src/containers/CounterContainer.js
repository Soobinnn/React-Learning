import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement } from '../store/modules/counter';
//import { bindActionCreators } from 'redux';

class CounterContainer extends Component {
  handleIncrement = () => {
    this.props.increment();
  };
  handleDecrement = () => {
    this.props.decrement();
  };
  render() {
    const { color, number } = this.props;
    return (
      <Counter
        color={color}
        value={number}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
      />
    );
  }
}

const mapStateToProps = ({ counter }) => ({
  color: counter.color,
  number: counter.number,
});

// bindActionCreators은 액션이 두개 이상일 때,
//actionCreator: (...params) => dispatch(actionCreator(...params)에 해당하는 작업을 자동으로 해줌. 만약 파라미터를 필요로 하는 것이더라도 정상적으로 작동함.

// 함수형태가 아닌 액션생성함수로 이뤄진 객체를 전달해주면 connect가 발생하게 될 때 bindACtionCreators를 자동으로 해줌.

// const mapDispatchToProps = dispatch => ({
//   // increment: () => dispatch(increment()),
//   // decrement: () => dispatch(decrement()),
//   bindActionCreators({ increment, decrement }, dispatch);
// });
const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
